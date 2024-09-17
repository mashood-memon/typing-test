import React, { useState } from 'react';
import Select from 'react-select';
import { themeOptions } from '../utils/themeOptions';
import { useTheme } from '../context/themeContext';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
  const { setTheme, theme } = useTheme();

  const handleChange = (e) => {
    setTheme(e.value);
    localStorage.setItem('theme', JSON.stringify(e.value));
  };

  return (
    <div className='footer'>
      <div className="links">
      <a href="https://github.com/mashood-memon" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
        <GitHubIcon />
      </a>
      </div>
      <div className="themeButton">
        <Select
          onChange={handleChange}
          options={themeOptions}
          menuPlacement='top'
          defaultValue={{ label: theme.label, value: theme }}
          styles={{
            control: (baseStyles) => ({
              ...baseStyles,
              backgroundColor: theme.background,
            }),
            menu: (baseStyles) => ({
              ...baseStyles,
              backgroundColor: theme.background,
            }),
            option: (baseStyles, { isFocused }) => ({
              ...baseStyles,
              backgroundColor: (!isFocused ? theme.background : theme.typeBoxText),
              cursor: 'pointer',
              color: (!isFocused ? theme.typeBoxText : theme.background),
            }),
            singleValue: (baseStyles) => ({
              ...baseStyles,
              color: theme.typeBoxText, 
            }),
          }}
        />
      </div>
    </div>
  );
};

export default Footer;