import { addToCart } from "../store/cardSlice";
import { useCartDispatch } from "../store/hooks";

type productProps = {
  id: string;
  title: string;
  price: number;
  image: string;
};

const Product = ({id, title, price, image }: productProps) => {

    const dispatch = useCartDispatch()
    
    const handleAddToCart = ()=>{
        dispatch(addToCart({id , title , price}))

    }
  return (
    <div className=" bg-slate-800 p-5 rounded-md">
        <img src= {image} alt="" className="rounded-t-md" />
        <h2>{title}</h2>
        <div>{price}$</div>
        <div><button className="w-full bg-slate-600 rounded px-3 py-2" onClick={handleAddToCart}>افزودن به سبد خرید</button></div>
    </div>
  );
};

export default Product;
