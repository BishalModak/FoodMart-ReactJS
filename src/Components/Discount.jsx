import React from 'react'
import Product from './Product';

const productData =[
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
];

const Discount = () => {
  return (
    <div className='py-20'>
        <div className="container">
            <h2 className="text-3xl md:test-4xl pb-4 sm:pb-0 ">Discount</h2>


            {/* Grid */}
            <div className='pt-10 grid sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8'>
                <div className="relative w-fit mx-auto">
                    <img className='h-full object-cover' src="/discount-bg.jpg" alt="discount_bg" />
                    <div className="absolute w-full h-full top-0 left-0 grid place-items-center text-white">
                        <div className="text-xl flex flex-col gap-4">
                            <h2 className="text-[40px] font-bold">$60</h2>
                            <div>
                                <p>Under Product</p>
                                <p>Limited Time Only</p>
                            </div>
                        </div>
                    </div>
                </div>


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

export default Discount