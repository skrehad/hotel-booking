import React from "react";
import { useQuery } from "react-query";
import Loading from "../../Shared/Loading/Loading";
import { toast } from "react-hot-toast";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import useTitle from "../../Shared/TitleChange/TitleChange";

const Blog = () => {
  useTitle("Blog");
  const { isLoading, data: blogs } = useQuery("blogData", () =>
    fetch("https://hotel-booking-backend-server-skrehad.vercel.app/blog").then(
      (res) => res.json()
    )
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  const subscribeForm = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const result = { name, email };
    toast.success(`${result.name}.Thanks for Subscribe`);
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
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewPort={{ once: false, amount: 0.3 }}
        >
          <h1 className="text-[50px] text-black md:text-center lg:text-left mb-10">
            The Blog
          </h1>
        </motion.div>
        <div className="lg:flex">
          <div className="w-full ">
            {blogs
              .concat()
              .reverse()
              .map((blog) => (
                <motion.div
                  variants={fadeIn("up", 0.3)}
                  initial="hidden"
                  whileInView={"show"}
                  viewPort={{ once: false, amount: 0.3 }}
                  key={blog._id}
                  className="max-w-sm lg:mb-5 mb-10 w-full md:mx-auto lg:max-w-full lg:flex"
                >
                  <div
                    className="lg:h-auto lg:w-[280px] md:h-[250px] flex-none bg-cover text-center overflow-hidden"
                    title=""
                  >
                    <img
                      className="h-full w-full rounded-l-lg"
                      src={blog.image}
                      alt=""
                      srcSet=""
                    />
                  </div>
                  <div className="  bg-white   rounded-r-lg  rounded-b p-4 flex flex-col justify-between leading-normal">
                    <div className="mb-8">
                      <div className="text-gray-900 font-bold text-xl mb-2">
                        {blog.title}
                      </div>
                      <p className="text-black text-base">{blog.description}</p>
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
                </motion.div>
              ))}
          </div>
          <motion.div
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewPort={{ once: false, amount: 0.3 }}
            className="w-none "
          >
            <div className="flex justify-center sticky top-20 flex-wrap ">
              <div className="my-5 lg:mt-0 mx-3 py-5 px-5 bg-gray-800 rounded inline-block">
                <p className="text-white font-bold text-sm text-center mb-3">
                  Join our blogs
                </p>
                <form onSubmit={subscribeForm}>
                  <div className="mb-3  text-center">
                    <input
                      className=" shadow-inner w-full p-2 text-white  text-sm bg-gray-900 border-b border-gray-700"
                      placeholder="Enter your Name"
                      name="name"
                      type="text"
                    />
                    <input
                      className=" shadow-inner w-full p-2 text-white mt-3 text-sm bg-gray-900 border-b border-gray-700"
                      placeholder="Enter your email"
                      name="email"
                      type="email"
                    />
                    <button className="shadow-lg bg-blue-600 mt-3 text-white font-bold text-sm rounded px-3 py-2">
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
