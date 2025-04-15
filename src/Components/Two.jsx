import React from 'react'
import Searchbar from './Searchbar'
import Table from './Table'

function Two({expense}) {
  return (
    <div>
        <Searchbar/>
        <Table expense={expense}/>
    </div>
  )
}

export default Two