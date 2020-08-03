import React, { PureComponent } from 'react';
import { createCn } from 'bem-react-classname';
import { connect } from 'react-redux';
import PropType from 'prop-types';

import './authorization.css';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Heading from '../../components/heading';
import Loading from '../../components/loading';

import authLogo from '../../assets/auth-logo.svg';
import authAcktt from '../../assets/auth-acktt.svg';

import {
    postAuth,
    changeAuthLogin,
    changeAuthPassword
} from '../../store/state/auth/action';

import {
    authSelector
} from '../../selectors';

import {
    AUTH_TYPE
} from '../../constants/prop-types';

const cn = createCn('authorization');

const mapStateToProps = state => ({
    auth: authSelector(state)
});

const mapDispatchToProps = dispatch => ({
    postAuth: (login, password) => dispatch(postAuth(login, password)),
    changeAuthLogin: login => dispatch(changeAuthLogin(login)),
    changeAuthPassword: password => dispatch(changeAuthPassword(password))
});

class Authorization extends PureComponent {
    static propTypes = {
        postAuth: PropType.func.isRequired,
        changeAuthLogin: PropType.func.isRequired,
        changeAuthPassword: PropType.func.isRequired,
        auth: PropType.shape(AUTH_TYPE)
    };

    clickAuthButton = () => {
        const {
            postAuth,
            auth
        } = this.props;

        postAuth(auth.login, auth.password);
    }

    render() {
        const {
            auth,
            changeAuthLogin,
            changeAuthPassword
        } = this.props;

        const isLoadingVisible = auth.executingAuth;

        return (
            <div className={ cn() }>
                <div className={ cn('logo') }>
                    <img src={ authLogo } alt='auth-logo' />
                    <img className={ cn('logo-acktt') } src={ authAcktt } alt='auth-acktt' />
                </div>
                <div className={ cn('form') }>
                    <Heading title='Авторизация' />
                    <div>
                        <div className={ cn('row') }>
                            <TextField
                                label='Логин / email'
                                className={ cn('input') }
                                variant='outlined'
                                value={ auth.login }
                                onChange={ event => changeAuthLogin(event.target.value) }
                            />
                        </div>
                        <div className={ cn('row') }>
                            <TextField
                                label='Пароль'
                                className={ cn('input') }
                                variant='outlined'
                                value={ auth.password }
                                onChange={ event => changeAuthPassword(event.target.value) }
                            />
                        </div>
                        <div className={ cn('row') }>
                            <Button
                                className={ cn('button') }
                                onClick={ this.clickAuthButton }
                            >
                                Авторизоваться
                            </Button>
                        </div>
                    </div>
                </div>

                <Loading isVisible={ isLoadingVisible } />
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Authorization);
