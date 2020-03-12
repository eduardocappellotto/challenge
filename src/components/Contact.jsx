import React from "react";
import DeleteIcon from "@material-ui/icons/DeleteForever";
import EditableLabel from 'react-inline-editing'; 

function Contact(props) {   

  function handleClick() {      //Cuida do click de deletar contato
    props.onDelete(props.id);
  }

  return (
    <div className="contact">
      <h3> 
      <EditableLabel text = {props.name}/> 
      <EditableLabel text={props.email}/> 
      <div><EditableLabel text={props.telefone}/>
      <button id="deletebtn" onClick={handleClick}>
          <DeleteIcon />
        </button></div>
      </h3>

    </div>
  )
}
export default Contact;