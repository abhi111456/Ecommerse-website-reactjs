import React,{useEffect,useState} from "react";
import { useParams } from "react-router-dom";
import { Product } from "./Product";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/Cart";

const Detail = () =>{
    const {slug}=useParams();
    const [detail,setDetail]=useState([]);
    const [quantityy,setQuantity]=useState(1);
    const dispatch=useDispatch();
    useEffect(()=>{
        const findDetail=Product.filter(Product=>Product.slug==slug)

        if(findDetail.length > 0){
            setDetail(findDetail[0]);

        }else{
            window.location.href='/';
        }
    },[slug])

    const handleMinusQuantity =()=>{
        setQuantity(quantityy - 1 < 1 ? 1 : quantityy-1);
    }
    const handlePlusQuantity =()=>{
        setQuantity(quantityy+1);
    }
    const handleAddCart =()=>{
        dispatch(addToCart({
            productId:detail.id,
            quantity:quantityy
        }))
    }


    return(
        <div>
            <h2 className="text-3xl text-center">PRODUCT DETAIL</h2>
            <div className="grid grid-cols-2 gap-5 mt-5">
                <div>
                    <img src={detail.image} alt="detail" className="w-full"/>
                </div>
                <div className="flex flex-col gap-5">
                    <h1 className="text-4xl uppercase">{detail.name}</h1>
                    <p className="font-bold text-3xl">
                        ${detail.price}
                    </p>
                    <div className="flex gap-5">
                        <div className="flex gap-2 justify-center items-center">
                            <button className="bg-gray-100 h-full w-10 font-bold text-xl rounded-xl flex justify-center" onClick={handleMinusQuantity}>-</button>
                            <span className="bg-gray-100 h-full w-10 font-bold text-xl rounded-xl flex justify-center">{quantityy}</span>
                            <button className="bg-gray-100 h-full w-10 font-bold text-xl rounded-xl flex justify-center" onClick={handlePlusQuantity}>+</button>
                        </div>
                        <button className="bg-slate-900 text-white px-7 py-3 rounded-xl shadow-2xl" onClick={handleAddCart}>
                            Add to cart
                        </button>
                    </div>
                    <p className="w-auto  text-gray-500">
                        {detail.description}
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Detail;