import React from 'react';
import { createCn } from 'bem-react-classname';
import PropTypes from 'prop-types';

import Dialog from '@material-ui/core/Dialog';
import LinearProgress from '@material-ui/core/LinearProgress';

import AckttLogo from '../acktt-logo';
import Label from '../label';

import './loading.css';

const cn = createCn('loading');

const Loading = ({
    isVisible
}) => (
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
                <Label text='Загрузка...'/>
            </div>
            <LinearProgress color="secondary" />
        </div>
    </Dialog>
);

Loading.propTypes = {
    isVisible: PropTypes.bool.isRequired
};

export default Loading;
