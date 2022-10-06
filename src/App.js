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

  return (
    <div>
      <Input handleFilter={handleFilter} getAllNames={getAllNames} getOnlyFrontend={getOnlyFrontend} getOnlyBackend={getOnlyBackend}/>
      <MyTeam myTeam={myTeam} />
      <div>
      {allNames.map(item=> {
        return <button className={item.speciality==="frontend" ? "frontend-dev" : "backend-dev"}>{item.name}</button>
        })
      }
      </div>
    </div>
  );
}

export default App;
