import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
// import { ConnectedRouter } from 'react-router-redux';
// import { createBrowserHistory } from 'history';
import TodoApp from './containers/TodoApp';
import Error from './components/Error';
import createStore from './store';

// Storeの生成
const store = createStore();

render(
    <Provider store={store}>
        <Router>
            <div>
                {/* ルーティングさせる */}
                <Route exact path="/" component={TodoApp} />
                <Route exact path="/error" component={Error} />
            </div>
        </Router>
    </Provider>,
    document.getElementById('root')
);

