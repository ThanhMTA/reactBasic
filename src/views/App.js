import Kiet from './example/myComponent';
import logo from './logo.svg';
import './App.scss';
import ListToDo from './ToDo/ListToDo';
import Nav from './Nav/Nav';
import Home from './example/home';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  BrowserRouter,
  RouterProvider,
  Route,
  Link,
  Switch
} from "react-router-dom";
import ListUser from './Users/ListUser';
// import Header from '../components/Header';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Nav />


          <img src={logo} className="App-logo" alt="logo" />


          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/Todo">
              <ListToDo />
            </Route>
            <Route path="/about">
              <Kiet />
            </Route>
            <Route path="/user">
              <ListUser />
            </Route>
          </Switch>

        </header>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />


      </div>
    </BrowserRouter>

  );
}

export default App;
