import { useEffect } from 'react'
import { useState } from 'react'
import Product from './product';

const Home = () => {
  const [products, setProducts] = useState([])
  const [loadStatus, setLoadStatus] = useState(true)
  const URL = 'https://fakestoreapi.com/products';
  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data)
        setLoadStatus(false)
      })
  }, [])
  // console.log(products)

  return (
    <div>

      <div style={{ display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap' }}>
        
        {
          loadStatus ? <h1>Loading.....</h1> :
          products.map((p) => {
            return (
              <div key={p.id}>
                <Product
                id={p.id}
                image={p.image}
                name={p.title}
                description={p.description}
                price={Math.round(p.price)}
              />
              </div>
            )
          })
        }
        {/* <Product
          id='1'
          image='src\assets\p1.png'
          name='Headphone'
          description='Good headphone, b&o speakers and trusted'
          price='120'
          /> */}
      </div>
    </div>
  )
}

export default Home
