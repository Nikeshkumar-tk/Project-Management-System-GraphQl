import React from 'react'
import {gql,useQuery} from '@apollo/client'
import ClientRow from './ClientRow'
import { GET_CLIENTS } from '../queries/queries'
import Spinner from './spinner'




const Clients = () => {

  const {loading,error,data}=useQuery(GET_CLIENTS)
  if(loading) return <Spinner />
  if(error) return <p>something went wrong</p>
  return (
    <>{
!loading&&!error&&(<table className='table table-hover mt-3'>
  <thead>
    <tr>
      <th>Name</th>
      <th>Email</th>
      <th>Phone</th>
      
    </tr>
  </thead>
  <tbody>
    {data.clients.map(client =>(
      <ClientRow key={client.id} client={client}></ClientRow>
    ) )}
  </tbody>
</table>)

    }</>
  )
}

export default Clients