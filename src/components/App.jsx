import React, {useState} from 'react';
import Header from '../components/Header';
import CreateContact from '../components/CreateContact';
import Footer from '../components/Footer';
import Contact from '../components/Contact'

function App() {

  const [contacts , setContacts] = useState([]);  //Lista de contatos e função para setar contatos

  function addContact(newContact){        //Função de adicionar contatos
    setContacts(prevContacts =>{
      return [...prevContacts, newContact]
    })
  }

  function deleteContact(id) {            //Função de deletar contatos pelo ID
    setContacts(prevContacts => {
      return prevContacts.filter((contactItem, index) => {
        return index !== id;
      });
    });
  }
  
  return (
    <div className="App">
      <Header/>         
        <div>
        <h1 id="cadastro">Cadastro</h1>
        <CreateContact onAdd={addContact}/>
        </div>
        <h1 id="contatos">Contatos</h1>
        {contacts.map((contactItem, index) => {
        return (
          <Contact
            key={index}
            id={index}
            name={contactItem.name}
            email={contactItem.email}
            telefone={contactItem.telefone}
            onDelete={deleteContact}
          />
        );
      })}  
      <Footer/>
    </div>
  );
} 

export default App;
