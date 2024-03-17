/* eslint-disable no-unused-vars */
import "./Form.css";
import React from 'react'

const Form = () => {
  return (
    <div className="form">
      <h1 className="head">CONTACT ME</h1>
      <form>
        <label>Your Name</label>
        <input type="text"/>
        <label>Email</label>
        <input type="email"/>
        <label>Subject</label>
        <input type="text"/>
        <label>Message</label>
        <textarea rows="6" placeholder="Type your message here"/>
        <button className="btn">SUBMIT</button>
      </form>
    </div>
  )
}

export default Form
