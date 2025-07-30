import { BiRupee } from "react-icons/bi";
import Button from "./Button";
export default function ProductCard({product}) {
  return (
    <div className="bg-[#F2F4F6] p-2.5 rounded-2xl w-[305px] h-[383px]">
      <img className="w-[285px] h-[220px]" src={product?.image} alt="" />
      <h2 className="text-lg font-semibold mt-5 mb-2.5">
        {product?.product_name}
      </h2>
      <p className="text-sm text-[rgba(0, 0, 0, 0.2)] flex items-center mb-5">
        <BiRupee />
        {product?.price}
      </p>
      <div className="mb-5">
        <Button width={'w-[128px]'} height={'h-[38px]'} textSize={'text-sm'} text={"Shop Now"} />
      </div>
    </div>
  );
}
