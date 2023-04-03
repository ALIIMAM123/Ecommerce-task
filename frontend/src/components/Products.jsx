import React, { useState,useEffect } from 'react';
import styled from 'styled-components';
import { popularProducts } from '../data';
import Product from './Product';
import axios from "axios"
import { publicRequest } from '../requestMethod';

const Container = styled.div`
  padding:20px;
  display:flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;


const Products = ({ cat, filters, sort }) => {
  // console.log(cat,filters,sort)

  const [products, setProducts] = useState([]);
  const [filteredProduct, setFilteredProducts] = useState([]);
  
    // fetch product based on category-(route on url-top)
  useEffect(() => {
    const getProduct = async () => {
      try {
        // const res = await axios.get(cat ? `${publicRequest}/api/products?category=${cat}` : `${publicRequest}/api/products`);

          // const res = await publicRequest.get( "products")
        
        const res = await publicRequest.get(cat ? `/products?category=${cat}` : `products`)
        console.log(res ,"product_data")
        setProducts(res?.data)
      } catch (err){
           console.log(err)
        }
    }  
    getProduct()
  }, [cat])
  
  // whenever we change our filters we will set our filtered product in filteredProduct state

  useEffect(() => {
       cat && setFilteredProducts(products?.filter((item) => Object.entries(filters)?.every(([key ,value]) => item[key]?.includes(value))))
  } , [products,cat,filters])

    //  new Date(b.date) - new Date(a.date)r
  
  //   sort product condition
  useEffect(() => {
    if (sort === "oldest]") {
      setFilteredProducts((prev) => [...prev]?.sort((a, b) =>b.getTime() - a.getTime()))
      
    }
    //  else if (sort === "oldest") {
    //   setFilteredProducts((prev) => [...prev]?.sort((a, b) =>b.getTime() - a.getTime()))
      
    // }
       else if (sort === "asc") {
         setFilteredProducts((prev) => [...prev].sort((a,b) => a.price - b.price))
    }
     else  {
         setFilteredProducts((prev) => [...prev].sort((a,b) => b.price- a.price))
       }
  }, [sort])

  console.log(sort, "sort")

  console.log(filteredProduct , "filtered_product_data")
  
  return (
    <Container>
      { cat ? filteredProduct?.map(item => (
          <Product item = {item} key = {item.id} />
      )) : products?.slice?.(0,8)?.map(item => (
          <Product item = {item} key = {item.id} />
      ))}
    </Container>
  );
}

export default Products;