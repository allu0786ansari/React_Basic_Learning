import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = () => {
        setText(text.toUpperCase());
    }
    const handleLoClick = () => {
        setText(text.toLowerCase());
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const [text, setText]=useState('Enter your text');
    
  return (
    <>
    <div className='container'> 
        <h2>{props.heading}</h2>
        <div className="mb-3">
            <label htmlFor="MyBox" className="form-label"></label>
            <textarea className="form-control" value={text} onChange={handleOnChange} id="MyBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick} >Convert To Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick} >Convert To LowerCase</button>
    </div>
    <div className='container my-3'>
        <h2>Your Text Summary:</h2>
        <p>{text.split(" ").length} words {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>

    </div>
    </>
  )
}
