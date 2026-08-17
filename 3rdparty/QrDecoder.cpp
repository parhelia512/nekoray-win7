#include "QrDecoder.h"

#include "quirc/quirc.h"
#include <cstring>
#include <qdebug.h>

#include "quirc/quirc_internal.h"

QrDecoder::QrDecoder()
    : m_qr(quirc_new())
{
}

QrDecoder::~QrDecoder()
{
    quirc_destroy(m_qr);
}

QVector<QString> QrDecoder::decode(const QImage &image)
{
    QVector<QString> result;
    if (m_qr == nullptr)
    {
        return result;
    }

    const QImage grey = image.format() == QImage::Format_Grayscale8
                            ? image
                            : image.convertToFormat(QImage::Format_Grayscale8);
    const int width = grey.width();
    const int height = grey.height();
    if (width <= 0 || height <= 0)
    {
        return result;
    }

    if (quirc_resize(m_qr, width, height) < 0)
    {
        return result;
    }

    uint8_t *rawImage = quirc_begin(m_qr, nullptr, nullptr);
    if (rawImage == nullptr)
    {
        return result;
    }
    // QImage pads scanlines to 4 bytes, quirc wants them packed: copying straight through shears it.
    for (int y = 0; y < height; ++y)
    {
        std::memcpy(rawImage + static_cast<size_t>(y) * width, grey.constScanLine(y), width);
    }
    quirc_end(m_qr);

    const int count = quirc_count(m_qr);
    if (count < 0)
    {
        return result;
    }

    for (int index = 0; index < count; ++index)
    {
        quirc_code code;
        quirc_extract(m_qr, index, &code);

        quirc_data data;
        const quirc_decode_error_t err = quirc_decode(&code, &data);
        if (err == QUIRC_SUCCESS)
        {
            result.append(QString::fromUtf8((const char *)data.payload, data.payload_len));
        }
    }

    return result;
}
