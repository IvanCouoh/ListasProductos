import React from 'react';
import ProductsList from '../components/productsList';
import ProductsCards from '../components/ProductsCards';
import ArrayData from '../Datos';

const ContainerList = () => {
  return (
    <>
    {ArrayData.map(product => {
        return(
            <ProductsList
                imageProduct={product.imageProduct}
                description={product.description}
                price={product.price}
                discount={product.discount}
                priceTagFraction={product.priceTagFraction}
                priceTag={product.priceTag}
                shipping={product.shipping}
            />
        );
    })}

      {/* <ProductsCards/> */}
      {/* <ProductsList/> */}
    </>
  );
};

export default ContainerList;