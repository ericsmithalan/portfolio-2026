import { Provider, useCreateStore } from 'tinybase/ui-react';
import './style.scss';
import { createStore } from 'tinybase';
import { Inspector } from 'tinybase/ui-react-inspector';
import { COOL } from '@portfolio/model-viewer';

function App() {
    const store = useCreateStore(() => {
        return createStore()
            .setValue('theme', 'dark')
            .setValue('baseWood', 'maple')
            .setValue('altWood', 'cherry')
            .setValue('baseMetal', 'black');
    });

    return (
        <Provider store={store}>
            <div>{COOL}</div>
            <Inspector />
        </Provider>
    );
}

export default App;
