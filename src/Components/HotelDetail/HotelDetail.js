import { Rating } from "@mui/material";
import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { FaBath } from "react-icons/fa";
import { BiSolidBed } from "react-icons/bi";
import { LuBedDouble, LuBedSingle } from "react-icons/lu";
import { MdFastfood } from "react-icons/md";
import { TbAirConditioning } from "react-icons/tb";
import { BsFillPersonVcardFill } from "react-icons/bs";
import { RiParkingBoxFill } from "react-icons/ri";
import { GiStopwatch } from "react-icons/gi";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import Modal from "./Modal";
import "./HotelDetail.css";

const HotelDetail = () => {
  const hotel = useLoaderData();
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const {
    name,
    rating,
    price,
    description,
    image,
    image2,
    image3,
    image4,
    image5,
  } = hotel;

  const handleBooking = () => {
    // Perform any necessary actions with the selected dates (e.g., send to the backend)
    console.log("Start Date:", formatDate(startDate));
    console.log("End Date:", formatDate(endDate));
    console.log("Day Count:", getDayCount(startDate, endDate));
    setIsModalOpen(true);
  };
  const isFutureDate = (date) => {
    return moment(date).startOf("day").isSameOrAfter(moment().startOf("day"));
  };
  const formatDate = (date) => {
    return date ? moment(date).format("YYYY-MM-DD") : null;
  };
  const getDayCount = (start, end) => {
    const startDate = moment(start);
    const endDate = moment(end);
    const diffDays = endDate.diff(startDate, "days") + 1;
    return diffDays;
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  //   console.log(hotel);
  return (
    <div className="lg:mx-24 my-10 rounded-lg bg-white p-5 md:mx-12 mx-5">
      <div className="grid gap-3 lg:grid-cols-2 md:grid-cols-2">
        <div>
          <img className="h-full rounded-lg" src={image} alt="" srcset="" />
        </div>
        <div>
          <div className="grid mb-3 grid-cols-2 gap-3">
            <img className="rounded-lg" src={image2} alt="" srcset="" />
            <img className="rounded-lg" src={image3} alt="" srcset="" />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <img className="rounded-lg" src={image4} alt="" srcset="" />
            <img className="rounded-lg" src={image5} alt="" srcset="" />
          </div>
        </div>
      </div>
      <div className="pt-5">
        <div className="grid mb-5 lg:grid-cols-2 md:grid-cols-2">
          <h1 className="text-black my-auto font-bold text-xl">{name}</h1>
          <div className="lg:md:text-right mt-2 lg:md:mt-0 lg:md:mr-5">
            <Rating name="read-only" value={rating} readOnly />
            <p className="mr-2">
              <span class="text-2xl font-bold text-gray-900 ">
                ${price}
                <span className="text-sm">/night</span>
              </span>
            </p>
          </div>
        </div>
        <div className="grid md:lg:mb-5 gap-5 lg:grid-cols-2 md:grid-cols-2">
          <div>
            <h1 className="text-2xl font-semibold text-black mb-2">
              Description
            </h1>
            <p className="text-black ">{description}</p>
          </div>
          <div className="md:lg:mt-0 md:lg:ml-10 mt-3">
            <h1 className="text-2xl font-semibold  text-black ">Facilities</h1>
            <div className="grid md:lg:grid-cols-2">
              <div>
                <div className="flex my-2 text-base text-gray-700">
                  <BiSolidBed className=" text-[32px]"></BiSolidBed>
                  <p className="ml-3 mt-1">Double bed two room</p>
                </div>
                <div className="flex my-2 text-base text-gray-700">
                  <LuBedSingle className=" text-[32px]"></LuBedSingle>
                  <p className="ml-3 mt-1">Single bed one room</p>
                </div>
                <div className="flex my-2 text-base text-gray-700">
                  <MdFastfood className=" text-[32px]" />
                  <p className="ml-3 mt-1">24 hour food available</p>
                </div>
                <div className="flex my-2 text-base text-gray-700">
                  <FaBath className=" text-[32px]"></FaBath>
                  <p className="ml-3 mt-2">Private bathroom</p>
                </div>
                <div className="flex my-2 text-base text-gray-700">
                  <TbAirConditioning className=" text-[32px]"></TbAirConditioning>
                  <p className="ml-3 mt-1">Air condition</p>
                </div>
              </div>
              <div>
                <div className="flex my-2 text-base text-gray-700">
                  <LuBedDouble className=" text-[32px]"></LuBedDouble>
                  <p className="ml-3 mt-1">Free Wifi</p>
                </div>
                <div className="flex my-2 text-base text-gray-700">
                  <BsFillPersonVcardFill className=" text-[32px]"></BsFillPersonVcardFill>
                  <p className="ml-3 mt-1">Key card access</p>
                </div>
                <div className="flex my-2 text-base text-gray-700">
                  <RiParkingBoxFill className=" text-[32px]"></RiParkingBoxFill>
                  <p className="ml-3 mt-1">Free parking</p>
                </div>
                <div className="flex my-2 text-base text-gray-700">
                  <GiStopwatch className=" text-[32px]"></GiStopwatch>
                  <p className="ml-3 mt-1">24 hour front desk</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>

      <div className="date-picker-container">
        <div className="date-picker-section">
          <h2>Select Start Date:</h2>
          <DatePicker
            className="date-picker"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            minDate={new Date()}
            filterDate={isFutureDate}
            required
          />
        </div>
        <div>
          <h2>Select End Date:</h2>
          <DatePicker
            className="date-picker"
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
            filterDate={isFutureDate}
            required
          />
        </div>
      </div>

      <div className="text-center my-5">
        <button
          onClick={handleBooking}
          disabled={!startDate || !endDate}
          class="text-white text-xl bg-gray-800 hover:bg-gray-700  focus:ring-4 focus:outline-none  font-medium rounded-lg px-5 py-2.5 text-center  "
        >
          Booking Hotel
        </button>
      </div>
      {isModalOpen && (
        <Modal closeModal={closeModal}>
          <h2>Booking Details</h2>
          <p>Start Date: {formatDate(startDate)}</p>
          <p>End Date: {formatDate(endDate)}</p>
          <p>Day Count: {getDayCount(startDate, endDate)}</p>
          <button onClick={closeModal}>Close</button>
        </Modal>
      )}
    </div>
  );
};

export default HotelDetail;
