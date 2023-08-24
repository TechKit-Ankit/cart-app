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
    <table>
      <thead>
        <tr>
          <th>sl.No</th>
          <th>Product Name</th>
          <th>Product img</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total price</th>
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
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td><button onClick={addTocart}>Add to cart</button></td>
          <td>Grand Total={gtotal}</td>
        </tr>
      </tfoot>
    </table>
    </>
  )
}


export default cart