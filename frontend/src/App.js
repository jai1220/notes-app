import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import LandingPage from "./screens/LandingPage/LandingPage";
import LoginScreen from "./screens/LoginScreen/loginScreen";
import RegisterScreen from "./screens/RegisterScreen/registerScreen";

import MyNotes from "./MyNotes/MyNotes";

import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        
          <Routes>
            <Route exact path='/' element={<LandingPage />} />
            <Route  path='/login' element={<LoginScreen />} />
            <Route  path='/register' element={<RegisterScreen />} />
            <Route  path='/mynotes' element={<MyNotes />} />
          </Routes>
        
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
