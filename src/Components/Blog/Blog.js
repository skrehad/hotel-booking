import React from "react";

const Blog = () => {
  return (
    <div>
      <div className="bg-[url('https://i.ibb.co/yswPhR5/photo-1445019980597-93fa8acb246c.jpg')] h-[200px] md:h-[300px] lg:h-[300px] bg-cover bg-no-repeat">
        <div className="text-center pt-16 md:pt-28 lg:pt-28">
          <h1 className=" text-[50px] font-bold font-serif text-white lg:text-black md:text-black">
            Blogs
          </h1>
        </div>
      </div>
      <div className="lg:mx-32 md:mx-20 mx-10 mt-10">
        <div>
          <h1 className="text-[50px] text-black md:text-center lg:text-left mb-10">
            The Blog
          </h1>
        </div>
        <div className="lg:flex">
          <div className="w-full ">
            <div class="max-w-sm mb-5 w-full md:mx-auto lg:max-w-full lg:flex">
              <div
                className="h-48 bg-[url('https://i.ibb.co/HXZRg7d/baldwin-home12621-610x610.jpg')] lg:h-auto lg:w-60 md:h-[250px] flex-none bg-cover text-center overflow-hidden"
                title=""
              ></div>
              <div class="  bg-white     rounded-b p-4 flex flex-col justify-between leading-normal">
                <div class="mb-8">
                  <div class="text-gray-900 font-bold text-xl mb-2">
                    Disclosing the Secrets of Success in Luxury Hospitality
                  </div>
                  <p class="text-black text-base">
                    Every good day starts off with a cappuccino, and there’s no
                    place better to enjoy some frothy caffeine than at the
                    Bulgari Hotel. Meh synth Schlitz, tempor duis single-origin
                    coffee ea next level ethnic fingerstache fanny pack nostrud.
                    Photo booth...
                  </p>
                </div>
                <div class="flex items-center">
                  {/* <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                {user && user.photoURL ? (
                  <img src={user.photoURL} alt="" />
                ) : (
                  <img src="https://i.ibb.co/S5PRg6x/download.jpg" alt="" />
                )}
              </div>
            </label> */}

                  <img
                    alt=""
                    class="w-10 h-10 rounded-full mr-4"
                    src="https://i.ibb.co/S5PRg6x/download.jpg"
                  />
                  <div class="text-sm">
                    <p class="text-gray-900 leading-none">Jonathan Reinink</p>
                    <p class="text-gray-600">Aug 18</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="max-w-sm mb-5 w-full md:mx-auto lg:max-w-full lg:flex">
              <div
                className="h-48 bg-[url('https://i.ibb.co/HXZRg7d/baldwin-home12621-610x610.jpg')] lg:h-auto lg:w-60 md:h-[250px] flex-none bg-cover text-center overflow-hidden"
                title=""
              ></div>
              <div class="  bg-white     rounded-b p-4 flex flex-col justify-between leading-normal">
                <div class="mb-8">
                  <div class="text-gray-900 font-bold text-xl mb-2">
                    Disclosing the Secrets of Success in Luxury Hospitality
                  </div>
                  <p class="text-gray-700 text-base">
                    Every good day starts off with a cappuccino, and there’s no
                    place better to enjoy some frothy caffeine than at the
                    Bulgari Hotel. Meh synth Schlitz, tempor duis single-origin
                    coffee ea next level ethnic fingerstache fanny pack nostrud.
                    Photo booth...
                  </p>
                </div>
                <div class="flex items-center">
                  <img
                    alt=""
                    class="w-10 h-10 rounded-full mr-4"
                    src="/img/jonathan.jpg"
                  />
                  <div class="text-sm">
                    <p class="text-gray-900 leading-none">Jonathan Reinink</p>
                    <p class="text-gray-600">Aug 18</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-none ">
            <div class="flex justify-center sticky top-20 flex-wrap ">
              <div class="my-5 lg:mt-0 mx-3 py-5 px-5 bg-gray-800 rounded inline-block">
                <p class="text-white font-bold text-sm text-center mb-3">
                  Join our blogs
                </p>
                <div class="flex justify-between mb-3">
                  <input
                    class=" shadow-inner text-white px-3 text-sm bg-gray-900 border-b border-gray-700"
                    placeholder="Enter your email"
                    type="text"
                  />
                  <button class="shadow-lg bg-blue-600 text-white font-bold text-sm rounded px-3 py-2">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
