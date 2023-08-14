import React from 'react'
import ProductList from '../features/productList/ProductList'
import Navbar from '../features/navbar/Navbar'

function Home() {
  return (
    <div>
        <Navbar>
        <ProductList></ProductList>
        </Navbar>
    </div>
  )
}

export default Home