import PropTypes from 'prop-types'
import CartButton from './CartButton'
import Image from '../images/PPLogo.png'
import VIPButton from './VIPButton'

const Header = ({ title, onAdd, showAdd}) => {
    
  return (
    <header className='header'>
        <div className='pivotPlan'>
          <img className='wolfLogo' src={Image} alt='Pivot Plan Logo of a wolf'/>
          <h1>{title}</h1>
        </div>
        <div className='buttons'>
          <VIPButton borderColor='gold' text='Get Full Pivot Plan' textColor='gold' />
          <CartButton borderColor='white' text='Cart' textColor='white'/>
        </div>
        
    </header>
  )
} 


Header.defaultProps = {
    title: "PIVOTPLAN",
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// CSS in JS
/* const headingStyle = {
    color: 'red',
    backgroundColor: 'black'
} */

export default Header