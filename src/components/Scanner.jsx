import { useState } from 'react';
import { Html5QrcodeScanner } from 'html5-qrcode'
import { useEffect } from 'react';
import '../App.css'

function Scanner() {

  const [scanResult, setScanResult] = useState(null);

  useEffect(() => {
    const scanner = new Html5QrcodeScanner('reader', {
      qrbox:  {
        width:250,
        height:250,
      },
      fps: 5,
    })
  
    scanner.render(success, error);
  
    function success(result){
      scanner.clear();
      setScanResult(result);
    }
  
    function error(err){
      console.wa4(err);
    }  
  },[]);

 
  return (
    <>
     <div className='App'>
        { scanResult
          ? <div>Success: {scanResult}</div>
          : <div id='reader'></div>
        }
     </div>
    </>
  )
}

export default Scanner
