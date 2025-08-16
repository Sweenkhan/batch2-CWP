import { useDispatch } from "react-redux";
import { removeFromCart } from "../redux/features/cartSlice";
import { quantityIncrease, quantityDecrease } from "../redux/features/cartSlice";


function CartPageitems({ productData }) {

    const dispatch = useDispatch()
    

    return (
        <div key={productData.id} className="  bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 " style={{ padding: "20px" }}>

            <img
                className=" h-56 w-full object-cover "
                src={productData.image}
                alt={productData.title}
            />

            <div className="p-5 " style={{ marginTop: "18px" }}>
                <h3 className="text-lg font-semibold text-gray-800">{productData.title.length > 30 ? `${productData.title.substring(0, 30)}` : productData.title}</h3>
                <p className="text-gray-600 mt-2 text-sm">
                    {productData.description.length > 40 ? `${productData.description.substring(0, 40)}....` : productData.description}
                </p>

                <div className="flex items-center justify-between mt-4">
                    <span className="text-lg font-bold text-indigo-600">Rs {Math.ceil(productData.totalPrice)}</span>

                    <div className="flex item-center content-center justify-center" style={{ gap: "10px", justifyContent: "center" }}>
                        <button onClick={() => dispatch(quantityIncrease(productData))} style={{ padding: "3px" }} className="border-2 border-solid rounded border-black p-3 cursor-pointer">+</button>
                        <p  >Quantity {productData.totalQuantity}</p>
                        <button onClick={() => dispatch(quantityDecrease(productData))} style={{ padding: "3px" }} className="border-2 border-solid rounded border-black p-3 cursor-pointer">-</button>
                    </div>

                    <button onClick={() => dispatch(removeFromCart(productData.id))} style={{ padding: "3px 6px" }} className="px-4 py-4 bg-indigo-600 text-white rounded-2xl hover:bg-indigo-700 transition duration-200">
                        Remove From Cart
                    </button>

                </div>
            </div>
        </div>
    );
}

export default CartPageitems
