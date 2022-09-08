import React from "react";
import PropTypes from "prop-types"

function ReusableForm(props){
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
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
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;