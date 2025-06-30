import { useSelector, useDispatch } from 'react-redux'
import { removerProduct, addProductCount, reduceProductCount } from '../redux/store/features/cartSlice';
import toast from 'react-hot-toast';

const Cart = () => {
  const productCount = useSelector((state) => state.cart)
  console.log(productCount)
  const dispatch = useDispatch()

  const productCard = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: ' 0 8px 10px rgba(0, 0, 0, 0.1)',
    margin: '15px 40px',
    height: '50px',
    padding: '15px 50px',
  }

  const pName = {
    color: '#333',
    fontWeight: 'bold',
    fontSize: '16px',
    marginLeft: '20px',
    width:'220px'
  };

  const price = {
    fontSize: '18px',
    color: '#28a745',
    fontWeight: 'bold'
  }
  const removeBtn = {
    padding: '7px 20px',
    color: 'red',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
  }
  const qtyBtn = {
    padding: '5px 12px',
    color: 'gray',
    fontWeight: 'bold',
    fontSize: '17px',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    backgroundColor: '',
    alignItems: 'center'
  }
  const images = {
    height: '60px',
    width : '60px'
  }
  const emptyCart={
    fontSize:'25px',
    color:'#28a745',
    fontWeight:'bolder',

  }
  const description={
    color:"rgba(95, 95, 95, 0.83)",
    width:"400px"
  }

  return (
    <div>
      {
        productCount.length==[] ? <p style={emptyCart}>Cart is empty!!</p>:
        productCount.map((item) => {
          return (
            <div style={productCard} key={item.id}>
              <img style={images} src={item.image} alt="" />
              <p style={pName}>{item.name.substr()}</p>
              <p style={description}>{item.description.substr(0,100)+'.....'}</p>
              <p style={price}>${item.price}</p>

              <div style={{ width: '100px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <button
                  onClick={() => { dispatch(addProductCount({ id: item.id })) }}
                  style={qtyBtn}>+</button>

                <p style={price}>{item.qty}</p>

                <button
                  onClick={() => { dispatch(reduceProductCount({ id: item.id })) }}
                  style={qtyBtn}>-</button>

              </div>

              <button
                onClick={() => { dispatch(removerProduct({ id: item.id, name: item.name })) }} style={removeBtn}>X</button>

            </div>
          )
        })
      }
    </div>
  )
}

export default Cart
