import PropTypes from 'prop-types';

function TextDisplay(props) {
  return <div>{props.text}</div>;
}

TextDisplay.propTypes = {
  text: PropTypes.string.isRequired
}

export default TextDisplay;