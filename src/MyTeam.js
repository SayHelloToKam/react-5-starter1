import React from 'react'

export default function MyTeam({myTeam, removeFromTeam}) {
  return (
    <div className='myteam-container'>
       {
         myTeam.map(item=>{
            return <button onClick={()=>removeFromTeam(item)} className={item.speciality==="frontend" ? "frontend-dev" : "backend-dev"}>{item.name}</button>
        })
       }
    </div>
  )
}
