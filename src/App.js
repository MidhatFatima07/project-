
import './App.css';
import { Route } from 'react-router-dom';
import Homepage from "./pages/Homepage";
import Chatpage from "./pages/Chatpage";

function App() {
  console.log("hii");
  return (
    <div className="App">
       <Route path='/chats' component={Chatpage}/>
      <Route path='/' component={Homepage} exact/>
      
    </div>
  );
}

export default App;
