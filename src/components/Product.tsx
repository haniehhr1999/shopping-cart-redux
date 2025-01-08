import { addToCart } from "../store/cardSlice";
import { useCartDispatch } from "../store/hooks";

type productProps = {
  id: string;
  title: string;
  price: number;
  image: string;
};

const Product = ({ id, title, price, image }: productProps) => {
  const dispatch = useCartDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ id, title, price }));
  };

  return (
    <div className=" bg-[#3b3b3b] p-5 rounded-md text-white">
      <img src={image} alt="" className="rounded-t-md" />
      <div className="py-5 flex justify-between">
        <div>{price}$</div>
        <h2>{title}</h2>
      </div>
      <div>
        <button
          className="w-full bg-[#181818] rounded px-3 py-2"
          onClick={handleAddToCart}
        >
          افزودن به سبد خرید
        </button>
      </div>
    </div>
  );
};

export default Product;
