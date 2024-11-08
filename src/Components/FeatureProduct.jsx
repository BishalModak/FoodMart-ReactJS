import React from 'react'
import Product from './Product';

const productData=[
    {
        img:"/product-1.webp",
        name: "Organic  Honeycrisp Apple",
        price:"$35.90",
    },
    {
        img:"/product-2.webp",
        name: "Organic Strwberries",
        price:"$79.99",
    },
    {
        img:"/product-3.webp",
        name: "Blueberry Organic",
        price:"$929.00",
    },
    {
        img:"/product-4.webp",
        name: "Kiwi Organic",
        price:"$799.99",
    },
    {
        img:"/product-5.webp",
        name: "Cavendish Banana",
        price:"$339.90",
    },
    {
        img:"/product-6.jpeg",
        name: "Organic Orange",
        price:"$110.90",
    },
    {
        img:"/product-7.jpg",
        name: "Alphonso Mango",
        price:"$79.50",
    },
    {
        img:"/product-8.webp",
        name: "Thompson Seedless Grapes",
        price:"$939.90",
    },
    {
        img:"/product-9.png",
        name: "Organic Golden Pineapple",
        price:"$729.50",
    },
    {
        img:"/product-10.jpeg",
        name: "Seedless Watermelon",
        price:"$399.90",
    },

];

const FeatureProduct = () => {
  return (
    <div className='pt-20'>
        <div className="container">
            <div className='sm:flex justify-between items-center'>
                <div className='text-xl md:text-4xl pb-4 sm:pb-0'>
                    Feature Product
                </div>
                <div className='flex gap-8 items-center text-[14px] md:text-lg'>
                    <button className='border-b border-[#000'>Best Sellers</button>
                    <button>Most Popular</button>
                </div>
            </div>

            {/* Grid */}
            <div className='pt-10 grid sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8'>
                {productData.map((product)=>(
                    <Product
                    key={product.name}
                    img={product.img}
                    name={product.name}
                    price={product.price} 
                    />
                ))}
            </div>
        </div>
    </div>
  )
}

export default FeatureProduct