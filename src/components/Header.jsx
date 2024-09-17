import React, { useEffect } from 'react';
import { useTheme } from '../context/themeContext';
import '../styles/global'; 
import User from './User';

const Header = () => {
  const { theme } = useTheme();

  useEffect(() => {
    document.documentElement.style.setProperty('--logo-color', theme.typeBoxText);
  }, [theme]);

  return (
    <div className='header'>
      <div className="logo">
        <svg width="800px" height="800px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="var(--logo-color)">
          <path d="M27.967 27.984h-23.935c-1.102 0-1.994-0.894-1.994-1.995v-10.969c0-1.103 0.893-1.995 1.994-1.995l1.055-0.056c0-1.629 0.496-2.625 1.488-3.734s2.222-1.665 3.692-1.665c0.697 0 1.47 0.118 2.317 0.354 0 0 1.842 0.612 3.121 0.612 1.951 0 3.283-0.855 3.99-2.566 0.332-0.823 0.67-1.235 1.014-1.235 0.492 0 0.74 0.23 0.74 0.689 0 0.813-0.439 1.712-1.318 2.696-1.18 1.337-2.631 2.006-4.356 2.006-1.339 0-3.634-0.628-3.634-0.628-0.932-0.226-1.597-0.338-1.993-0.338-0.953 0-1.771 0.407-2.451 1.223s-1.021 1.475-1.021 2.6l21.291 0.042c1.102 0 1.996 0.893 1.996 1.995v10.97c0 1.101-0.895 1.994-1.996 1.994zM28.965 15.020c0-0.552-0.447-0.998-0.998-0.998h-23.935c-0.551 0-0.997 0.446-0.997 0.998v10.97c0 0.551 0.446 0.998 0.997 0.998h23.935c0.551 0 0.998-0.447 0.998-0.998v-10.97zM24.971 20.037h-1.963v1.932h-1.994v-1.932h-1.996v1.932h-2.057v-1.932h-1.932v1.932h-1.995v-1.932h-1.994v1.932h-1.996v-1.932h-2.025v1.932h-1.994v-1.963h2.025v-1.995h-2.025v-1.963h1.994v1.932h2.025v-1.932h1.995v1.932h1.994v-1.932h1.995v1.932h1.932v-1.932h2.057v1.932h1.996v-1.932h1.994v1.932h1.963v-1.932h1.994v1.963h-1.963v1.995h1.963v1.963h-1.994v-1.932zM11.040 18.011h-2.026v1.995h2.025v-1.995zM14.998 18.011h-1.995v1.995h1.995v-1.995zM18.986 18.011h-1.994v1.995h1.994v-1.995zM22.977 18.011h-1.997v1.995h1.996v-1.995zM23.070 24.992h-14.087v-1.964h14.087v1.964z"></path>
        </svg>
      </div>
      <div className="user-icon">
        <User/>
      </div>
    </div>
  );
};

export default Header;