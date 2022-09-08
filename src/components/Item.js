import React from "react";
import PropTypes from "prop-types";

function Item(props) {
  return (
    <React.Fragment>
      <div onClick = {() => props.whenItemClicked(props.id)}>
      <h3>{props.name} - ${props.price}</h3>
      <p><em>{props.description}</em></p>
      <h4>Quantity-{props.quantity}</h4>
      </div>
    </React.Fragment> 
  );
}

Item.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  description: PropTypes.string,
  quantity: PropTypes.number,
  id: PropTypes.string,
  whenItemClicked: PropTypes.func
};

export default Item;