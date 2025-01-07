import CartItems from "./CartItems";

type ShoppingCartProps = {
  onClose: () => void;
};
const ShoppingCart = ({ onClose }: ShoppingCartProps) => {
  return (
    <div className="bg-[#00000091] absolute m-auto top-0 right-0 left-0 bottom-0 flex justify-center  items-center">
      <div className="text-center bg-blue-400 w-2/3 py-4 rounded-md">
        <h2 className="text-2xl font-bold">سبد خرید</h2>
        <div>
          <CartItems />
        </div>
        <button
          className="rounded bg-slate-700 text-white py-1 px-3 text-sm"
          onClick={onClose}
        >
          بستن
        </button>
      </div>
    </div>
  );
};

export default ShoppingCart;
