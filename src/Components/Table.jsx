import React from 'react'



function Displayitems({expense,description,category,amount,date}){
  return(
    <tr>
      <td>{expense}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{amount}</td>
      <td>{date}</td>
    </tr>
  )
}


    function Table({expense}) {
      
      return (
        <table>
          <thead>
            <tr>
              <th>Expense</th>
              <th>Description</th>
              <th>Category</th>
              <th>Amount</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {expense.map((item,index) => (
              <Displayitems 
              key={index}
              expense={item.expense}
              description={item.description}
              category={item.category}
              amount={item.amount}
              date={item.date}
              />
            ))}
            
           
          </tbody>
        </table>
      );
    }
    
  

export default Table