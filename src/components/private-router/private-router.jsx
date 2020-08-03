import PropType from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import { useSelector } from 'react-redux';
import {
    authSelector
} from '../../selectors';

import ROUTES from '../../constants/routing';

const PrivateRoute = ({
    children,
    havePermission,
    ...rest
}) => {
    const { authInfo } = useSelector(authSelector);
    return (
        <Route
            { ...rest }
            render={ () => {
                console.log(authInfo)
                //if (havePermission(authInfo.permission)) {
                if (true) {
                    return children;
                }

                let to = ROUTES.AUTHORIZATION;

                if (permissions.length > 0) {
                    to = ROUTES.DISPATCHER
                }

                return (
                    <Redirect to={ to } />
                );
            } }
        />
    );
};

PrivateRoute.propTypes = {
    children: PropType.node.isRequired
};

export default PrivateRoute;
