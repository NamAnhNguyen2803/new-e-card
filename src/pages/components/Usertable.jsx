import React from 'react'
import Data from '../user.json'

export const Usertable = () => {
  return (
    <div>
        <table class="table table-dark">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Nick_name</th>

      <th scope="col">Organization</th>  
      <th scope="col">Title</th> 
      <th scope="col">Phone</th>
      <th scope="col">Address</th>
      <th scope="col">Type</th>

    </tr>
  </thead>
  <tbody>
    {
      Data.map((user) => (
        <tr key={user.ID}>
          <td>{user.ID}</td>
          <td>{user.name}</td>
          <td>{user.nick_name}</td>
          <td>{user.organization}</td>
          <td>{user.title}</td>
          <td>{user.phone}</td>
          <td>{user.address}</td>
          <td>{user.type}</td>
        </tr>
      ))}
  </tbody>
</table>

    </div>
  )
}

export default Usertable;