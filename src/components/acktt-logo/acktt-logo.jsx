import React from 'react';
import { createCn } from 'bem-react-classname';

import ackttLogo from '../../assets/acktt-logo.svg';

import './acktt-logo.css';

const cn = createCn('acktt-logo');

const AckttLogo = () => (
    <div className={ cn() }>
        <img src={ ackttLogo } alt='acktt-logo' />
    </div>
);

export default AckttLogo;
