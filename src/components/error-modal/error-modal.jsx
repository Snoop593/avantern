import React, { PureComponent } from 'react';
import { createCn } from 'bem-react-classname';
import PropTypes from 'prop-types';

import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';

import AckttLogo from '../acktt-logo';
import Label from '../label';

import './error-modal.css';

const cn = createCn('error-modal');
class ErrorModal extends PureComponent {

    static propTypes = {
        isVisible: PropTypes.bool.isRequired,
        text: PropTypes.string.isRequired
    };

    clickButton = () => {
        window.location.reload();
    }

    render(){
        const{
            isVisible,
            text
        } = this.props;

        return(
            <Dialog
                open={isVisible}
            >
                <div
                    className={ cn() }
                >  
                    <div className={ cn('logo') }>
                        <AckttLogo />
                    </div>
                    <div className={ cn('text') }>
                        <Label text={ text }/>
                    </div>
                    <Button className={ cn('button') } onClick={ this.clickButton }>
                        Понятно
                    </Button>
                </div>
            </Dialog>
        )
    }
}

export default ErrorModal;
