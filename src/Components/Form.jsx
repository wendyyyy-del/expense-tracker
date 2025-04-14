import React from 'react'

function Form() {
    return (

<form action="/submit" method="POST">
  <input type="text" id="Expense" name="Expense" placeholder='Expense' required /><br /><br />
  <input type="text" id="description" name="Enter expense description" placeholder='Enter expense description' required /><br /><br />
  <input type="text" id="category" name="Enter expense category"placeholder='Enter expense category' /><br /><br />
  <input type="number" id="Amount" name="Enter amount" placeholder='Enter amount'required /><br /><br />
  <input type="date" id="date" name="date" placeholder='mm/dd/yy' /><br /><br />
  <button type="submit">Submit</button>
   </form>

    );
  }
  
export default Form

