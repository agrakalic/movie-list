import React from 'react';
import { useHistory } from 'react-router-dom';
import { routes } from '../../config';

import Logo from '../ui/Logo';

const Header = () => {
  
  const history = useHistory()

  return (
    <header className="header" role="banner">
      <div className="header__inner" onClick={() => { history.push(routes.home) }}>
        <Logo />
      </div>
      
    </header>
  )

}

export default Header;