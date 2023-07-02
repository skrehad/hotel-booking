import React from "react";

const About = () => {
  return (
    <div>
      <div className="bg-[url('https://i.ibb.co/chv1csw/beautiful-luxury-outdoor-swimming-pool-hotel-resort-74190-7433.jpg')] h-[300px] md:h-[400px] lg:h-[400px] md:bg-cover lg:bg-cover">
        <div className="text-center ">
          <h1 className="pt-20 md:pt-32 lg:pt-32 text-[50px] font-bold font-serif text-white">
            About Us
          </h1>
        </div>
      </div>
      <div className="lg:mx-28 mx-10 mt-10">
        <div className="lg:grid lg:mb-16 mb-8 md:mb-16 grid-cols-2 md:grid">
          <div className="lg:p-5 md:p-5 ">
            <h1 className="text-5xl  md:text-3xl lg:text-5xl lg:mt-5 text-black">
              Finest Luxury Hotels in St. Moritz
            </h1>
            <p className="lg:text-xl text-xl md:text-sm mt-5 text-gray-600">
              Pitchfork selfies master cleanse Kickstarter seitan retro.
              Drinking vinegar stumptown yr pop-up artisan sunt. Deep v cliche
              lomo biodiesel Neutra selfies. Shorts fixie consequat flexitarian
              four loko tempor duis single-origin coffee. Banksy, elit small
              batch freegan sed.
            </p>
          </div>
          <div className="mt-5 lg:mt-0 md:mt-0">
            <img
              src="https://i.ibb.co/bHQKjT3/about-pic1.jpg"
              alt=""
              srcset=""
            />
          </div>
        </div>
        <div className="lg:grid lg:mb-16 mb-8 md:mb-16 grid-cols-2 md:grid">
          <div className="hidden lg:block md:block  lg:pr-5 md:pr-5 mt-5 lg:mt-0 md:mt-0">
            <img
              src="https://i.ibb.co/SP7rbND/crew-89808-unsplash-1.jpg"
              alt=""
              srcset=""
            />
          </div>
          <div className="lg:p-5 md:px-5 ">
            <h1 className="text-5xl  md:text-3xl lg:text-5xl lg:mt-5 text-black">
              Experience Deliciously from Our Chefs
            </h1>
            <p className="lg:text-xl text-xl md:text-sm mt-5 text-gray-600">
              Exercitation photo booth stumptown tote bag Banksy, elit small
              batch freegan sed. Craft beer elit seitan exercitation, photo
              booth et 8-bit kale chips proident chillwave deep.Experience
              Deliciously from Our Chefs.
            </p>
          </div>
          <div className="lg:hidden md:hidden lg:pr-5 md:pr-5 mt-5 lg:mt-0 md:mt-0">
            <img
              src="https://i.ibb.co/SP7rbND/crew-89808-unsplash-1.jpg"
              alt=""
              srcset=""
            />
          </div>
        </div>

        <div className="lg:grid lg:mb-16 mb-8 md:mb-16 grid-cols-2 md:grid">
          <div className="lg:px-5 md:px-5 lg:py-0 p-5 md:py-0 ">
            <h1 className="text-5xl  md:text-3xl lg:text-5xl  text-black">
              Mission
            </h1>
            <p className="lg:text-xl text-xl md:text-sm mt-5 text-gray-600">
              The website aims to streamline the hotel reservation process,
              making it convenient and hassle-free for users. This involves
              providing a user-friendly interface that allows travelers to
              easily search for hotels based on their preferences, such as
              location, price, amenities, and dates.
            </p>
          </div>
          <div className="lg:px-5 md:px-5 lg:py-0 p-5 md:py-0 ">
            <h1 className="text-5xl md:text-3xl lg:text-5xl text-black">
              Values
            </h1>
            <p className="lg:text-xl text-xl md:text-sm mt-5 text-gray-600">
              A value of transparency involves providing accurate and honest
              information about hotels, pricing, and policies. This includes
              disclosing any hidden fees or terms and conditions, as well as
              displaying genuine user reviews to help customers make informed
              decisions.
            </p>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default About;
