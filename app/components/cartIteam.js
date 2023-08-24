import React, { useState } from 'react'
const CartIteam = (props) => {
    const [quantity, setQuantity] = useState(0);
    const [total, setTotal] = useState(0);
    
    const increaseQuantity = () => {
        let iteamQuantity = quantity + 1;
        setQuantity(iteamQuantity);
        let totalIteamprice = iteamQuantity * props.price;
        setTotal(totalIteamprice);
        props.grandTotal(props.price);
    }
  
    const decreaseQuantity = () => {
        if (quantity > 0) {
            let iteamQuantity = quantity - 1;
            setQuantity(iteamQuantity);
            let totalIteamprice = iteamQuantity * props.price;
            setTotal(totalIteamprice);
            props.grandTotal(-props.price);
        }
    }
    return (
    <tr>
      <td>{props.id}</td>
      <td>{props.name}</td>
      <td><img src={props.img} alt="" /></td>
      <td>{props.price}</td>
      <td>
       <button onClick={increaseQuantity}>+</button>
       {quantity}
       <button onClick={decreaseQuantity}>-</button>
      </td>
      <td>{total}</td>
    </tr>
  )
}

export default CartIteam;