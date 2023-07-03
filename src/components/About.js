import React, {useState} from 'react'


export default function About(props) {
    const [mystyle, setmystyle  ] =  useState({ color:"#495057",
    backgroundColor:"white"});
    
   const  togglestyle=()=>{
        if(mystyle.color==='white'){
            setmystyle({
                color:'#495057',
                backgroundColor:'white',
                border:' 2px solid white'
            })
            
        }
        else{
            setmystyle({
                color:'white',
                backgroundColor:'#495057'
            })
        
        }
    }
    
  return (
    <div classname="container" style={{color:props.mode==='dark'?'white':'#495057'}} >
        <h2 className='my-3' >ABOUT US</h2>
      <div class="accordion " id="accordionExample" style={mystyle}>
  <div class="accordion-item">
    <h2 class="accordion-header" >
      <button class="accordion-button"  style={{backgroundColor:props.mode==='dark'?'#495057':'white',color:props.mode==='dark'?'white':'#495057'}}type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
       <strong>MANIPULATE TEXT</strong> 
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body" style={{backgroundColor:props.mode==='dark'?'#495057':'white',color:props.mode==='dark'?'white':'#495057'}}>
        <strong>TextUtil helps you to manipulate your text quickly and efficiently.</strong> You can change all the text either in lower case or in upper case.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed"style={{backgroundColor:props.mode==='dark'?'#495057':'white',color:props.mode==='dark'?'white':'#495057'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
     <strong>ANALYZE TEXT</strong> 
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body" style={{backgroundColor:props.mode==='dark'?'#495057':'white',color:props.mode==='dark'?'white':'#495057'}}>
        <strong>TextUtil is a friendly word counter website.</strong> TextUtil can make it possible to analyze your text in different ways. It can count words, characters and calculate the time it takes to read your text. It can accomodate the unlimited text.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" style={{backgroundColor:props.mode==='dark'?'#495057':'white',color:props.mode==='dark'?'white':'#495057'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        <strong>USER- FRIENDLY ENVIRONMENT</strong>
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body" style={{backgroundColor:props.mode==='dark'?'#495057':'white',color:props.mode==='dark'?'white':'#495057'}}>
        <strong>TextUtil can make it possible for you to work in your comfortable mode.</strong> It can help you to change the mode of your website in both dark mode or light mode.
      </div>
    </div>
  </div>
</div>



    </div>
  )
}
