
import './App.css';
import Header from './components/header/header';
import LandingPage from './screens/landingPage/landingPage';
import Footer from './components/footer/footer';
import {  BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MyNotes from './screens/myNotes/myNotes';
function App() {
  return (
    <Router className="App">
   <Header/>
    <main>
      <Routes>
    <Route path="/"  element={<LandingPage />}  />
    <Route path="/mynotes" element={<MyNotes />}/>
    </Routes>
    </main>
    <Footer/>
    </Router>
  );
}

export default App;
