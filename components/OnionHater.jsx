import { useState } from "react";
import './OnionHater.css'

const OnionHater = () => {

  const [valuetext, setValue] = useState ('');

    const handleChange = (text) => {
      const value = text.target.value;
        setValue(value);
          if (value.toLowercase().includes('cebolla')){
            alert ('ODIO LA CEBOLLA');
      }
    }
  
  return (  
    <>
      <div className="container">    
         <input type="textarea" name={valuetext} onChange={handleChange}/>
      </div>
    </>

  );
};


export default OnionHater;


