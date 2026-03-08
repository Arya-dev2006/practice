import React, { useState } from 'react'

const Form = () => {

    const [value, setvalue] = useState('');
    
  return (
    <div>
    <form onSubmit={(e)=>{
        e.preventDefault();
        console.log(value);
    }}>
        <input type="text" value = {value} onChange={(e)=>{
            setvalue(e.target.value);
        }}/>
        <input type="email" value = '' />
        <input type="submit" value="Submit" />
        

    </form>
    </div>

  )
}

export default Form
