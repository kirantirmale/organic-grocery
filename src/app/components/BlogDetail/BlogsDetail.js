import React from 'react';
// import { blogs2 } from '@/app/data/Blog';
// import  useRouter  from 'next/router';


export default function BlogDetails() {
  
  // const router = useRouter();
  // const { id } = router.query;

  // const selectedBlog = blogs2.find(blog => blog.id === id);

  // if (!selectedBlog) {
  //   return <div>
  //     Blog not found</div>;
  // }

  return (
    <div>
      <h1 className='text-center text-5xl text-orange-500 font-bold'>Blogs</h1>
      {/* <h1>{selectedBlog.title}</h1>
      <p>{selectedBlog.description}</p> */}
    </div>
  );
}
