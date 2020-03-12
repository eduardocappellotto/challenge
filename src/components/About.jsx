import React from 'react';
import EditContact from '../img/edit-contact-gif.gif' //Busca a gif explicativa

function About(){
    return(
        <div className="about" id="about">
            <h1>About</h1>
            <div className="about-content">
                <h2>Como editar contatos?</h2>
                <h4>Os contatos são editáveis, e para isso basta dar um double-click na propriedade a qual deseja editar!</h4>
                <h4>Veja no gif abaixo:</h4>
                <img src={EditContact} alt="gif que ensina a editar contatos"/> 
            </div>
        </div>
       
    )
};

export default About