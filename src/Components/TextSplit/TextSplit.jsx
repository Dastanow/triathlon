import PropTypes from 'prop-types';

const TextSplit = ({ text, textClass }) => {
    const sentences = text.split('. ');

    const paragraphElements = sentences.map((sentence, index) => (
        <p key={index} className={textClass}>
            {sentence}
        </p>
    ));

    return <>{paragraphElements}</>;
};

TextSplit.propTypes = {
    text: PropTypes.string.isRequired,
    textClass: PropTypes.string.isRequired,
};

export default TextSplit;
