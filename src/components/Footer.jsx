import React from "react";
import About from './About';

function Footer() {
  const year = new Date().getFullYear();  //Busca o ano atual para a footer
  return (
    <div>
      <About/>    
    <footer>
      <p>Eduardo Cappellotto ⓒ {year}</p>
    </footer>
    </div>
  );
}

export default Footer;
