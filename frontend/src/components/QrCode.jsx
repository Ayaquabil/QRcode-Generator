import React, { useState } from "react";
import axios from "axios";

const QrCode = () => {
  const [url, setUrl] = useState("");
  const [qrImage, setQrImage] = useState("");
  const [error, setError] = useState("");

  const GenerateQrcode = async (e) => {
    e.preventDefault();
    try {
      if (!url) {
        setError("Please enter a URL");
        return;
      }
      
      const response = await axios.post(
        "http://localhost:5000/api/scanQrcode",
        { url }
      );
      
      setQrImage(response.data);
      setError("");
    } catch (err) {
      setError("Error generating QR Code");
      console.error(err);
    }
  };const downloadQRCode = () => {
    if (!qrImage) {
      setError("No QR Code to download");
      return;
    }

    // Create a temporary anchor element
    const link = document.createElement("a");
    link.href = qrImage;
    link.download = "qrcode.png"; // File name for download
    document.body.appendChild(link);
    link.click(); // Trigger download
    document.body.removeChild(link); // Clean up
  };

  return ( 
    <div className="w-full max-w-md flex flex-col items-center gap-4 ">
    
<div className="text-center ">
  <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 ">
    Generate and Download QR Code
  </h2>
  <p className="mt-2 text-md text-gray-600">
    Create your QR code in seconds and download it instantly!
  </p>
</div>

      <label className="input input-bordered flex items-center gap-2 p-0 w-full">
        <input
          type="text"
          className="grow px-4 border-none"
          placeholder="Type your URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <button
          className="btn btn-outline btn-md flex-shrink-0 rounded-l-none"
          onClick={GenerateQrcode}
        >
          Generate
        </button>
      </label>
      
      {error && <p className="text-red-500">{error}</p>}
      
      {qrImage && (
        <div className="mt-4 p-4 bg-white rounded-lg shadow">
          <img src={qrImage} alt="QR Code" className="w-40 h-40" />
          <button className="btn btn-primary btn-md" onClick={downloadQRCode} >   Download QR Code  </button>
        </div>
    
      )}
    </div>
    
  );
 
  };

export default QrCode;