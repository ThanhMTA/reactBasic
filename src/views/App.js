import Kiet from './example/myComponent';
import logo from './logo.svg';
import './App.scss';
import ListToDo from './ToDo/ListToDo';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import Header from '../components/Header';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>

          {/* <Kiet /> */}
          <ListToDo />

        </p>

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

  );
}

export default App;
