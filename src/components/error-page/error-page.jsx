import React from 'react';
import { createCn } from 'bem-react-classname';
import PropType from 'prop-types';

import './error-page.css';

const cn = createCn('error-page');

const ErrorPage = ({
    text
}) => (
    <div className={ cn() }>
        { text }
    </div>
);

ErrorPage.propTypes = {
    text: PropType.string.isRequired
};

export default ErrorPage;
