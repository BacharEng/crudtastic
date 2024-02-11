import React from 'react'
import { useQuery } from 'react-query'
import { fetchUsers } from '../services/userService'
import { User } from '../stores/useUserStore'

const UsersList: React.FC = () => {

    const { data: users, isLoading, error } = useQuery<User[], Error>('users', fetchUsers);

    if(isLoading) return <div>Loading...</div>;
    if(error) return <div>An error accurred: {error.message}</div>

  return (
    <ul>
        {
            users?.map((user) => (
                <li key={user.id}>
                    <p>{user.firstName} {user.lastName} | {user.email} | {user.position} | {user.phone}</p>
                </li>
            ))
        }
    </ul>
  )
}

export default UsersList