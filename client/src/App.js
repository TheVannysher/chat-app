import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route} from 'react-router-dom'

import Join from "./components/Join";
import Chat from "./components/Chat";

const App = () =>{

    render(<Router>
        <Route path="/" exact component={Join}/>
        <Route path="/chat"  component={Chat}/>
    </Router>);
}

export default App;