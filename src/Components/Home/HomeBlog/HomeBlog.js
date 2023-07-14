import React from "react";
import Loading from "../../../Shared/Loading/Loading";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";

const HomeBlog = () => {
  const { isLoading, data: blogs } = useQuery("blogData", () =>
    fetch("http://localhost:5000/blog").then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h2 className="text-xl text-orange-400 font-normal text-center font-serif">
        OUR BLOG
      </h2>
      <h1 className="text-center text-[40px] font-normal text-black font-serif mb-10">
        Recent Blog
      </h1>
      <div className="grid md:grid-cols-2 gap-3 lg:grid-cols-4">
        {blogs?.slice(1, 5).map((blog) => (
          <div key={blog._id} className="max-w-sm mb-5 rounded-md">
            <div className=" text-center overflow-hidden" title="">
              <img
                className="h-[300px] rounded-t-md"
                src={blog.image}
                alt=""
                srcSet=""
              />
            </div>
            <div className="  bg-white rounded-b p-4 flex flex-col justify-between leading-normal">
              <div className="mb-8">
                <div className="text-gray-900 font-bold text-xl mb-2">
                  {blog.title}
                </div>
                <p className="text-black text-base">
                  {blog.description.slice(0, 230)}...
                </p>
              </div>
              <div className="flex items-center mx-auto lg:mx-0 md:mx-0">
                {blog.publisherPhoto ? (
                  <img
                    className="w-10 h-10 rounded-full mr-4"
                    src={blog.publisherPhoto}
                    alt=""
                  />
                ) : (
                  <img
                    alt=""
                    className="w-10 h-10 rounded-full mr-4"
                    src="https://i.ibb.co/S5PRg6x/download.jpg"
                  />
                )}
                <div className="text-sm">
                  <p className="text-black font-bold leading-none">
                    {blog.publisherName}
                  </p>
                  <p className="text-gray-600">{blog.date}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center my-10">
        <Link to="/blog">
          <button className="text-2xl text-[#454242] hover:text-white rounded-sm py-3 px-7 border border-[#454242] hover:bg-[#454242] hover:border-none font-medium">
            See All Blog
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomeBlog;
