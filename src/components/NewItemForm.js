import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";

function NewItemForm(props) {
  function handleNewItemFormSubmission(event) {
    event.preventDefault();
    props.onNewItemCreation({
      name: event.target.name.value,
      price: event.target.price.value,
      description: event.target.description.value,
      quantity: parseInt(event.target.quantity.value),
      id: v4()
    });

  }
  return (
    <React.Fragment>
      <form onSubmit={handleNewItemFormSubmission}>
        <input
          type='text'
          name='name'
          placeholder='Item Name' />
        <input
          type='text'
          name='price'
          placeholder='Price of Item'/>
        <textarea
          name='description'
          placeholder='Describe your item.' />
        <input type='text' pattern='[0-9]*'
          name='quantity'
          placeholder='Enter number of items in stock' />
        <button type='submit'>Add an Item!</button>
      </form>
    </React.Fragment>
  );
}
NewItemForm.propTypes = {
  onNewItemCreation: PropTypes.func
};

export default NewItemForm;