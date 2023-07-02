import React from "react";
import { useQuery } from "react-query";
import Loading from "../../Shared/Loading/Loading";

const Blog = () => {
  const { isLoading, data: blogs } = useQuery("blogData", () =>
    fetch("http://localhost:5000/blog").then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  const subscribeForm = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const result = { name, email };
    console.log(result);
    event.target.reset();
  };
  return (
    <div>
      <div className="bg-[url('https://i.ibb.co/yswPhR5/photo-1445019980597-93fa8acb246c.jpg')] h-[200px] md:h-[300px] lg:h-[300px] bg-cover bg-no-repeat">
        <div className="text-center pt-16 md:pt-28 lg:pt-28">
          <h1 className=" text-[50px] font-bold font-serif text-white lg:text-black md:text-black">
            Blogs
          </h1>
        </div>
      </div>
      <div className="lg:mx-28 md:mx-20 mx-10 mt-10">
        <div>
          <h1 className="text-[50px] text-black md:text-center lg:text-left mb-10">
            The Blog
          </h1>
        </div>
        <div className="lg:flex">
          <div className="w-full ">
            {blogs
              .concat()
              .reverse()
              .map((blog) => (
                <div
                  key={blog._id}
                  class="max-w-sm mb-5 w-full md:mx-auto lg:max-w-full lg:flex"
                >
                  <div
                    className="lg:h-auto lg:w-[280px] md:h-[250px] flex-none bg-cover text-center overflow-hidden"
                    title=""
                  >
                    <img className="h-full" src={blog.image} alt="" srcset="" />
                  </div>
                  <div class="  bg-white     rounded-b p-4 flex flex-col justify-between leading-normal">
                    <div class="mb-8">
                      <div class="text-gray-900 font-bold text-xl mb-2">
                        {blog.title}
                      </div>
                      <p class="text-black text-base">{blog.description}</p>
                    </div>
                    <div class="flex items-center mx-auto lg:mx-0 md:mx-0">
                      {blog.publisherPhoto ? (
                        <img
                          class="w-10 h-10 rounded-full mr-4"
                          src={blog.publisherPhoto}
                          alt=""
                        />
                      ) : (
                        <img
                          alt=""
                          class="w-10 h-10 rounded-full mr-4"
                          src="https://i.ibb.co/S5PRg6x/download.jpg"
                        />
                      )}
                      <div class="text-sm">
                        <p class="text-black font-bold leading-none">
                          {blog.publisherName}
                        </p>
                        <p class="text-gray-600">{blog.date}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <div className="w-none ">
            <div class="flex justify-center sticky top-20 flex-wrap ">
              <div class="my-5 lg:mt-0 mx-3 py-5 px-5 bg-gray-800 rounded inline-block">
                <p class="text-white font-bold text-sm text-center mb-3">
                  Join our blogs
                </p>
                <form onSubmit={subscribeForm}>
                  <div class="mb-3  text-center">
                    <input
                      class=" shadow-inner w-full p-2 text-white  text-sm bg-gray-900 border-b border-gray-700"
                      placeholder="Enter your Name"
                      name="name"
                      type="text"
                    />
                    <input
                      class=" shadow-inner w-full p-2 text-white mt-3 text-sm bg-gray-900 border-b border-gray-700"
                      placeholder="Enter your email"
                      name="email"
                      type="email"
                    />
                    <button class="shadow-lg bg-blue-600 mt-3 text-white font-bold text-sm rounded px-3 py-2">
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
