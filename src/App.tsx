import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import AddUserForm from "./components/AddUserForm"
import UsersList from "./components/UsersList"
import { useFetchAndUpdateUsers } from './hooks/useFetchAndUpdateUsers';

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AppContent />
    </QueryClientProvider>
  )
}

const AppContent: React.FC = () => {

  useFetchAndUpdateUsers();

  return (
    <>
    <div className="container">
      <div className="row" style={{paddingTop:50}}>
        <div className="col-lg-4">
          <AddUserForm />
        </div>
        <div className="col-lg-8">
          <UsersList />
        </div>
      </div>
    </div>
    </>
  )
}

export default App
