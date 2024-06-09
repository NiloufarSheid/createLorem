
import { useState } from "react"
import "./fonts/Vazir.ttf"
import data from "./data"

function App() {
  const [count, setCount]=useState(0)
  const [text , setText]=useState([])
  
 const submitHandler=(e)=>{
e.preventdefault()
setText(data)
 }
 const clickHandler=(e)=>{
  e.target.value   }
 


  return (
    
      <div className="container">
        <h4>لورم ساز</h4>
        <form  className="form" onSubmit={submitHandler}>
          <label>تعداد پاراگراف :</label>
          <input type="number" name="total" value={text} onChange={clickHandler} />
          <button type="submit">بساز</button>
        </form>
        <article> {
        text.map((item, index)=>{
          return <p key={index}> {item}</p>

        })
        } </article>
       
    </div>
  )
}

export default App