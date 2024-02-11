import { QueryClient, QueryClientProvider } from 'react-query';
import AddUserForm from "./components/AddUserForm"
import UsersList from "./components/UsersList"

const queryClient = new QueryClient();

const App = () => {

  return (
    <>
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
    </>
  )
}

export default App
