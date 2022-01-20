import React, { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import ProductList from './Components/ProductList';
import Footer from './Components/Footer';
import AddItem from './Components/AddItem';

function App() {
  const productList=[
    {
    price:99999,
    name:"Iphone Xs",
    quantity: 0,
  },
  {
    price:9999,
    name:"Redmi Note 6",
    quantity: 0,
  }
  ]
  let [productlist, setProductList]=useState(productList);
  let [totalAmount, setTotalAmount]=useState(0);

  const IncQua = (index)=>{ 
    let newproductList = [...productlist]
    newproductList[index].quantity++
    
    let newtotalAmount = totalAmount;
    newtotalAmount+=newproductList[index].price;
    setTotalAmount(newtotalAmount);

    setProductList(newproductList);
  }

  const DecQua = (index)=>{ 
    let newproductList = [...productlist]
    let newtotalAmount = totalAmount;
    if(newproductList[index].quantity>0)
    {
      newproductList[index].quantity--
      newtotalAmount-=newproductList[index].price;
    }
    setTotalAmount(newtotalAmount);
    setProductList(newproductList);
  }

  const ResetQua=()=>{
    let newproductList=[...productlist]
    newproductList.map((product)=>{
      product.quantity=0;
    });
    setProductList(newproductList);
    setTotalAmount(0);
  }

  const removeItem=(index)=>{
    let newproductList=[...productlist];
    let newTotalAmount=totalAmount;
    newTotalAmount-=newproductList[index].quantity*newproductList[index].price;

    newproductList.splice(index,1);
    setProductList(newproductList);
    setTotalAmount(newTotalAmount);
  }

  const addItem = (name,price)=>{
    let newproductList=[...productlist]
    newproductList.push({
      price:price,
      name:name,
      quantity:0
    });
    setProductList(newproductList);
  }

    return (
      <>
      <Navbar/>
      <main className="container mt-5">
        <AddItem addItem={addItem}/>
        <ProductList productList={productlist} IncQua={IncQua} DecQua={DecQua} removeItem={removeItem}/>
        </main>
      <Footer totalAmount={totalAmount} ResetQua={ResetQua}/>
      </>
    );

}

export default App;
