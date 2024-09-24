import React from 'react';
import {client} from "../sanity/lib/client";
import { urlFor } from '@/sanity/lib/image';
import Image from "next/image";
type BlogType = {
  _id: string;
  title: string;
  description: string;
  image: string;
};
const getBlogs=async()=>{
  const blogs=await client.fetch(`*[_type=="blog"]`);
  console.log(blogs);
  return blogs;
}
export default async function Home() { const blogs= await getBlogs(); 
  console.log("Home~Blogs:",blogs); 
  return (
    <main className="p-10">
    <div className="flex justify-center items-center">
      |<h1 className="text-3xl font-bold">Blogs</h1>|
    </div>
    <div className="grid grid-cols-3 gap-4">
      {blogs.map((blog:BlogType)=>(
        <div key={blog._id} className="border p-4">
          <h2 className="text-xl font-bold">{blog.title}</h2>
          <p className="text-gray-500">{blog.description}</p>
        
         <Image
              src={urlFor(blog.image).url()}
              height={400}
              width={400}
              alt="img-blog"
            />
        </div>))
    }
    </div>
    </main>
  )
  
}


