import React,{useState} from 'react'
import Form from "./Form"
import Two from './Two'
import { expenseData as pastData } from '../data'

function One() {
  const [expense, setexpense] = useState(pastData)
  return (
    <div className='formdis'>
        <Form expense={expense} setexpense={setexpense}/>
        <Two expense={expense}/>
      </div>
    )
}

export default One