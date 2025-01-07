import { useState } from "react";
import ShoppingCart from "./ShoppingCart";
import { useCartSelector } from "../store/hooks";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const cartQuantity = useCartSelector(state=> state.cart.items.reduce((value , item)=>value + item.quantity , 0))

  return (
    <>
    <nav className="py-10 px-36  bg-[#181818]">
      <div className="relative ">
        <i className="fa fa-shopping-basket text-3xl text-white cursor-pointer" onClick={()=>setOpen(!open)} aria-hidden="true"></i>
        <div className="bg-red-600 absolute -top-2 -right-2 text-white rounded-full h-5 w-5 flex justify-center items-center text-sm">
          {cartQuantity}
        </div>
      </div>
    </nav>
    {
      open && <ShoppingCart onClose={() => setOpen(false)} />
    }
    </>
  );
};

export default Navbar;
