import React from 'react';
import { createCn } from 'bem-react-classname';

import logo from '../../assets/logo.svg';

const cn = createCn('logo');

const Logo = () => (
    <div className={ cn() }>
        <img src={ logo } alt='logo' />
    </div>
);

export default Logo;
