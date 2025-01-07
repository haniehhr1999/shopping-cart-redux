import { useCartSelector } from "../store/hooks";

const CartItems = () => {
  const allItems = useCartSelector((state) => state.cart.items);
  allItems.reduce((value, item) => value + item.quantity * item.price, 0);

  return (
    <div className="my-5">
      <p>محصولی در سبد خرید وجود ندارد</p>
      <ul className="px-4">
        {allItems.map((item) => (
          <li className="rounded py-1 flex my-2 justify-between bg-red-400" key={item.id}>
            <div>{item.title}</div>
            <div>{item.quantity}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartItems;
