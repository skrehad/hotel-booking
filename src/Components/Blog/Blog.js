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
          <h1 className="text-[50px] text-black">The Blog</h1>
        </div>
        <div className="lg:flex">
          <div className="w-full">
            <div class="max-w-sm w-full lg:max-w-full lg:flex">
              <div
                className="h-48 bg-[url('https://i.ibb.co/HXZRg7d/baldwin-home12621-610x610.jpg')] lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
                title=""
              ></div>
              <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div class="mb-8">
                  <p class="text-sm text-gray-600 flex items-center">
                    <svg
                      class="fill-current text-gray-500 w-3 h-3 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                    </svg>
                    Members only
                  </p>
                  <div class="text-gray-900 font-bold text-xl mb-2">
                    Can coffee make you a better developer?
                  </div>
                  <p class="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatibus quia, nulla! Maiores et perferendis eaque,
                    exercitationem praesentium nihil.
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
            <div class="flex justify-center sticky top-20 flex-wrap mt-5">
              <div class="m-3 py-5 px-5 bg-gray-800 rounded inline-block">
                <p class="text-white font-bold text-sm text-center mb-3">
                  Join our blogs
                </p>
                <div class="flex justify-between mb-3">
                  <input
                    class="mr-3 shadow-inner text-white rounded px-3 text-sm bg-gray-900 border-b border-gray-700"
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
