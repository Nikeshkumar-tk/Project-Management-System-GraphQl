import React from 'react'

const ClientInfo = ({client}) => {
  return (
    <div>
      <h5 className='mt-5'>Client Information</h5>
      <ul className="list-group">
        <li className="list-group-item">
        <i class="fa-solid fa-id-badge"></i>{client.name}
        </li>
        <li className="list-group-item">
        <i class="fa-solid fa-envelope"></i>{client.email}
        </li>
        <li className="list-group-item">
        <i class="fa-solid fa-phone"></i>{client.phone}
        </li>
      </ul>
    </div>
  )
}

export default ClientInfo