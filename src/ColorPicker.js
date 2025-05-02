import { useState } from "react";

const ColorPicker = () => {

    const[color,setColor]=useState("#FFFFFF");

    function handleColorChange(event){
        setColor(event.target.value);
    }
        

    return (
        <div className=' w-[500px] m-auto mt-[10%] flex-col items-center'>
            <h1 className="  text-black size-[20px] mb-[10%] text-center font-mono ">COLOR PICKER</h1>
            <div style={{ backgroundColor: color }} className="h-[200px] w-[200px] rounded-xl border-[2px] border-black mb-[10%]"  >
                <p className="font-mono p-[60px]">Selected Color: {color}</p>
            </div>
            <label className="font-mono">SELECT A COLOUR :</label>
            <input type="color" value={color} onChange={handleColorChange}></input>
        </div>
    );
}
 
export default ColorPicker;