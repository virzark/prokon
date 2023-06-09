/* import(s) */
import React from 'react';
import Penerbit from '../components/penerbit/Penerbit';
import Tokobuku from '../components/tokobuku/Tokobuku';
import Konsumen from '../components/konsumen/Konsumen';

const Role = ({ selectedPage, navigateToHome, navigateToPage }) => {
  const renderRole = () => {
    switch (selectedPage) {
      case 'page1':
        return <Penerbit navigateToHome={navigateToHome} navigateToPage={navigateToPage} />;
      case 'page2':
        return <Tokobuku navigateToHome={navigateToHome} navigateToPage={navigateToPage} />;
      case 'page3':
        return <Konsumen navigateToHome={navigateToHome} navigateToPage={navigateToPage} />;
      default:
        return null;
    }
  };

  return <div>{renderRole()}</div>;
}

export default Role;