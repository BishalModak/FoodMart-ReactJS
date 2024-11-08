import React from 'react'
import { BsShieldCheck } from 'react-icons/bs';
import { FiGift } from 'react-icons/fi';
import { RiCustomerService2Fill } from 'react-icons/ri';
import { TfiShoppingCartFull } from 'react-icons/tfi';
import ServiceCard from './ServiceCard';

const data=[
    {
        title:"FAST AND FREE DELIVERY",
        icon: <TfiShoppingCartFull />,
        desc: "Free delevery for all orders over $140",
    },
    {
      title:"24/7 CUSTOMER SUPPORT",
      icon: <RiCustomerService2Fill />,
      desc: "Friendly 24/7 customer support",
  },
  {
    title:"MONEY BACK GURENTEE",
    icon: <BsShieldCheck />,
    desc: "WE return money within 30 days",
},
{
  title:"MEMBER GIFTS",
  icon: <FiGift />,
  desc: "Discount coupons weekends",
},
];

const Services = () => {
  return (
    <div className='bg-[#f7f5ee]'>
      <div className="container grid gap-8 md:grid-cols-2 xl:grid-cols-4 py-10">
        {data.map((item)=> (
        <ServiceCard 
        key={item.title}
        title={item.title}
        icon={item.icon}
        desc={item.desc}
          />
        ))}
      </div>
    </div>
  )
}

export default Services