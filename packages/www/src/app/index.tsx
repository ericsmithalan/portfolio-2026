import './style.scss';
import { Routes, Route } from 'react-router-dom';
import { HomePage, WoodworkingPage } from '../pages';
import { IdeasPage } from '../pages/ideas';
import { IdeaPage } from '../pages/ideas/cornerer';

function App() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/woodworking" element={<WoodworkingPage />} />
            <Route path="/ideas" element={<IdeasPage />} />
            <Route path="/ideas/cornerer" element={<IdeaPage />} />
        </Routes>
    );
}

export default App;
