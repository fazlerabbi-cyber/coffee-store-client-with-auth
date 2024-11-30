import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import Swal from 'sweetalert2'

const Users = () => {
    const loadedUsers = useLoaderData()
    const [ users, setUsers] = useState(loadedUsers)

    const handleUserDelete = id => {
       
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
            //   
        //delete from the database
           fetch(`http://localhost:5000/users/${id}`, {
            method: 'DELETE'
           })
           .then(res => res.json())
           .then(data => {
           if(data.deleteCount) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success"
            });
            const remainingUser = users.filter(user => user._id !== id)
            setUsers(remainingUser)
           }
            
           })
            
            }
          });
        
    }
  return (
    <div>
        <h2>Users:{users.length} </h2>

        <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Email Name</th>
        <th>Job</th>
        <th>Action</th>
        <th>Last login</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        users.map(user => <tr key={user._id}>
            <th>1</th>
            <td>{user.email}</td>
            <td>{user.createdAt}</td>
            <td>{user.lastSignInTime}</td>
            <td>
                <button className='btn btn-primary'>Edit</button>
                <button onClick={() => handleUserDelete(user._id)}
                className='btn btn-primary'>X</button>
            </td>
          </tr>)
      }
    </tbody>
  </table>
</div>
    </div>
  )
}

export default Users