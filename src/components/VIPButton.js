import PropTypes from 'prop-types'

const VIPButton = ({borderColor, text, onClick, textColor}) => {
  return (
    <button onClick={onClick}
    style={{ borderColor: borderColor, color: textColor}}
    className='vipbtn'>{text}</button>
  )
}

VIPButton.defaultProps = {
    borderColor: 'white'
}

VIPButton.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
    textColor: PropTypes.string
}

export default VIPButton