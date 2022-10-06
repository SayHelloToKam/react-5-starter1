import React from 'react'

export default function Input({handleFilter, getAllNames, getOnlyFrontend, getOnlyBackend}) {
  return (
    <div className='input-container'>
        <h3 className='title'>SELECT DEVELOPERS FOR YOUR TEAM</h3>
        <div className='filter-container'>
            <input onChange={handleFilter} placeholder='Enter a name'/>
            <button onClick={getAllNames}>All</button>
            <button onClick={getOnlyFrontend} className='frontend-dev'>Frontend Devs</button>
            <button onClick={getOnlyBackend} className='backend-dev'>Backend Devs</button>
        </div>
    </div>
  )
}
