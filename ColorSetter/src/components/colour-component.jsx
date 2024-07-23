import { useState } from 'react';
import './colourapp.css'

export function ColourApp({propColor='olive'}){
    
    const [color, setColour]=useState(propColor);
    return (
    <div  style={{'flex':'','backgroundColor': color,  'width': '90vw',
        'height': '100vh'}}>
        <h1>Volour App Running</h1>
        <button onClick={()=>setColour('green')} 
        className='cl-button'>
            Green
        </button>
   
        <button onClick={()=>setColour('red')}
        className='cl-button'>
            Red
        </button>
    </div>
    
    )
}



export default ColourApp;