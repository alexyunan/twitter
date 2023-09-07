import React from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useNavigate } from "react-router-dom";
import { Avatar, Button } from "@mui/material";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

const Profile = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  const handleOpenProfileModel = () => {
    console.log("open profile model");
  };

  const handleFollowUser = () => {
    console.log("follow user");
  };

  return (
    <div>
      <section className={`z-50 flex items-center sticky top-0 bg-opacity-95`}>
        <KeyboardBackspaceIcon className='cursor-pointer' onClick={handleBack} />
        <h1 className='py-5 text-xl font-bold opacity-90 ml-5'>Alex Giounan</h1>
      </section>
      <section>
        <img className='w-[100%] h-[15rem] object-cover' src='https://media.istockphoto.com/id/498309616/pl/zdj%C4%99cie/great-ocean-road-na-noc-droga-mleczna-widok.webp?b=1&s=612x612&w=0&k=20&c=8C9uTazO_eApFGRH0678owKrT_ne6N1B08raLvkrgec=' alt='' />
      </section>
      <section className='pl-6'>
        <div className='flex justify-between items-start mt-5 h-[5rem]'>
          <Avatar className='transform -translate-y-24' alt='alex giounan' src='https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_960_720.png' sx={{ width: "10rem", height: "10rem", border: "4px solid white" }} />

          {true ? (
            <Button onClick={handleOpenProfileModel} variant='contained' sx={{ borderRadius: "20px" }}>
              Edit Profile
            </Button>
          ) : (
            <Button onClick={handleFollowUser} variant='contained' sx={{ borderRadius: "20px" }}>
              {true ? "Follow" : "Unfollow"}
            </Button>
          )}
        </div>
        <div>
          <div className='flex items-center'>
            <h1 className='font-bold text-lg'>Alex Giounan</h1>
            {true && <img className='ml-2 w-5 h-5' src='https://abs.twimg.com/responsive-web/client-web/verification-card-v2@3x.8ebee01a.png' alt='' />}
          </div>
          <h1 className='text-gray-500'>@alex_giounan</h1>
        </div>
        <div className='mt-2 space-y-3'>
          <p>Hello, you will find full stack project on our website.</p>
          <div className='py-1 flex space-x-5'>
            <div className='flex items-center text-gray-500'>
              <BusinessCenterIcon />
              <p className='ml-2'>Education</p>
            </div>
            <div className='flex items-center text-gray-500'>
              <LocationOnIcon />
              <p className='ml-2'>Greece</p>
            </div>
            <div className='flex items-center text-gray-500'>
              <CalendarMonthIcon />
              <p className='ml-2'>Joined June 2022</p>
            </div>
          </div>
          <div className='flex items-center space-x-5'>
            <div className='flex items-center space-x-1 font-semibold'>
              <span>190</span>
              <span className='text-gray-500'>Following</span>
            </div>
            <div className='flex items-center space-x-1 font-semibold'>
              <span>590</span>
              <span className='text-gray-500'>Followers</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profile;
