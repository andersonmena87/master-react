import React from 'react'

export const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className='footer'>
      Portafolio Anderson Mena WEB &copy; Máster en React - {year}
    </footer>
  )
}
