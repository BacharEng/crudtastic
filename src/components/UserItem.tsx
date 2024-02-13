import React,{useState} from 'react';
import {User} from '../stores/useUserStore';
import {useMutation} from 'react-query';
import {deleteUser,updateUser} from '../services/userService'
import { useUserStore } from '../stores/useUserStore';

interface UserItemProps {
    user: User;
}


const UserItem: React.FC<UserItemProps> = ({user}) => {

    const deleteUserMutation = useMutation(() => deleteUser(user.id), {
        onSuccess: () => {
            useUserStore.getState().deleteUser(user.id);
        }
    })

const handleDelete = () => {
    deleteUserMutation.mutate();
}

  return (
    <li key={user.id}>
        <p>{user.firstName} {user.lastName} | {user.email} | {user.position} | {user.phone}</p>
        <button onClick={handleDelete} className='btn btn-danger btn-sm'>Delete</button>
    </li>
  )
}

export default UserItem