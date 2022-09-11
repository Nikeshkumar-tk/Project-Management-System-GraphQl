import React from 'react'
import { useNavigate } from 'react-router-dom'
import { GET_PROJECTS } from './queries/Projectqueries'
import { useMutation,useQuery } from '@apollo/client'
import { DELETE_PROJECT } from './mutations/ProjectMutations'

const DeleteProjectButton = ({projectId}) => {

const navigate=useNavigate()
const [deleteProject]=useMutation(DELETE_PROJECT,{
    variables:{id:projectId},
    onCompleted:()=>navigate('/'),
    refetchQueries:[{query:GET_PROJECTS}]
})

  return (
    <div className='d-flex mt-5 ms-auto'>
<button className='btn btn-danger m-2' onClick={deleteProject}>
Delete Project <i class="fa-sharp fa-solid fa-trash"></i>
</button>

    </div>
  )
}

export default DeleteProjectButton