import PropTypes from 'prop-types'
import CartLogo from '../images/PPCartLogo.png'

const CartButton = ({borderColor, text, onClick, textColor}) => {
  return (
    <button onClick={onClick}
    style={{ borderColor: borderColor, color: textColor}}
    className='cartbtn'>
      {<img className='cartLogo' src={CartLogo} alt='Logo of PP' />}
    </button>
  )
}

CartButton.defaultProps = {
    borderColor: 'white'
}

CartButton.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
    textColor: PropTypes.string
}

export default CartButton