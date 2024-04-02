import './style.scss';
import PropTypes from 'prop-types'

const CustomTitle = ({title}) => {
    return (
        <div>
            <h2 className="cust_title">
                {title}</h2>
        </div>
    );
};

CustomTitle.propTypes={
    title:PropTypes.string,
}

export default CustomTitle;

