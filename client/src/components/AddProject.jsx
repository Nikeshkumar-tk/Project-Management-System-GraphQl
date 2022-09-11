
import React,{useState} from 'react'
import './css/AddProject.css'

import { useMutation, useQuery } from '@apollo/client'
import { GET_PROJECTS } from '../queries/Projectqueries'
import { GET_CLIENTS } from '../queries/queries'
import { ADD_PROJECT } from '../mutations/ProjectMutations'

const AddProject = () => {


  const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [clientId, setClientId] = useState('')
    const [status, setStatus] = useState('')

    //Add project mutation

    const [addProject]= useMutation(ADD_PROJECT,{
      variables:{
        name,description,status,clientId
      },
      update(cache,{data:{addProject}}){
        const {projects}=cache.readQuery({query:GET_PROJECTS});
        cache.writeQuery({
          query:GET_PROJECTS,
          data:{projects:projects.concat([addProject])},
        })
      }
    })

    //Get clients for select

    const {loading,error,data}=useQuery(GET_CLIENTS)

    const handleSubmit=(e)=>{
      e.preventDefault();
      if(name===''||description===''||status===''){
          return alert('Please fill all the fields')
      }
      addProject(name,description,status,clientId)
     
      setName('')
      setDescription('')
      setStatus('')
      setClientId('')
      window.location.replace("/")
  }
  if (loading) return null;
  if(error) return 'Something went wrong'
  
  return (
    <div>
      {!loading &&!error&&(
<>
<div className='form-wrapp'>
        <h3>New Project</h3>

        <form onSubmit={handleSubmit}>

            <input type='text' placeholder='Name' onChange={(e)=>setName(e.target.value)}></input>
            <input type='text' placeholder='Description' onChange={(e)=>setDescription(e.target.value)}></input>
<select id='status' onChange={(e)=>setStatus(e.target.value)} value={status} className='select form-select' aria-label="Default select example">
  <option selected>select status</option>
  <option value="new">Not Started</option>
  <option value="progress">In Progress</option>
  <option value="completed">Completed</option>
</select>
<div>
  <select className="select form-select w-100" id="select-client" onChange={(e)=>setClientId(e.target.value)}>
       {
        data.clients.map((client)=>(


          <option key={client.id} value={client.id}>{client.name}</option>
        )


        )
       }
  

  </select>
</div>
        <button type='submit'>Add</button>
        </form>
        
        </div>


</>

      )}


    </div>
  )
}

export default AddProject