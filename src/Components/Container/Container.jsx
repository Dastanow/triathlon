import PropTypes from 'prop-types';
import './Container.scss';

const Container = ({ classNames, children }) => {
    return (
        <div className={`container ${classNames ? classNames : ''}`}>
            {children}
        </div>
    );
}

Container.propTypes = {
    classNames: PropTypes.string,
    children: PropTypes.node,
}

export default Container;