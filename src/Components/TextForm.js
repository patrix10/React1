import React, {useState} from 'react'

export default function TextForm(props) {
    const handleupclick = ()=> {
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to UpperCase","success")
    }

    const handledownclick = ()=> {
        let newText = text.toLowerCase()
        setText(newText) 
        props.showAlert("Converted to LowerCase","success")
    }

    const clear = ()=> {
      setText("") 
  }

    const handleonchange = (event)=> {
        setText(event.target.value)
    }

  const[text, setText] = useState('');
  return (
    <>
    <div className="container">
        <h2>{props.heading}</h2>
        <div className="mb-3">
        <textarea className="form-control" id="myBox" rows="8" value = {text} onChange = {handleonchange} placeholder="Write Here" style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'black'}}></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleupclick}>Convert to Uppercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handledownclick}>Convert to Lowercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={clear}>Clear All</button>
    </div>
    <div className="container my-3">
      <h1>Your Text Summary</h1>
      <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} Words and {text.length} characters</p>
    </div>
    </>
  )
}