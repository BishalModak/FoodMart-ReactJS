import React from 'react'
import BlogCard from './BlogCard';

const blogData =[
    {
        img:"/post-1.jpg",
        desc:"Honeycrisp apples add a burst of sweet and crisp flavor to this fresh salad, making it a delicious and healthy option for any meal.",
    },
    {
        img:"/post-2.jpg",
        desc:"This smoothie bowl made with Cavendish bananas is creamy, filling, and topped with colorful fruits. Perfect for a nourishing breakfast.",
    },
    {
        img:"/post-3.jpg",
        desc:"This vinaigrette made with blood oranges adds a citrusy kick to your salads and meals, balancing sweet and tart flavors.",
    },
    {
        img:"/post-4.jpg",
        desc:"Sample Description 4 some more text just to make UI a little atttractive thats all",
    },
];

const Blog = () => {
  return (
    <div className='py-20'>
        <div className="container">
            <h2 className="text-3xl md:test-4xl pb-4 sm:pb-0 ">Our Blogs</h2>
            

            {/* Grid */}
            <div className='pt-10 grid sm:grid-cols-3 lg:grid-cols-4 gap-8'>
                {blogData.map((blog, index)=>(
                    <BlogCard
                    key={index}
                    img={blog.img}
                    desc={blog.desc} 
                    />
                ))}
                </div>
            </div>
            </div>
  )
}

export default Blog