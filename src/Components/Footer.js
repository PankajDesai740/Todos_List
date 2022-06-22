import React from 'react'

export const Footer = () => {

  let footerStyle ={
    position: "absolute",
    top:"100vh",
    width:"100%",
    color:"white"

  }

  return (
    <footer className='text-light py-1 bg-dark' style={footerStyle}>
      <p className='text-center'>
        Copyright &copy; @PankajDesai.com
      </p>
    </footer>
  )
}
