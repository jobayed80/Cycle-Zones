import React, { useState } from 'react'

// import { QRCodeCanvas } from "qrcode.react";
// import './QRcode.css'
import QRCode from 'qrcode'
import { Button } from '@mui/material';



const QRcode = () => {

  const [url, setUrl] = useState("");
  const [qr, setQr] = useState("");

  const GenerateQRCode = () => {
    QRCode.toDataURL(
      url,
      {
        width: 800,
        margin: 2,
        color: {
          dark: "#335383FF",
          light: "#EEEEEEFF"
        },
      },
      (err, url) => {
        if (err) return console.log(err);
        console.log(url)
        setQr(url)
      }
    )
  }

  // const downloadQRCode = (e) => {
  //   e.preventDefault();
  //   let canvas = qrRef.current.querySelector("canvas");
  //   let image = canvas.toDataURL("image/png");
  //   let anchor = document.createElement("a");
  //   anchor.href = image;
  //   anchor.download = `qr-code.png`;
  //   document.body.appendChild(anchor);
  //   anchor.click();
  //   document.body.removeChild(anchor);
  //   setUrl("");
  // };

  // const qrCodeEncoder = (e) => {
  //   setUrl(e.target.value);
  // };

  // const qrcode = (
  //   <QRCodeCanvas
  //     id="qrCode"
  //     value={url}
  //     size={300}
  //     bgColor={"#00ff00"}

  //   />
  // );



  return (

    <section className='min-h-[100vh]'>
      <div className="container mx-auto mt-10 text-center">
        <h1 className='text-black text-[2rem] text-justify mb-10 mt-20'>This part just used for Developer. Infuture used for Admin panel because Admin can generate QR Code for Cycle</h1>
        <h1 className='text-black text-[2.5rem] font-semibold text-center mb-10'>QR Coder</h1>
        <input
          placeholder='Cycle Id'
          type="text"
          className='text-center p-2 rounded-md text-[20px] font-body mr-10'
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />

        <button variant='contained' className='mt-10 bg-slate-500 w-[100px] h-[40px] rounded-lg mb-10 text-white text-[20px]' onClick={GenerateQRCode}>Generate</button>
        
        {qr && (
          <>
            <img className='w-[250px] h-[250px] mb-8 mx-auto rounded-2xl' src={qr} alt="" />
            <Button
              // className='mb-10 bg-green-700 w-[150px] h-[50px] rounded-md'
              variant='contained'
              color='success'
              href={qr}
              download={url}
            >Download</Button>
          </>
        )}
      </div>
    </section>






    // <div className="qrcode__container">
    //   <div>{qrcode}</div>
    //   <div className="input__group">
    //     <form onSubmit={downloadQRCode}>
    //       <label>Enter URL</label>
    //       <input
    //         type="text"
    //         value={url}
    //         onChange={qrCodeEncoder}
    //         placeholder="https://hackernoon.com"
    //       />
    //       <button download type="submit" disabled={!url}>
    //         Download QR code
    //       </button>
    //     </form>
    //   </div>
    // </div>




  )
}

export default QRcode