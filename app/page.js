"use client"
import React, { useState } from 'react'
import CartIteam from './components/cartIteam'
import itemDetails from './components/itemDetails'
const cart = () => {
  let intialAmt = 0;
  let finalAmt = 0;
  
  const [gtotal, setGtotal] = useState(intialAmt);
  const grandTotal = (amount) => {
    console.log('Received amount:', amount);
    finalAmt += amount;
  }
  const addTocart = () => {
    setGtotal(gtotal + finalAmt);
  }
  return (
    <>
<table className="table table-warning">
  <thead>
    <tr>
      <th scope="col">sl.No</th>
      <th scope="col">Product Name</th>
      <th scope="col">Product img</th>
      <th scope="col">Price</th>
      <th scope="col">Quantity</th>
      <th scope="col">Total price</th>
    </tr>
  </thead>
  <tbody>
  {itemDetails.map((item) => {
          return (
            <CartIteam
              key={item.id}
              id={item.id}
              name={item.name}
              img={item.img}
              price={item.price}
              grandTotal={grandTotal}
              />
              )
        })}
  </tbody>
  <tfoot>
        <tr>
          <td colSpan="4"></td>
          <td><button type="button" className="btn btn-primary" onClick={addTocart}>Add to cart</button></td>
          <td>Grand Total={gtotal}</td>
        </tr>
      </tfoot>
</table>
    </>
  )
}


export default cart