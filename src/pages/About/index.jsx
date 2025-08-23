import React from 'react';
import Header from '../../components/common/Header';
import Button from '../../components/ui/Button';

const About = () => {
  const stats = [
    { value: "20+", label: "Professional" },
    { value: "10+", label: "Years Experience" },
    { value: "12K+", label: "Service Closed" },
    { value: "100%", label: "Customer Satisfaction" }
  ];

  const services = [
    {
      icon: "/images/img_truck_15944757.png",
      title: "Comprehensive\nServices",
      description: "Ride, rental, or goods transport – all in one place."
    },
    {
      icon: "/images/img_instruct_16059786.png",
      title: "Easy and\nTransparent Process",
      description: "Hassle-free booking\nwith clear pricing."
    },
    {
      icon: "/images/img_phone_15309738_1.png",
      title: "Reliable \nCustomer Support",
      description: "Reliable assistance\nanytime you need it."
    }
  ];

  const teamMembers = [
    { name: "Jenny Wilson", role: "XXXXXXXXXXX", image: "/images/img_bg.png" },
    { name: "Brooklyn Simmons", role: "XXXXXXXXXXX", image: "/images/img_bg_264x264.png" },
    { name: "Darlene Robertson", role: "XXXXXXXXXXX", image: "/images/img_bg_1.png" },
    { name: "Jane Cooper", role: "XXXXXXXXXXX", image: "/images/img_bg_2.png" },
    { name: "Eleanor Pena", role: "XXXXXXXXXXX", image: "/images/img_bg_3.png" },
    { name: "Theresa Webb", role: "XXXXXXXXXXX", image: "/images/img_bg_4.png" },
    { name: "Albert Flores", role: "XXXXXXXXXXX", image: "/images/img_bg_5.png" },
    { name: "Wade Warren", role: "XXXXXXXXXXX", image: "/images/img_bg_6.png" }
  ];

  return (
    <div className="w-full bg-white">
      <Header />
      {/* About Us Section */}
      <section className="w-full mt-[40px] md:mt-[60px] lg:mt-[80px] px-4 sm:px-6 lg:px-[44px]">
        <div className="w-full max-w-[1206px] mx-auto">
          <div className="flex flex-col lg:flex-row justify-start items-center w-full">
            <div className="flex flex-col lg:flex-row justify-center items-center w-full lg:w-[54%] mb-6 lg:mb-0">
              <img 
                src="/images/img_image_376x668.png" 
                alt="About Us" 
                className="w-full sm:w-[400px] md:w-[500px] lg:w-[668px] h-auto object-cover"
              />
              <div className="w-[6px] sm:w-[8px] lg:w-[12px] h-[200px] sm:h-[300px] lg:h-[378px] bg-[#f5b03a] ml-0 lg:ml-2 mt-4 lg:mt-0"></div>
            </div>
            
            <div className="w-full lg:w-[46%] lg:pl-[48px]">
              <div className="bg-[#22222205] rounded-[5px] p-[41px] sm:p-[61px] lg:p-[82px_36px]">
                <div className="flex flex-col gap-[12px] sm:gap-[15px] lg:gap-[18px] justify-start items-start w-full">
                  <h1 className="text-[32px] sm:text-[40px] lg:text-[48px] font-inter font-bold leading-[39px] sm:leading-[49px] lg:leading-[59px] text-left text-[#121212]">
                    About Us
                  </h1>
                  <p className="text-[14px] sm:text-[15px] lg:text-[16px] font-inter font-normal leading-[17px] sm:leading-[18px] lg:leading-[20px] text-left text-[#222222d3] w-full lg:w-[94%]">
                    <span className="text-[#222222d3]">Welcome to</span>
                    <span className="font-semibold text-[#121212]"> Bharat Movers—where convenience, reliability, and customer satisfaction meet to provide exceptional transportation and logistics services. Whether you are booking a ride, moving goods, or renting a vehicle, we are here to simplify the process and make your experience seamless.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Our Mission Section */}
      <section className="w-full mt-[30px] sm:mt-[45px] lg:mt-[60px] px-4 sm:px-6 lg:px-[44px]">
        <div className="w-full max-w-[1206px] mx-auto">
          <div className="flex flex-col lg:flex-row justify-start items-center w-full">
            <div className="w-full lg:w-[46%] lg:pr-[48px] order-2 lg:order-1">
              <div className="bg-[#22222205] rounded-[5px] p-[46px] sm:p-[69px] lg:p-[92px_48px]">
                <div className="flex flex-col gap-[15px] sm:gap-[17px] lg:gap-[20px] justify-start items-start w-full">
                  <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-inter font-bold leading-[39px] sm:leading-[49px] lg:leading-[59px] text-left text-[#121212]">
                    Our Mission
                  </h2>
                  <p className="text-[14px] sm:text-[15px] lg:text-[16px] font-inter font-normal leading-[16px] sm:leading-[17px] lg:leading-[19px] text-justify text-[#222222d3] w-full">
                    Our mission is to create a platform that offers fast, reliable, and affordable transportation solutions for both individuals and businesses. We believe in empowering our customers by providing them with easy access to the services they need—whether it is a quick ride, logistics support, or vehicle rental.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col lg:flex-row justify-center items-center w-full lg:w-[54%] mb-6 lg:mb-0 order-1 lg:order-2">
              <div className="w-[6px] sm:w-[8px] lg:w-[12px] h-[200px] sm:h-[300px] lg:h-[378px] bg-[#f5b03a] mr-0 lg:mr-2 mb-4 lg:mb-0"></div>
              <img 
                src="/images/img_image_376x664.png" 
                alt="Our Mission" 
                className="w-full sm:w-[400px] md:w-[500px] lg:w-[664px] h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Our Vision Section */}
      <section className="w-full mt-[30px] sm:mt-[45px] lg:mt-[60px] px-4 sm:px-6 lg:px-[44px]">
        <div className="w-full max-w-[1206px] mx-auto">
          <div className="flex flex-col lg:flex-row justify-start items-center w-full">
            <div className="flex flex-col lg:flex-row justify-center items-center w-full lg:w-[54%] mb-6 lg:mb-0">
              <img 
                src="/images/img_image_1.png" 
                alt="Our Vision" 
                className="w-full sm:w-[400px] md:w-[500px] lg:w-[668px] h-auto object-cover"
              />
              <div className="w-[6px] sm:w-[8px] lg:w-[12px] h-[200px] sm:h-[300px] lg:h-[378px] bg-[#f5b03a] ml-0 lg:ml-2 mt-4 lg:mt-0"></div>
            </div>
            
            <div className="w-full lg:w-[46%] lg:pl-[48px]">
              <div className="bg-[#22222205] rounded-[5px] p-[51px] sm:p-[76px] lg:p-[102px_48px]">
                <div className="flex flex-col gap-[15px] sm:gap-[17px] lg:gap-[20px] justify-start items-start w-full">
                  <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-inter font-bold leading-[39px] sm:leading-[49px] lg:leading-[59px] text-left text-[#121212]">
                    Our Vision
                  </h2>
                  <p className="text-[14px] sm:text-[15px] lg:text-[16px] font-inter font-normal leading-[16px] sm:leading-[17px] lg:leading-[19px] text-justify text-[#222222d3] w-full">
                    To be the go-to platform for transportation and logistics needs by continually innovating and improving the services we offer. We aim to build a connected community that relies on our platform for hassle-free and dependable transportation experiences.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* White Space */}
      <div className="w-full h-[67px] sm:h-[100px] lg:h-[134px] bg-white mt-[4px] sm:mt-[6px] lg:mt-[8px]"></div>
      {/* Statistics Section */}
      <section className="w-full bg-[#f5f5f5] py-[21px] sm:py-[31px] lg:py-[42px] px-4 sm:px-6 lg:px-[42px]">
        <div className="w-full max-w-[1206px] mx-auto">
          <div className="flex flex-col sm:flex-row justify-center items-center w-full">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 w-full">
              {stats?.map((stat, index) => (
                <div key={index} className="flex flex-col justify-start items-start">
                  <h3 className="text-[32px] sm:text-[45px] lg:text-[58px] font-manrope font-extrabold leading-[40px] sm:leading-[60px] lg:leading-[80px] text-center text-[#d64d00]">
                    {stat?.value}
                  </h3>
                  <p className="text-[16px] sm:text-[20px] lg:text-[24px] font-manrope font-semibold leading-[22px] sm:leading-[28px] lg:leading-[33px] text-left text-[#121212b2] mt-1 sm:mt-2">
                    {stat?.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Why Choose Us Section */}
      <section className="w-full relative mt-[-1px] sm:mt-[-1px] lg:mt-[-2px]">
        <div className="absolute inset-0 w-full h-full">
          <img 
            src="/images/img_rectangle_7.png" 
            alt="Background" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative w-full bg-[#000000db] py-[28px] sm:px-6 lg:px-[56px] pt-[23px] sm:pt-[34px] lg:pt-[46px] pb-[40px] sm:pb-[60px] lg:pb-[80px]">
          <div className="w-full max-w-[1206px] mx-auto px-4 sm:px-0">
            <div className="flex flex-col gap-[30px] sm:gap-[45px] lg:gap-[60px] justify-start items-center w-full">
              {/* Header */}
              <div className="flex flex-col gap-[11px] sm:gap-[16px] lg:gap-[22px] justify-start items-center w-full sm:w-[80%] lg:w-[50%]">
                <div className="flex flex-col gap-[4px] sm:gap-[6px] lg:gap-[8px] justify-start items-center w-full px-[69px] sm:px-[103px] lg:px-[138px]">
                  <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-inter font-bold leading-[39px] sm:leading-[49px] lg:leading-[59px] text-center text-white">
                    Why Choose Us?
                  </h2>
                  <div className="w-full h-[1px] sm:h-[1px] lg:h-[2px] bg-[#d64d00]"></div>
                </div>
                <p className="text-[14px] sm:text-[16px] lg:text-[18px] font-inter font-medium leading-[18px] sm:text-[22px] lg:leading-[28px] text-center text-white w-full">
                  At Bharat Movers, we believe in offering more than just services; we deliver experiences. Here is why customers choose us:
                </p>
              </div>

              {/* Services Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 w-full lg:w-[72%]">
                {services?.map((service, index) => (
                  <div 
                    key={index}
                    className="bg-white rounded-[4px] p-[18px] sm:p-[27px] lg:p-[36px_32px] shadow-[0px_5px_20px_#00000019] flex flex-col gap-[12px] sm:gap-[18px] lg:gap-[24px] justify-start items-center"
                  >
                    <img 
                      src={service?.icon} 
                      alt={service?.title?.replace('\n', ' ')} 
                      className="w-[55px] sm:w-[82px] lg:w-[110px] h-[55px] sm:h-[82px] lg:h-[110px] object-contain"
                    />
                    <h3 className="text-[16px] sm:text-[19px] lg:text-[22px] font-inter font-semibold leading-[20px] sm:leading-[23px] lg:leading-[26px] text-center text-[#121212] whitespace-pre-line">
                      {service?.title}
                    </h3>
                    <p className="text-[12px] sm:text-[13px] lg:text-[15px] font-inter font-normal leading-[14px] sm:leading-[16px] lg:leading-[18px] text-center text-[#121212] whitespace-pre-line">
                      {service?.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Team Image */}
      <section className="w-full mt-[54px] sm:mt-[81px] lg:mt-[108px] px-4 sm:px-6 lg:px-[66px]">
        <div className="w-full max-w-[1206px] mx-auto">
          <img 
            src="/images/img_image_7.png" 
            alt="Team" 
            className="w-full h-auto object-cover"
          />
        </div>
      </section>
      {/* Team Section Header */}
      <section className="w-full mt-[54px] sm:mt-[81px] lg:mt-[108px] px-4 sm:px-6 lg:px-[60px]">
        <div className="w-full max-w-[1206px] mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center w-full gap-6 lg:gap-0">
            <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-inter font-bold leading-[40px] sm:leading-[50px] lg:leading-[60px] text-left text-[#061c3d] w-full lg:w-[48%]">
              Say to our incredible team members.
            </h2>
            <div className="flex flex-col gap-[7px] sm:gap-[10px] lg:gap-[14px] justify-center items-start w-full lg:w-[32%]">
              <p className="text-[14px] sm:text-[16px] lg:text-[18px] font-inter font-normal leading-[17px] sm:leading-[19px] lg:leading-[22px] text-left text-[#061c3d]">
                The people behind Bharat Movers success.
              </p>
              <Button
                variant="primary"
                onClick={() => {}}
                className="text-[14px] sm:text-[15px] lg:text-[16px] font-inter font-bold leading-[17px] sm:leading-[18px] lg:leading-[20px] text-white bg-[#d64d00] rounded-[5px] pt-[10px] pr-[24px] pb-[10px] pl-[24px] sm:pt-[11px] sm:pr-[28px] sm:pb-[11px] sm:pl-[28px] lg:pt-[12px] lg:pr-[32px] lg:pb-[12px] lg:pl-[32px] uppercase"
              >
                Join our team
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* Team Grid */}
      <section className="w-full mt-[30px] sm:mt-[45px] lg:mt-[60px] px-4 sm:px-6 lg:px-[60px]">
        <div className="w-full max-w-[1206px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 w-full">
            {teamMembers?.map((member, index) => (
              <div 
                key={index}
                className="bg-white border border-[#f4f5f7] rounded-[16px] p-[18px] sm:p-[21px] lg:p-[24px] flex flex-col gap-[18px] sm:gap-[21px] lg:gap-[24px] justify-start items-center"
              >
                <img 
                  src={member?.image} 
                  alt={member?.name} 
                  className="w-[200px] sm:w-[232px] lg:w-[264px] h-[200px] sm:h-[232px] lg:h-[264px] object-cover rounded-[12px]"
                />
                <div className="flex flex-col gap-[4px] sm:gap-[6px] lg:gap-[8px] justify-center items-center w-full px-[28px] sm:px-[35px] lg:px-[42px]">
                  <h3 className="text-[16px] sm:text-[18px] lg:text-[20px] font-inter font-semibold leading-[20px] sm:leading-[23px] lg:leading-[25px] text-center text-[#061c3d]">
                    {member?.name}
                  </h3>
                  <p className="text-[14px] sm:text-[15px] lg:text-[16px] font-inter font-normal leading-[17px] sm:leading-[18px] lg:leading-[20px] text-center text-[#6a778b]">
                    {member?.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section 
        className="w-full mt-[45px] sm:mt-[67px] lg:mt-[90px] px-4 sm:px-6 lg:px-[56px_86px] relative"
        style={{
          backgroundImage: "url('/images/img_image_506x1440.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="w-full max-w-[1206px] mx-auto">
          <div className="flex flex-col lg:flex-row justify-start items-center w-full">
            <div className="bg-[#d64d00cc] p-[63px] sm:p-[94px] lg:p-[126px_56px] flex flex-col lg:flex-row justify-center items-center w-full lg:w-[54%]">
              <div className="flex flex-col gap-[25px] sm:gap-[37px] lg:gap-[50px] justify-start items-start w-full px-[3px] sm:px-[4px] lg:px-[6px]">
                <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-inter font-bold leading-[45px] sm:leading-[56px] lg:leading-[67px] text-left text-white w-full">
                  Get in touch with us for your service related query
                </h2>
                <Button
                  variant="primary"
                  onClick={() => {}}
                  className="text-[14px] sm:text-[16px] lg:text-[18px] font-manrope font-semibold leading-[19px] sm:leading-[22px] lg:leading-[25px] text-white bg-[#121212] rounded-[12px] pt-[14px] pr-[26px] pb-[14px] pl-[26px] sm:pt-[16px] sm:pr-[30px] sm:pb-[16px] sm:pl-[30px] lg:pt-[18px] lg:pr-[34px] lg:pb-[18px] lg:pl-[34px]"
                >
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="w-full relative">
        <div className="absolute inset-0 w-full h-full">
          <img 
            src="/images/img_frame_6964.png" 
            alt="Footer Background" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative w-full bg-[#000000db]">
          <div className="w-full max-w-[1206px] mx-auto px-4 sm:px-6 lg:px-[117px] py-[53px] sm:py-[79px] lg:py-[106px]">
            <div className="flex flex-col gap-[35px] sm:gap-[52px] lg:gap-[70px] justify-center items-center w-full">
              {/* Footer Header */}
              <div className="flex flex-col lg:flex-row justify-center items-center w-full">
                <div className="flex flex-col gap-[2px] sm:gap-[3px] lg:gap-[4px] justify-start items-start w-full lg:flex-1 mb-6 lg:mb-0">
                  <h3 className="text-[32px] sm:text-[40px] lg:text-[48px] font-inter font-bold leading-[39px] sm:leading-[49px] lg:leading-[59px] text-left text-[#d64d00]">
                    Bharat Movers
                  </h3>
                  <p className="text-[28px] sm:text-[34px] lg:text-[40px] font-inter font-bold leading-[34px] sm:leading-[42px] lg:leading-[49px] text-left text-white">
                    The Smarter Way to Move.
                  </p>
                </div>
                
                <div className="flex flex-col gap-[4px] sm:gap-[6px] lg:gap-[8px] justify-end items-center lg:items-end self-end w-full lg:w-[48%]">
                  <Button
                    variant="primary"
                    onClick={() => {}}
                    className="text-[14px] sm:text-[16px] lg:text-[18px] font-inter font-normal leading-[17px] sm:leading-[19px] lg:leading-[22px] text-white bg-[#d64d00] rounded-[8px] pt-[11px] pr-[15px] pb-[11px] pl-[15px] sm:pt-[12px] sm:pr-[17px] sm:pb-[12px] sm:pl-[17px] lg:pt-[14px] lg:pr-[20px] lg:pb-[14px] lg:pl-[20px]"
                  >
                    Get in touch with us
                  </Button>
                  
                  <div className="flex flex-row gap-[10px] sm:gap-[15px] lg:gap-[20px] justify-end items-center w-full lg:w-[48%]">
                    <div className="p-[5px] sm:p-[7px] lg:p-[10px] flex flex-col justify-start items-end w-full lg:flex-1">
                      <img 
                        src="/images/img_ri_facebook_fill.svg" 
                        alt="Facebook" 
                        className="w-[20px] sm:w-[25px] lg:w-[30px] h-[20px] sm:h-[25px] lg:h-[30px]"
                      />
                    </div>
                    <img 
                      src="/images/img_frame_315.svg" 
                      alt="Social Media" 
                      className="w-[35px] sm:w-[42px] lg:w-[50px] h-[35px] sm:h-[42px] lg:h-[50px]"
                    />
                    <img 
                      src="/images/img_frame_317.svg" 
                      alt="Social Media" 
                      className="w-[35px] sm:w-[42px] lg:w-[50px] h-[35px] sm:h-[42px] lg:h-[50px]"
                    />
                    <div className="p-[5px] sm:p-[7px] lg:p-[10px] flex flex-col justify-start items-center">
                      <img 
                        src="/images/img_ri_linkedin_fill.svg" 
                        alt="LinkedIn" 
                        className="w-[20px] sm:w-[25px] lg:w-[30px] h-[20px] sm:h-[25px] lg:h-[30px]"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer Links */}
              <div className="flex flex-col gap-[12px] sm:gap-[18px] lg:gap-[24px] justify-start items-center w-full px-[4px] sm:px-[6px] lg:px-[8px] mb-[2px] sm:mb-[3px] lg:mb-[4px]">
                <div className="flex flex-col sm:flex-row justify-start items-start sm:items-center w-full lg:flex-1 gap-4 sm:gap-0">
                  <p className="text-[16px] sm:text-[19px] lg:text-[22px] font-inter font-normal leading-[20px] sm:leading-[23px] lg:leading-[27px] text-left text-white">
                    Home
                  </p>
                  <p className="text-[16px] sm:text-[19px] lg:text-[22px] font-inter font-normal leading-[20px] sm:leading-[23px] lg:leading-[27px] text-left text-white sm:ml-[30px] lg:ml-[40px]">
                    About
                  </p>
                  <p className="text-[16px] sm:text-[19px] lg:text-[22px] font-inter font-normal leading-[20px] sm:leading-[23px] lg:leading-[27px] text-left text-white sm:ml-[30px] lg:ml-[40px]">
                    Service
                  </p>
                  <p className="text-[16px] sm:text-[19px] lg:text-[22px] font-inter font-normal leading-[20px] sm:leading-[23px] lg:leading-[27px] text-left text-white sm:ml-[30px] lg:ml-[40px]">
                    Career
                  </p>
                  <p className="text-[16px] sm:text-[19px] lg:text-[22px] font-inter font-normal leading-[20px] sm:leading-[23px] lg:leading-[27px] text-left text-white sm:ml-[30px] lg:ml-[40px]">
                    Contact
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row justify-start items-start sm:items-center w-full lg:flex-1 gap-4 sm:gap-0">
                  <p className="text-[14px] sm:text-[16px] lg:text-[18px] font-inter font-normal leading-[17px] sm:leading-[19px] lg:leading-[22px] text-left text-white self-end">
                    Support
                  </p>
                  <p className="text-[14px] sm:text-[16px] lg:text-[18px] font-inter font-normal leading-[17px] sm:leading-[19px] lg:leading-[22px] text-left text-white self-end sm:ml-[30px] lg:ml-[40px]">
                    FAQ&apos;s
                  </p>
                  <p className="text-[14px] sm:text-[16px] lg:text-[18px] font-inter font-normal leading-[17px] sm:leading-[19px] lg:leading-[22px] text-left text-white sm:ml-[30px] lg:ml-[40px]">
                    Terms of Service
                  </p>
                  <p className="text-[14px] sm:text-[16px] lg:text-[18px] font-inter font-normal leading-[17px] sm:leading-[19px] lg:leading-[22px] text-left text-white self-end sm:ml-[30px] lg:ml-[40px]">
                    Privacy Policy
                  </p>
                  <p className="text-[14px] sm:text-[16px] lg:text-[18px] font-inter font-normal leading-[17px] sm:leading-[19px] lg:leading-[22px] text-left text-white self-end sm:ml-[30px] lg:ml-[40px]">
                    Refund & Cancellation Policy
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Copyright */}
          <div className="w-full bg-[#d64d00] py-[5px] sm:py-[7px] lg:py-[10px] px-[5px] sm:px-[7px] lg:px-[10px]">
            <div className="flex flex-row justify-center items-center w-full">
              <p className="text-[12px] sm:text-[13px] lg:text-[14px] font-inter font-normal leading-[14px] sm:leading-[15px] lg:leading-[17px] text-right text-white">
                © 2025 Bharat Movers • All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;