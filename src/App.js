import React, {useState} from 'react';
import './App.css';
import data from './Data'
import Input from './Input'
import MyTeam from './MyTeam'

function App() {

const [allNames,setAllNames] = useState(data);
const [myTeam, setMyTeam] = useState([])

const handleFilter =(e)=>{
  let filtered = data.filter(item=> item.name.toLowerCase().includes(e.target.value.toLowerCase()))
  setAllNames(filtered)
}

const getOnlyFrontend=()=>{
  let filteredNames = data.filter(item=> item.speciality==="frontend")
  setAllNames(filteredNames)
}

const getOnlyBackend=()=>{
  let filteredNames = data.filter(item=> item.speciality==="backend")
  setAllNames(filteredNames)
}

const getAllNames=()=>{
  setAllNames(data)
}

const addToTeam=(dev)=>{
  let found = myTeam.some(item=>item.id === dev.id)

  if(myTeam.length===6){
    alert('You have reached the max number of devs allowed.')
  } else if (!found) {
    setMyTeam([...myTeam,dev])
    let newList = allNames.filter(item=>item.id !== dev.id)
    setAllNames(newList)
  }
  
}

const removeFromTeam=(dev)=>{
  let updatedTeam = myTeam.filter(item=>item.id !== dev.id)
  setMyTeam(updatedTeam)
  setAllNames([dev,...allNames])
}

  return (
    <div>
      <Input handleFilter={handleFilter} getAllNames={getAllNames} getOnlyFrontend={getOnlyFrontend} getOnlyBackend={getOnlyBackend}/>
      <MyTeam myTeam={myTeam} removeFromTeam={removeFromTeam}/>
      <div>
      {allNames.map(item=> {
        return <button onClick={()=>addToTeam(item)} className={item.speciality==="frontend" ? "frontend-dev" : "backend-dev"}>{item.name}</button>
        })
      }
      </div>
    </div>
  );
}

export default App;
