import React from 'react'
import logoIcon from '../../assets/Images/logoIcon.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { faExchangeAlt } from '@fortawesome/free-solid-svg-icons';


const Footer = () => {
  return (
    <div className='footer layout-container'>
      
      <div className="extra-container mid-container mid3">
        <div className="ending-container">
          <div className='footer-field'>
          <FontAwesomeIcon icon={faExchangeAlt} size='2x'/>
          <img width="100" src={logoIcon} alt="Logo" />
          <FontAwesomeIcon icon={faUserFriends} size='2x' />


          </div>
      
        </div>
    
      </div>
      
    </div>
  )
}

export default Footer
