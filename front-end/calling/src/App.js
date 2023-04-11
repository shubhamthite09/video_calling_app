import {Routes, Route} from 'react-router-dom';
import './App.css';
import HomeRoom from './pages/HomeRoom';
import RoomPage from './pages/RoomPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomeRoom />}/>
        <Route path='/room/:roomId' element={<RoomPage />}/>
      </Routes>
    </div>
  );
}

export default App;
