import { Component } from 'react';
import Type from 'prop-types';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import Routes from './routes';
import './index.css';

export default class Root extends Component {
    render() {
        const { store, history } = this.props;

        return (
            <Provider store={ store }>
                <ConnectedRouter history={ history }>
                    <Routes />
                </ConnectedRouter>
            </Provider>
        );
    }
}

Root.propTypes = {
    store: Type.shape().isRequired,
    history: Type.shape()
};

Root.defaultProps = {
    history: null
};
