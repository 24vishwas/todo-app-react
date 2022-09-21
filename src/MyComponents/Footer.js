import React from 'react'
import insta from "./insta2.png";
import gmail from "./gmail4.png"
import linkedin from "./linked.png"
import git from "./github.png"
import '../App.css'

export const Footer = () => {
 
  return (
    <footer className=" bg-dark text-light py-3" >
      <div className='footer-logos'>
      <a href="https://www.instagram.com/vishwas_js/" target="_blank" rel="noreferrer">
        <img src={insta} height={20} width={20} /></a>
        <a href="mailto:vishwasjs2806@gmail.com" target="_blank" rel="noreferrer">  
        <img src={gmail} height={20}/>
        </a>
        <a href="https://www.linkedin.com/in/vishwas-j-s/" target="_blank" rel="noreferrer">
        <img src={linkedin} height={20}/>
        </a>
        <a href="https://github.com/24vishwas" target="_blank" rel="noreferrer">
        <img src={git} height={20}/>
        </a>


      </div>
      <p >copyright&copy; vishwasjs2806@gmail.com</p>
        </footer>

  )
}
