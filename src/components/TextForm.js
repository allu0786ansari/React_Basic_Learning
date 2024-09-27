import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = () => {
        console.log("Uppercase was clicked");
        setText(text.toUpperCase());
    }
    const handleOnChange = (event) => {
        console.log("OnChange was clicked");
        setText(event.target.value);
    }

    const [text, setText]=useState('Enter your text');
    
  return (
    <div> 
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <label htmlFor="MyBox" className="form-label"></label>
            <textarea className="form-control" value={text} onChange={handleOnChange} id="MyBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick} >Convert To Uppercase</button>
    </div>
  )
}
