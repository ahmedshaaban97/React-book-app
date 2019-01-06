import React, {Component} from 'react';
// import {Provider} from 'react-redux'
// import {createStore} from 'redux'
// import reducers from './reducers/index'
import BookList from './containers/book_list'

//let store = createStore(reducers);


class App extends Component {
    render() {
        return (
            <div>
                <BookList/>
            </div>

        );
    }
}

export default App;
