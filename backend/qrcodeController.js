import QRCode from 'qrcode';

export const scanQrcode = async (req, res) => {
  try {
    const { url } = req.body;
    
    if (!url) {
      return res.status(400).json({ error: "URL is required" });
    }

    QRCode.toDataURL(url, (err, dataUrl) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: "Error generating QR Code" });
      }
      res.json(dataUrl);
    });
    
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};