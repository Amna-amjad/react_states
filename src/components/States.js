import React, {useState} from 'react'

export default function States() {

    const numbers = () => {
   setVal(40) 
    }

    const strings = () => {
        setStg('It is easy but bit tricky!!!!') 
         }

         const arrays = () => {
            setArr([7.8, (" "), 'we changed the sentence', (" "), 26]) 
             }


 const [val, setVal] = useState(35) // for numbers
 const [stg, setStg] = useState('Hey we are learning React States') //for strings
 const [arr, setArr] = useState([26, (" "), 'this is array', (" "),  7.8])
    return (
        <div>
        <h1>  {val} </h1>
        <button    onClick = {numbers}> Click Here </button>

        <h1> {stg} </h1>
        <button   onClick = {strings}> Click Here </button>

        <h1> {arr} </h1>
        <button   onClick = {arrays}> Click Here </button>


        </div>
    )
}
