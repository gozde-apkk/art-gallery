



import React from 'react'
import styles from './Loader.module.scss'
import ReactDOM from 'react-dom' //import ReactDom 
import HashLoader from "react-spinners/HashLoader";
import { useState } from "react";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "gray",

};
const Loader = () => {
  return ReactDOM.createPortal(
    <div className={styles.wrapper}>
        <div className={styles.loader}>
        <HashLoader		
          cssOverride={override}
          size={300}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
        </div>
    </div>,
    document.getElementById('loader')
  )
}

export const Spinner = () => {
    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("#dc143c");
  
    return (
      <div className="sweet-loading">
        
  
        <HashLoader		
          color={color}
          loading={loading}
          cssOverride={override}
          size={100}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    );
}
export default Loader
