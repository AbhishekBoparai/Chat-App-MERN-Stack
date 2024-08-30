import './App.css';
import {Route,Routes} from "react-router-dom";
import Chatpage from './Page/Chatpage';
import Homepage from './Page/HomePage';
function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Homepage/>} exact/>
      <Route path="/chats" element={<Chatpage/>}/>
      </Routes>

    </div>
  );
}

export default App;
