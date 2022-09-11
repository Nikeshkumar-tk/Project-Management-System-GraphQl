import React,{useState} from 'react'
import './css/Addclient.css'
import { ADD_CLIENT } from '../mutations/Mutations'
import { useMutation } from '@apollo/client'
import { GET_CLIENTS } from '../queries/queries'

const AddClientModal = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [addClient]=useMutation(ADD_CLIENT,{
        variables: {name,email,phone},
        update(cache,{data:{addClient}}){
            const {clients}=cache.readQuery({query:GET_CLIENTS});
            cache.writeQuery({
                query:GET_CLIENTS,
                data:{clients:clients.concat([addClient])}
            })
        }
    })
const handleSubmit=(e)=>{
    e.preventDefault();
    if(name===''||email===''||phone===''){
        return alert('Please fill all the fields')
    }
    addClient(name,email,phone)
    setName('')
    setEmail('')
    setPhone('')
    window.location.replace("/")
}


  return (
    <><div className='form-wrapp'>
        <h3>Add Client</h3>

        <form onSubmit={handleSubmit}>

            <input type='text' placeholder='Name' onChange={(e)=>setName(e.target.value)}></input>
            <input type='text' placeholder='Email' onChange={(e)=>setEmail(e.target.value)}></input>
            <input type='text' placeholder='Phone' onChange={(e)=>setPhone(e.target.value)}></input>
        <button type='submit'>Add</button>
        </form>
        
        </div></>
  )
}

export default AddClientModal