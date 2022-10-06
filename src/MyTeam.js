import React from 'react'

export default function MyTeam({myTeam}) {
  return (
    <div className='myteam-container'>
       {
         myTeam.map(item=>{
            return <button className={item.speciality==="frontend" ? "frontend-dev" : "backend-dev"}>{item.name}</button>
        })
       }
    </div>
  )
}
