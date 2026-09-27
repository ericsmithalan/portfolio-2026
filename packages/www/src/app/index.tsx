import './style.scss';
import { Routes, Route } from 'react-router-dom';
import { HomePage, WoodworkingPage } from '../pages';
import { IdeasPage } from '../pages/ideas';
import { IdeaPage } from '../pages/ideas/cornerer';
import { ViewportProvider } from '@portfolio/model-viewer';
import { ShellComp } from '../components';

function App() {
    return (
        <Routes>
            <Route path="/" element={<ShellComp />}>
                <Route path="" element={<HomePage />} />
                <Route
                    path="/woodworking"
                    element={
                        <ViewportProvider>
                            <WoodworkingPage />
                        </ViewportProvider>
                    }
                />
                <Route path="/ideas" element={<IdeasPage />} />
                <Route path="/ideas/cornerer" element={<IdeaPage />} />
            </Route>
        </Routes>
    );
}

export default App;
