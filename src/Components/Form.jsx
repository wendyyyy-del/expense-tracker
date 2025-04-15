import React,{useState} from 'react'

function Form({expense, setexpense}){
  const defaultPrevention = (e) =>{
    e.preventDefault()
  }

  const [name, setname] = useState('')
  const [description, setdescription] = useState('')
  const [category, setcategory] = useState('')
  const [amount, setamount] = useState('')
  const [date, setdate] = useState('')

  const handleSubmit = () => {

    const addedExpenses ={
      expense: name,
      description: description,
      category: category,
      amount: amount,
      date:date,
    }

    setexpense([...expense,addedExpenses])

    setname('')
    setdescription('')
    setcategory('')
    setamount('')
    setdate('')
  }
  const handleName = (e) => {
    setname(e.target.value)
  }
  const handleDescription = (e) => {
    setdescription(e.target.value)
  }
  const handleCategory = (e) => {
    setcategory(e.target.value)
  }
  const handleAmount = (e) => {
    setamount(e.target.value)
  }
  const handleDate = (e) => {
    setdate(e.target.value)
  }
  return (
<form onSubmit={defaultPrevention} className='formedit'>
  <input type="text" id="Expense" name="Expense" placeholder='Expense' value={name} onChange={handleName} required  /><br /><br />
  <input type="text" id="description" name="Enter expense description" placeholder='Enter expense description' value={description} onChange={handleDescription} required /><br /><br />
  <input type="text" id="category" name="Enter expense category"placeholder='Enter expense category' value={category} onChange={handleCategory}/><br /><br />
  <input type="number" id="Amount" name="Enter amount" placeholder='Enter amount' value={amount} onChange={handleAmount} required /><br /><br />
  <input type="date" id="date" name="date" placeholder='mm/dd/yy' value={date} onChange={handleDate} /><br /><br />
  <button onClick={handleSubmit}>Submit</button>
</form>
);
}

export default Form

