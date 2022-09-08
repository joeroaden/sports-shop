import React from "react";
import PropTypes from "prop-types"

function ItemDetail(props) {
  const { item,onClickingDelete } = props;
  return (
    <React.Fragment>
      <h1>Item Detail</h1>
      <h3>{item.name} - ${item.price}</h3>
      <p><em>{item.description}</em></p>
      <h4>Quantity-{item.quantity}</h4>
      <button onClick={ props.onClickingEdit }>Update Item</button>
      <button onClick={() => onClickingDelete(item.id) }>Delete Item</button>
      <hr/>
    </React.Fragment>
  );
}

ItemDetail.propTypes = {
  item: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default ItemDetail;