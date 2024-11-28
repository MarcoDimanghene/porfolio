import PropTypes from 'prop-types';

import { LayoutWrapper } from './LayoutStyled';

const Layout = ({children}) => {
    return (
        <LayoutWrapper> 
            {children}
        </LayoutWrapper>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired
};

export default Layout;