import React from 'react'
import { useUserStore } from '../stores/useUserStore'
import UserItem from './UserItem';

const UsersList: React.FC = () => {


   const users = useUserStore(state => state.users);

  return (
    <ul>
        {
            users?.map((user) => (
                <UserItem user={user} />
            ))
        }
    </ul>
  )
}

export default UsersList