import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Navbar from './Components/Navbar/Navbar';
import Search from './Pages/Search/Search';
import Portfolio from './Pages/Portfolio/Portfolio';



function App() {
    return (
        <div className='app'>
        <BrowserRouter>
            <Navbar />
            <div className='app-container'>
                <Routes>
                    <Route path='/' element={<Search />} />
                    <Route path='/portfolio' element={<Portfolio />} />
                </Routes>
            </div>
        </BrowserRouter>
        </div>
    );
}

export default App;
