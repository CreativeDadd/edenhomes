// import { notFound } from 'next/navigation';
// import connectToDatabase from '@/app/lib/mongodb';
// import Blog from '@/app/models/Blog';

// export default async function BlogPage({ params }) {
//   const { id } = params;
//   await connectToDatabase();

//   const blog = await Blog.findById(id).lean();

//   if (!blog) {
//     return notFound();
//   }

//   return (
//     <div className="p-8">
//       <h1 className="text-4xl font-bold mb-8 text-orange-600">{blog.title}</h1>
//       <img src={blog.imageUrl} alt={blog.title} className="w-full h-auto mb-8" />
//       <p className="text-gray-700 text-lg">{blog.content}</p>
//     </div>
//   );
// }







// import Image from 'next/image';
// import { notFound } from 'next/navigation';
// import connectToDatabase from '@/app/lib/mongodb';
// import Blog from '@/app/models/Blog';

// export default async function BlogPage({ params }) {
//   const { id } = params;
//   await connectToDatabase();

//   const blog = await Blog.findById(id).lean();

//   if (!blog) {
//     return notFound();
//   }

//   return (
//     <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg mt-10 md:mt-16">
//       <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center text-orange-600 leading-tight">
//         {blog.title}
//       </h1>
//       <div className="w-full max-h-96 overflow-hidden rounded-lg mb-8">
//         <Image width={350} height={359} 
//           src={blog.imageUrl} 
//           alt={blog.title} 
//           className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
//         />
//       </div>
//       <div className="text-lg md:text-xl text-gray-700 leading-relaxed space-y-4">
//         {blog.content.split('\n').map((paragraph, index) => (
//           <p key={index}>{paragraph}</p>
//         ))}
//       </div>
//     </div>
//   );
// }

import Image from 'next/image';
import { notFound } from 'next/navigation';
import connectToDatabase from '@/app/lib/mongodb';
import Blog from '@/app/models/Blog';
import mongoose from 'mongoose';

export default async function BlogPage({ params }) {
  const { id } = params;

  // Connect to the database
  await connectToDatabase();

  // Validate the ObjectId
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return notFound(); // Handle the invalid ID case
  }

  // Fetch the blog post
  const blog = await Blog.findById(id).lean();

  if (!blog) {
    return notFound();
  }

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg mt-10 md:mt-16">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center text-orange-600 leading-tight">
        {blog.title}
      </h1>
      <div className="w-full max-h-96 overflow-hidden rounded-lg mb-8">
        <Image width={350} height={359} 
          src={blog.imageUrl} 
          alt={blog.title} 
          className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="text-lg md:text-xl text-gray-700 leading-relaxed space-y-4">
        {blog.content.split('\n').map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
}
