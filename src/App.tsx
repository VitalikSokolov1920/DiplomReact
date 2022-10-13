import React, {useState} from 'react';
import Header from './Cabinet/Header';
import Context from "./Context";
import Main from "./Cabinet/Main";
import Footer from "./Cabinet/Footer";

function App() {
    const [music, setMusic] = useState(true);
    const [request, setRequest] = useState('');

    const provider = React.useMemo(() => ({
        music,
        setMusic,
        request,
        setRequest,
    }), [music, request]);

    return (
        <Context.Provider value = { provider }>
            <Header />
            <Main />
            <Footer />
        </Context.Provider>
    );
}

export default App;
