import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserList from './components/UserList';
import Empty from './components/Empty';
import "./styles/App.css";
import Chat from './components/Chat';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<div className='App'>
          <UserList/>
          <Empty/>
        </div>}/>
        <Route path="/chat/:slug" element={<Chat/>}/>
      </Routes>
    </Router>
  );
}

export default App;
