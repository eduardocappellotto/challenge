import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";

function CreateContact(props) {


  const [contact, setContact] = useState({    //Inicia o contato como vazio
    nome: "",
    email: "",
    telefone: ""
  });

  function handleChange(event) {              //Permite com que os dados sejam completados
    const { name, value } = event.target;

    setContact(prevContact => {     
      return {
        ...prevContact,
        [name]: value
      };
    });
  }

  function submitContact(event){              //Utiliza a função setContact pra adicionar um elemento á "contacts"
    props.onAdd(contact);
    setContact({
      name:"",
      email:"",
      telefone:"",
    });
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-contact">

        <input    //Lê input de nome
          name="name"   
          onChange={handleChange}
          value={contact.name}
          placeholder="Nome"
          rows="1"
        />
        <input

          name="email"    //Lê input de email
          onChange={handleChange}
          value={contact.email}
          placeholder="Email"
          rows="1"
        />

        <input
          type="tel"      //Lê input de telefone
          name="telefone"
          onChange={handleChange}
          value={contact.telefone}
          placeholder="Telefone"
          rows="1"
        />
        <button onClick={submitContact} className="btn1" variant="contained"><AddIcon/></button>  

      </form>
    </div>
  );
}
export default CreateContact;