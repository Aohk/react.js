import React from 'react';
import ReactDOM from 'react-dom';

//COMPONENTS
import Header from './components/header'

const App = () => {
    return ( 
    <div>
        <Header/>
        <h1>Hello world</h1>
    </div>
    )
}

ReactDOM.render(<App/>,document.querySelector('#root'));