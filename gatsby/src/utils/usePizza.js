import { useState } from 'react';

export default function usePizza({ pizza, inputs }) {
  // 1. Create some state to hold our order
  const [order, sertOrder] = useState([]);
  // 2. Make a function to add things to order
  function addToOrder(orderedPizza) {
    sertOrder([...order, orderedPizza]);
  }

  // 3. Make a function to remove things to order
  function removeFromOrder(index) {
    sertOrder([
      // everything before the item we want to remove
      ...order.slice(0, index),
      // everything after the item we want to remove
      ...order.slice(index + 1),
    ]);
  }
  // 4. Send this data to the servelrs function when they check out

  // TODO

  return {
    order,
    addToOrder,
    removeFromOrder,
  };
}
