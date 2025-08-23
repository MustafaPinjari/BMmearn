import React, { useState } from 'react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import Button from '../../components/ui/Button';

const Services = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const services = [
    {
      id: 1,
      icon: '/images/img_image_8.png',
      title: 'Ride-Hailing Services',
      description: 'Book a ride anytime, anywhere with our easy-to-use app. Choose from cars, bikes, or taxis for your convenience.',
      link: 'Read Now'
    },
    {
      id: 2,
      icon: '/images/img_image_9.png',
      title: 'Goods Transport',
      description: 'Ship your goods safely and affordably. Choose from a variety of vehicles based on your shipping needs, from small parcels to large items.',
      link: 'Read Now'
    },
    {
      id: 3,
      icon: '/images/img_image_10.png',
      title: 'Vehicle Rentals',
      description: 'Rent a vehicle for a day, week, or month. Choose from cars, bikes, buses, and more with flexible rental plans.',
      link: 'Read Now'
    }
  ];

  const workSteps = [
    {
      id: 1,
      icon: '/images/img_search_gray_900.svg',
      title: 'Browse and select',
      description: 'Choose the service that best fits your needs, whether it is a ride, vehicle rental, or goods transport.'
    },
    {
      id: 2,
      icon: '/images/img_calendar_check_02.svg',
      title: 'Book and confirm',
      description: 'Secure your booking through our easy-to-use platform, confirming your reservation instantly.'
    },
    {
      id: 3,
      icon: '/images/img_face_happy.svg',
      title: 'Enjoy the Experience',
      description: 'On the scheduled day, your vehicle or service will be ready, with our team available to assist, ensuring everything goes smoothly.'
    }
  ];

  return (
    <div className="flex flex-col justify-start items-center w-full bg-white">
      <Header />
      {/* Enterprise and Delivery Partners Section */}
      <section className="w-full bg-[#d64d00]">
        <div className="w-full max-w-[1206px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-center items-end w-full py-[20px] sm:py-[30px] lg:py-[40px]">
            <div className="flex flex-col sm:flex-row justify-between items-center w-full sm:w-[42%] gap-4 sm:gap-0 mt-[2px] sm:mt-[3px] lg:mt-[4px]">
              <p className="text-[20px] sm:text-[26px] lg:text-[32px] font-inter font-bold leading-[24px] sm:leading-[32px] lg:leading-[39px] text-left text-white">
                For Enterprise
              </p>
              <p className="text-[20px] sm:text-[26px] lg:text-[32px] font-inter font-bold leading-[24px] sm:leading-[32px] lg:leading-[39px] text-left text-white mr-0 sm:mr-[5px] lg:mr-[10px]">
                Delivery Partners
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Separator */}
      <div className="w-full h-[67px] sm:h-[100px] lg:h-[134px] bg-white border-b border-[#0000004f]"></div>
      {/* Hero Section with Background Image */}
      <section 
        className="w-full bg-cover bg-center relative"
        style={{ backgroundImage: "url('/images/img_.png')" }}
      >
        <div className="w-full max-w-[1206px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-row justify-center items-center w-full py-[87px] sm:py-[130px] lg:py-[174px]">
            <div className="flex flex-row justify-center items-center w-full sm:w-[80%] lg:w-[64%] shadow-[0px_4px_35px_#888888ff]">
              <div className="flex flex-col gap-[26px] sm:gap-[39px] lg:gap-[52px] justify-start items-center w-full bg-[#12121266] rounded-[4px] py-[39px] sm:py-[58px] lg:py-[78px] px-[25px] sm:px-[37px] lg:px-[50px]">
                <h1 className="text-[28px] sm:text-[38px] lg:text-[48px] font-inter font-bold leading-[34px] sm:leading-[46px] lg:leading-[58px] text-center text-white w-full">
                  Simplified Solutions for Rides, Goods Shipping, and Vehicle Rentals
                </h1>
                
                <div className="flex flex-col sm:flex-row justify-between items-center w-full gap-4 sm:gap-0 mx-[89px] sm:mx-[133px] lg:mx-[178px]">
                  <Button
                    variant="primary"
                    onClick={() => {}}
                    className="text-[14px] sm:text-[15px] lg:text-[16px] font-inter font-semibold leading-[18px] sm:leading-[19px] lg:leading-[20px] text-white bg-[#d64d00] rounded-[8px] shadow-[0px_2px_4px_#2196f333] py-[14px] sm:py-[16px] lg:py-[18px] px-[26px] sm:px-[30px] lg:px-[34px] w-full sm:w-auto"
                  >
                    Get Started
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => {}}
                    className="text-[14px] sm:text-[15px] lg:text-[16px] font-inter font-semibold leading-[18px] sm:leading-[19px] lg:leading-[20px] text-white border border-white rounded-[8px] py-[14px] sm:py-[16px] lg:py-[18px] px-[26px] sm:px-[30px] lg:px-[34px] w-full sm:w-auto hover:bg-white hover:text-[#121212] transition-colors"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="w-full max-w-[1206px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-row justify-start items-center w-full shadow-[0px_8px_30px_#0000000c] bg-white rounded-[4px] py-[27px] sm:py-[40px] lg:py-[54px] px-[27px] sm:px-[40px] lg:px-[54px] -mt-[42px] sm:mt-[-63px] lg:mt-[-84px] mx-[33px] sm:mx-[49px] lg:mx-[66px]">
            <div className="flex flex-row justify-start items-center w-full mx-[4px] sm:mx-[6px] lg:mx-[8px]">
              <div className="flex flex-row justify-center items-center w-full">
                <input
                  type="text"
                  placeholder="Find Your Solution"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e?.target?.value)}
                  className="text-[20px] sm:text-[26px] lg:text-[32px] font-inter font-normal leading-[24px] sm:leading-[32px] lg:leading-[39px] text-left text-[#5d5d5d66] bg-transparent border-none outline-none w-auto flex-shrink-0"
                />
                <div className="flex flex-row justify-start items-center w-full py-[5px] sm:py-[7px] lg:py-[10px] px-[5px] sm:px-[7px] lg:px-[10px]">
                  <input
                    type="text"
                    placeholder="Ride Now"
                    className="text-[20px] sm:text-[26px] lg:text-[32px] font-inter font-normal leading-[24px] sm:leading-[32px] lg:leading-[39px] text-left text-[#5d5d5d66] bg-transparent border-none outline-none w-auto flex-1"
                  />
                </div>
              </div>
              <img 
                src="/images/img_search.svg" 
                className="w-[24px] h-[24px] sm:w-[31px] sm:h-[31px] lg:w-[38px] lg:h-[38px]" 
                alt="Search" 
              />
            </div>
          </div>
        </div>
      </section>
      {/* Services Section */}
      <section className="w-full bg-white">
        <div className="w-full max-w-[1206px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-[7px] sm:gap-[10px] lg:gap-[14px] justify-start items-start w-full mt-[49px] sm:mt-[73px] lg:mt-[98px] mx-[31px] sm:mx-[46px] lg:mx-[62px]">
            <h2 className="text-[28px] sm:text-[38px] lg:text-[48px] font-inter font-bold leading-[34px] sm:leading-[46px] lg:leading-[59px] text-left text-[#121212]">
              Explore Our Services
            </h2>
            <p className="text-[12px] sm:text-[14px] lg:text-[16px] font-inter font-normal leading-[15px] sm:leading-[18px] lg:leading-[20px] text-left text-[#121212]">
              A comprehensive look into the key offerings that make us your go-to platform for all transportation needs.
            </p>
          </div>

          {/* Services Grid */}
          <div className="flex flex-col lg:flex-row gap-[26px] sm:gap-[39px] lg:gap-[52px] w-full mt-[28px] sm:mt-[42px] lg:mt-[56px] mx-[31px] sm:mx-[46px] lg:mx-[62px]">
            {services?.map((service, index) => (
              <div 
                key={service?.id}
                className={`flex flex-row justify-start items-center w-full lg:w-[402px] shadow-[0px_2px_36px_#0000000a] bg-white py-[8px] sm:py-[12px] lg:py-[16px] px-[8px] sm:px-[12px] lg:px-[16px] ${index === 2 ? 'mr-0 sm:mr-[3px] lg:mr-[6px]' : ''}`}
              >
                <div className="flex flex-col gap-[12px] sm:gap-[18px] lg:gap-[24px] justify-start items-center w-full bg-white rounded-[24px] py-[12px] sm:py-[18px] lg:py-[24px] px-[5px] sm:px-[7px] lg:px-[10px]">
                  <img 
                    src={service?.icon} 
                    className="w-[40px] h-[40px] sm:w-[60px] sm:h-[60px] lg:w-[80px] lg:h-[80px] self-start ml-[6px] sm:ml-[9px] lg:ml-[12px]" 
                    alt={service?.title} 
                  />
                  
                  <div className="flex flex-col gap-[5px] sm:gap-[7px] lg:gap-[10px] justify-start items-start w-full ml-[6px] sm:ml-[9px] lg:ml-[12px]">
                    <h3 className="text-[14px] sm:text-[19px] lg:text-[24px] font-inter font-semibold leading-[18px] sm:leading-[23px] lg:leading-[30px] text-left text-[#d64d00]">
                      {service?.title}
                    </h3>
                    <p className="text-[10px] sm:text-[13px] lg:text-[16px] font-inter font-normal leading-[15px] sm:leading-[19px] lg:leading-[24px] text-left text-[#121212] w-full">
                      {service?.description}
                    </p>
                  </div>
                  
                  <div className="flex flex-row justify-start items-center w-full mx-[6px] sm:mx-[9px] lg:mx-[12px]">
                    <p className="text-[10px] sm:text-[13px] lg:text-[16px] font-inter font-semibold leading-[13px] sm:leading-[16px] lg:leading-[20px] text-left text-[#d64d00]">
                      {service?.link}
                    </p>
                    <img 
                      src="/images/img_arrow_right.svg" 
                      className="w-[11px] h-[6px] sm:w-[16px] sm:h-[9px] lg:w-[22px] lg:h-[12px] ml-[4px] sm:ml-[6px] lg:ml-[8px]" 
                      alt="Arrow right" 
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Separator */}
      <div className="w-full max-w-[1206px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full h-[67px] sm:h-[100px] lg:h-[134px] bg-white mt-[62px] sm:mt-[93px] lg:mt-[124px] mx-[31px] sm:mx-[46px] lg:mx-[62px]"></div>
      </div>
      {/* Main Image */}
      <div className="w-full max-w-[1206px] mx-auto px-4 sm:px-6 lg:px-8">
        <img 
          src="/images/img_image.png" 
          className="w-full h-[275px] sm:h-[412px] lg:h-[550px] -mt-[1px] sm:mt-[-1px] lg:mt-[-2px] mx-[31px] sm:mx-[46px] lg:mx-[62px]" 
          alt="Transportation services" 
        />
      </div>
      {/* How it Works Section */}
      <section className="w-full bg-white">
        <div className="w-full max-w-[1206px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-[37px] sm:gap-[55px] lg:gap-[74px] justify-start items-center w-full mt-[71px] sm:mt-[106px] lg:mt-[142px] mx-[20px] sm:mx-[30px] lg:mx-[40px]">
            
            {/* Section Header */}
            <div className="flex flex-col lg:flex-row justify-between items-center w-full mx-[9px] sm:mx-[13px] lg:mx-[18px]">
              <div className="flex flex-col gap-[12px] sm:gap-[18px] lg:gap-[24px] justify-start items-start w-full lg:w-auto text-center lg:text-left">
                <h2 className="text-[28px] sm:text-[38px] lg:text-[48px] font-inter font-bold leading-[34px] sm:leading-[46px] lg:leading-[59px] text-[#121212]">
                  How it works
                </h2>
                <p className="text-[11px] sm:text-[14px] lg:text-[18px] font-montserrat font-medium leading-[17px] sm:leading-[22px] lg:leading-[28px] text-[#121212] w-full lg:w-[88%]">
                  Our process is designed to be simple, transparent, and reliable, ensuring that booking and using our services is always a smooth and hassle-free experience.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row justify-end items-center self-end w-full lg:w-auto gap-4 sm:gap-0 mt-6 lg:mt-0">
                <Button
                  variant="primary"
                  onClick={() => {}}
                  className="text-[12px] sm:text-[14px] lg:text-[16px] font-inter font-semibold leading-[15px] sm:leading-[18px] lg:leading-[20px] text-white bg-[#d64d00] rounded-[8px] shadow-[0px_2px_4px_#2196f333] py-[14px] sm:py-[16px] lg:py-[18px] px-[26px] sm:px-[30px] lg:px-[34px] w-full sm:w-auto"
                >
                  Sign Up
                </Button>
                <Button
                  variant="outline"
                  onClick={() => {}}
                  className="text-[12px] sm:text-[14px] lg:text-[16px] font-inter font-semibold leading-[15px] sm:leading-[18px] lg:leading-[20px] text-[#121212] border border-[#121212] rounded-[8px] py-[14px] sm:py-[16px] lg:py-[18px] px-[26px] sm:px-[30px] lg:px-[34px] ml-0 sm:ml-[16px] lg:ml-[32px] w-full sm:w-auto"
                >
                  Ride Today
                </Button>
              </div>
            </div>

            {/* Steps Section */}
            <div className="relative w-full h-auto lg:h-[638px]">
              {/* Background Image */}
              <div className="hidden lg:block absolute top-0 left-1/2 transform -translate-x-1/2 w-[52%] h-full bg-[#f5f5f5] rounded-[24px] -ml-[60px]"></div>
              
              {/* Steps Content */}
              <div className="flex flex-col lg:flex-row justify-center items-start w-full relative z-10">
                
                {/* Left Side - Steps */}
                <div className="flex flex-col justify-center items-center w-full lg:w-[42%] gap-[20px] lg:gap-0">
                  
                  {/* Step 1 */}
                  <div className="flex flex-row gap-[10px] sm:gap-[15px] lg:gap-[20px] justify-center items-center w-full border border-[#00000019] rounded-[24px] bg-white py-[16px] sm:py-[24px] lg:py-[32px] px-[16px] sm:px-[24px] lg:px-[32px] mt-0 lg:mt-[26px]">
                    <div className="flex flex-col justify-start items-center bg-[#f5f5f5] rounded-[16px] py-[20px] sm:py-[30px] lg:py-[40px] px-[7px] sm:px-[10px] lg:px-[14px]">
                      <img 
                        src={workSteps?.[0]?.icon} 
                        className="w-[12px] h-[12px] sm:w-[18px] sm:h-[18px] lg:w-[24px] lg:h-[24px]" 
                        alt="Browse and select" 
                      />
                    </div>
                    <div className="flex flex-col gap-[6px] sm:gap-[9px] lg:gap-[12px] justify-start items-start flex-1">
                      <h3 className="text-[14px] sm:text-[19px] lg:text-[24px] font-inter font-bold leading-[18px] sm:leading-[23px] lg:leading-[30px] text-left text-[#d64d00]">
                        {workSteps?.[0]?.title}
                      </h3>
                      <p className="text-[11px] sm:text-[14px] lg:text-[18px] font-montserrat font-normal leading-[17px] sm:leading-[22px] lg:leading-[28px] text-left text-[#121212] w-full">
                        {workSteps?.[0]?.description}
                      </p>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="flex flex-row gap-[10px] sm:gap-[15px] lg:gap-[20px] justify-center items-center w-full lg:w-[46%] border border-[#00000019] rounded-[24px] bg-white py-[16px] sm:py-[24px] lg:py-[32px] px-[16px] sm:px-[24px] lg:px-[32px] mt-[20px] lg:mt-[212px]">
                    <div className="flex flex-col justify-start items-center bg-[#f5f5f5] rounded-[16px] py-[20px] sm:py-[30px] lg:py-[40px] px-[7px] sm:px-[10px] lg:px-[14px]">
                      <img 
                        src={workSteps?.[1]?.icon} 
                        className="w-[12px] h-[12px] sm:w-[18px] sm:h-[18px] lg:w-[24px] lg:h-[24px]" 
                        alt="Book and confirm" 
                      />
                    </div>
                    <div className="flex flex-col gap-[6px] sm:gap-[9px] lg:gap-[12px] justify-start items-start flex-1">
                      <h3 className="text-[14px] sm:text-[19px] lg:text-[24px] font-inter font-bold leading-[18px] sm:leading-[23px] lg:leading-[30px] text-left text-[#d64d00]">
                        {workSteps?.[1]?.title}
                      </h3>
                      <p className="text-[11px] sm:text-[14px] lg:text-[18px] font-montserrat font-normal leading-[17px] sm:leading-[22px] lg:leading-[28px] text-left text-[#121212] w-full">
                        {workSteps?.[1]?.description}
                      </p>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="flex flex-row gap-[10px] sm:gap-[15px] lg:gap-[20px] justify-center items-start w-full lg:w-[46%] border border-[#00000019] rounded-[24px] bg-white py-[16px] sm:py-[24px] lg:py-[32px] px-[16px] sm:px-[24px] lg:px-[32px] mb-0 lg:mb-[20px] mt-[20px] lg:mt-0">
                    <div className="flex flex-col justify-start items-center bg-[#f5f5f5] rounded-[16px] py-[20px] sm:py-[30px] lg:py-[40px] px-[7px] sm:px-[10px] lg:px-[14px]">
                      <img 
                        src={workSteps?.[2]?.icon} 
                        className="w-[12px] h-[12px] sm:w-[18px] sm:h-[18px] lg:w-[24px] lg:h-[24px]" 
                        alt="Enjoy the Experience" 
                      />
                    </div>
                    <div className="flex flex-col gap-[5px] sm:gap-[7px] lg:gap-[10px] justify-start items-start flex-1 mb-0 lg:mb-[18px]">
                      <h3 className="text-[14px] sm:text-[19px] lg:text-[24px] font-inter font-bold leading-[18px] sm:leading-[23px] lg:leading-[30px] text-left text-[#d64d00]">
                        {workSteps?.[2]?.title}
                      </h3>
                      <p className="text-[11px] sm:text-[14px] lg:text-[18px] font-montserrat font-normal leading-[17px] sm:leading-[22px] lg:leading-[28px] text-left text-[#121212] w-full">
                        {workSteps?.[2]?.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right Side - Image */}
                <div className="w-full lg:w-[48%] mt-8 lg:mt-[36px]">
                  <img 
                    src="/images/img_image_279.png" 
                    className="w-full h-[264px] sm:h-[396px] lg:h-[528px] rounded-[5px]" 
                    alt="Service experience" 
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Services;