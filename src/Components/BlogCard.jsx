import React from 'react'


const BlogCard = ({img,desc}) => {
  return (
    <div className='hover:shadow-2xl cursor-pointer'>
        <div>
            <img src={img} alt="blog_image" className="w-full" />
        </div>
        <div className="px-6 py-8 bg-white">
            <div className="flex justify-between items-center text-gray-500 pb-4">
                <p>By: Admin</p>
                <p>14 jan 2024</p>
            </div>

            {desc}
        </div>
    </div>
  )
}

export default BlogCard