import './product.css'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/store/features/cartSlice'
import toast from 'react-hot-toast'


const Product = ({ id, image, name, description, price }) => {
    const dispatch = useDispatch()

    function addProduct() {
        dispatch(addToCart({ id, image, name, description, price }))
        toast.success(`${name} added to cart`)
    }

  


    return (
        <div>
            <div className="product-card">
                <img src={image} alt={name} className="product-image" />
                <h2 className="product-name">{name.substr(0,40)}</h2>
                <p className="product-description">{description.substr(0,50)+'....'}</p>
                <p className="product-price">${price}</p>
                <button onClick={addProduct} className="add-to-cart">Add to Cart</button>
            </div>
        </div>
    )
}

export default Product
