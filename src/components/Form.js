import React from "react"

const Form = () => {
  return (
    <form name="contact" method="POST" data-netlify="true">
      <input type="hidden" name="form-name" value="contact" />
      <p>
        <label>
          Your Name: <input type="text" name="name" />
        </label>
      </p>
      <p>
        <label>
          Your Email: <input type="email" name="email" />
        </label>
      </p>
      <p>
        <label>
          Your Phone Number: <input type="text" name="tel" />
        </label>
      </p>
      <p>
        <label>
          Your Credit Score:{" "}
          <select name="score[]" multiple>
            <option value="trash">500</option>
            <option value="good">650+</option>
          </select>
        </label>
      </p>
      <p>
        <label>Are you with Gulf Power?</label>
        <select name="provider[]" multiple>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
  )
}

export default Form
