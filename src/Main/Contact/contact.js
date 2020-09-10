import React from "react"
import "./contact.css"

const Contact =({ firstName, lastName, gender, phone })=>{

return(
   <div className="contact">
          <div className="name" >{firstName} {lastName}</div>
          <div className="phone">{phone}</div>
          <p><img className="image" src={gender}alt="img"/></p>
   </div>
  )
}
export default Contact