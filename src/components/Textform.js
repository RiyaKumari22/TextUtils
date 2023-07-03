
import React, {useState} from 'react'


export default function Texthtmlform(props) {
    const handleUpClick=()=>{
    
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!", "success");
    }
    const handleLowClick=()=>{
      
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!", "success");
    }
    const handleClear=()=>{
        let newText='';
        setText(newText);
        props.showAlert("Text Cleared!", "success");
    }
    const handleCopy=()=>{
        var text=document.getElementById("myBox");
        text.select();
navigator.clipboard.writeText(text.value);
document.getSelection().removeAllRanges();
        props.showAlert("Copied to Clipboard", "success");
    }
    const handleExtraspace=()=>{
        let newText=text.split(/[ ]+/)

        setText(newText.join(" "))
        props.showAlert("Extra spaces removed!", "success");
    }
    const handleOnChange=(event)=>{
   
setText(event.target.value)
    }
    const [text, setText  ] =  useState('Enter text here:'); //setText function is used to set text.
    // text='new text'; -->wrong way to set text in state.
    return (
        <>
        <div className='container'style={{color:props.mode==='dark'?'white':'dark'}}>
            <h1 style={{color:props.mode==='dark'?'white':'black'}}>
                {props.heading}
            </h1>
            <div className="mb-3 my-2">


                <textarea value={text}name="" onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} className='form-control' id="myBox" cols="30" rows="10"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
            <button disabled={text.length===0}className="btn btn-primary mx-2 my-1" onClick={handleLowClick}>Convert to LowerCase</button>
            <button disabled={text.length===0}className="btn btn-primary mx-2 my-1" onClick={handleClear}>CLear Text</button>
            <button disabled={text.length===0}className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy Text</button>
    
            <button disabled={text.length===0}className="btn btn-primary mx-2 my-1" onClick={handleExtraspace}>Remove Extra Spaces</button>



        </div>
        <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
            <h1 >
               <strong>Your Text Summary</strong> </h1>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008 *text.split(" ").filter((element)=>{return element.length!==0}).length} minutes takes to read</p>
            <h3><strong>Preview</strong> </h3>
           <p>{text.length>0?text:"Nothing to Preview"}</p>
        </div>
        </>
    )
}
