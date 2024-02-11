import create from 'zustand';

export interface User {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    position: string;
}

interface UserStore {
    users: User[];
    addUser: (user: User) => void;
    updateUser: (id: string, update: Partial<User>) => void;
    deleteUserd: (id: string) => void;
}

export const useUserStore = create<UserStore>((set) => ({
    users: [],
    addUser: (user) => set((state) => ({users: [...state.users, user]})),
    updateUser: (id, update) => set((state) => ({users: state.users.map((user) => (user.id === id ? {...user, ...update} : user)),})),
    deleteUserd: (id) => set((state) => ({users: state.users.filter((user) => user.id !== id),})),
}));