import React from 'react';
import { createCn } from 'bem-react-classname';
import PropTypes from 'prop-types';

import smile from '../../assets/smile.svg';

import './picture-hint.css';

const cn = createCn('picture-hint');

const PictureHint = ({ title }) => (
    <div className={ cn() }>
        <div className={ cn('image') }>
            <span className={ cn('smile') }><img src={ smile } alt='smile' /></span>
        </div>
        <div className={ cn('title') }>
            { title }
        </div>
    </div>
);

PictureHint.propTypes = {
    title: PropTypes.string.isRequired
};

export default PictureHint;
