import './App.css';
import Header from './components/Header';
import { ApolloProvider,ApolloClient,InMemoryCache} from '@apollo/client'
import Clients from './components/Clients';
import {Link,BrowserRouter,Route,Routes} from 'react-router-dom'
import AddClientModal from './components/AddClientModal';
import Projects from './components/Projects';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Project from './pages/Project';
import AddProject from './components/AddProject';


const cache=new InMemoryCache({
  typePolicies: {
  Query:{
    fields:{
      clients:{
        merge(existing,incoming){
          return incoming;
        }
      },
      projects:{
        merge(existing,incoming){
          return incoming;
        }
      }
    }
  }
  }
})

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache,
})



function App() {
  return (
    <>
    
    <ApolloProvider client={client}>
    <BrowserRouter>
    <Header />
    <Routes>


   
<Route path='/' element={<Home />}/>
    <Route path='/addclient' element={<AddClientModal />}/>
    <Route path='*' element={<NotFound />}/>
    <Route path='/project/:id' element={<Project />}/>
    <Route path='/addproject' element={<AddProject />}/>
    </Routes>
    </BrowserRouter>
   </ApolloProvider>
    </>
  );
}

export default App;
