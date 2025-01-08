import { useCartDispatch, useCartSelector } from "../store/hooks";

import {type CartItem , addToCart , removeFromCart } from "../store/cardSlice";

const CartItems = () => {
  const allItems = useCartSelector((state) => state.cart.items);
  allItems.reduce((value, item) => value + item.quantity * item.price, 0);

  const dispatch = useCartDispatch()
  function handleAddToCart(item: CartItem){
    dispatch(addToCart(item))
  }

  function handleRemoveFromCart(id: string){
    dispatch(removeFromCart(id))
  }
  return (
    <div className="my-5">
      <ul className="px-4">
        {allItems.length >= 0 ? (
          allItems.map((item) => (
            <li
              className="rounded py-1 flex my-2 justify-between bg-slate-500 px-5"
              key={item.id}
            >
              <div>{item.title}</div>
              <div className="flex items-center">
                <span onClick={()=> handleAddToCart(item)} className="font-bold cursor-pointer">+</span>
                <div className="px-4">{item.quantity}</div>
                <span onClick={()=> handleRemoveFromCart(item.id)}  className="font-bold cursor-pointer">-</span>
              </div>
            </li>
          ))
        ) : (
          <p>محصولی در سبد خرید وجود ندارد</p>
        )}
      </ul>
    </div>
  );
};

export default CartItems;
