import React from 'react'
import ReactDOM from 'react-dom';
//import { Provider } from 'react-redux'
// import { createStore } from 'redux'
// import rootReducer from './reducers'
import App from './App.js'
//const store = createStore(rootReducer)
import chronoScope from 'react-chronoscope';

let container = document.querySelector('#root');

ReactDOM.render(
        <App />,
        container
)


chronoScope(container)




/*

import chronoScope from 'react-chronoscope';

// console.log(App());
const container = document.querySelector('#root');
render(
    <App />,
    container,
    () => {
      const fiberRoot = document.querySelector('#root')._reactRootContainer._internalRoot;
      const hostRoot = fiberRoot.current;
        // window.hostRoot = hostRoot;
        // console.log('fiberRoot: ', fiberRoot);
        // console.log('hostRoot: ', hostRoot);
    }
);

chronoScope(container);

*/