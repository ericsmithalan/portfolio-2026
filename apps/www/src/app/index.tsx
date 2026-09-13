import './style.scss';
import { Routes, Route } from 'react-router-dom';
import { WoodworkingPage } from '../pages';

function App() {
    return (
        <Routes>
            {/* <Route path="/" element={<HomePage />}></Route> */}
            <Route path="/" element={<WoodworkingPage />}></Route>
        </Routes>
    );
}

export default App;
