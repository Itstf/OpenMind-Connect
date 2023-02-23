import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DefaultScreen from '../src/DefaultScreen'
import OpenMind from '../src/components/OpenMind'
import BlogDetails from './components/BlogDetails';
import SignUp from './components/Signup';
import SignIn from './components/Signin';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<DefaultScreen />} />
        <Route path='/openMindconnect' element={<OpenMind />} />
        <Route path='/blog' element={<BlogDetails />} />
        <Route path='/SignUp' element={<SignUp />} />
        <Route path='/SignIn' element={<SignIn />} />
      </Routes>
    </Router>

  </>
  );
}

export default App;
