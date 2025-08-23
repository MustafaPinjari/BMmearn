import React from 'react';
import Button from '../ui/Button';

const Footer = () => {
  return (
    <footer 
      className="w-full mt-[63px] sm:mt-[94px] lg:mt-[126px] bg-cover bg-center relative"
      style={{ backgroundImage: "url('/images/img_frame_6964.png')" }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-[#000000db] z-0"></div>
      
      {/* Content */}
      <div className="relative z-10 w-full">
        <div className="flex flex-col justify-start items-center w-full">
          <div className="flex flex-col gap-[35px] sm:gap-[52px] lg:gap-[70px] justify-center items-center w-full pt-[53px] sm:pt-[79px] lg:pt-[106px] pb-[53px] sm:pb-[79px] lg:pb-[106px]">
            
            {/* Top Section */}
            <div className="flex flex-col lg:flex-row justify-between items-center w-full max-w-[1206px] px-4 sm:px-6 lg:px-0 gap-8 lg:gap-0">
              {/* Company Info */}
              <div className="flex flex-col gap-[2px] sm:gap-[3px] lg:gap-[4px] justify-start items-start text-center lg:text-left">
                <h2 className="text-[28px] sm:text-[38px] lg:text-[48px] font-inter font-bold leading-[34px] sm:leading-[46px] lg:leading-[59px] text-[#d64d00]">
                  Bharat Movers
                </h2>
                <p className="text-[24px] sm:text-[32px] lg:text-[40px] font-inter font-bold leading-[29px] sm:leading-[39px] lg:leading-[49px] text-white">
                  The Smarter Way to Move.
                </p>
              </div>
              
              {/* Contact and Social */}
              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-[20px] mb-[4px] sm:mb-[6px] lg:mb-[8px] w-full lg:w-[40%] justify-center lg:justify-end">
                <Button
                  variant="primary"
                  onClick={() => {}}
                  className="text-[14px] sm:text-[16px] lg:text-[18px] font-inter font-normal leading-[17px] sm:leading-[20px] lg:leading-[22px] text-white bg-[#d64d00] rounded-[8px] pt-[11px] pr-[15px] pb-[11px] pl-[15px] sm:pt-[12px] sm:pr-[17px] sm:pb-[12px] sm:pl-[17px] lg:pt-[14px] lg:pr-[20px] lg:pb-[14px] lg:pl-[20px]"
                >
                  Get in touch with us
                </Button>
                
                <div className="flex flex-row gap-[15px] sm:gap-[17px] lg:gap-[20px] justify-start items-center">
                  <div className="flex flex-col justify-start items-center p-[8px] sm:p-[9px] lg:p-[10px]">
                    <img 
                      src="/images/img_ri_facebook_fill.svg" 
                      className="w-[24px] h-[24px] sm:w-[27px] sm:h-[27px] lg:w-[30px] lg:h-[30px]" 
                      alt="Facebook" 
                    />
                  </div>
                  <img 
                    src="/images/img_frame_315.svg" 
                    className="w-[38px] h-[38px] sm:w-[44px] sm:h-[44px] lg:w-[50px] lg:h-[50px]" 
                    alt="Social media" 
                  />
                  <img 
                    src="/images/img_frame_317.svg" 
                    className="w-[38px] h-[38px] sm:w-[44px] sm:h-[44px] lg:w-[50px] lg:h-[50px]" 
                    alt="Social media" 
                  />
                  <div className="flex flex-col justify-start items-center p-[8px] sm:p-[9px] lg:p-[10px]">
                    <img 
                      src="/images/img_ri_linkedin_fill.svg" 
                      className="w-[24px] h-[24px] sm:w-[27px] sm:h-[27px] lg:w-[30px] lg:h-[30px]" 
                      alt="LinkedIn" 
                    />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Navigation Links */}
            <div className="flex flex-col lg:flex-row justify-start items-center w-full max-w-[1206px] px-4 sm:px-6 lg:px-[8px] mb-[2px] sm:mb-[3px] lg:mb-[4px] gap-8 lg:gap-0">
              <div className="flex flex-col sm:flex-row justify-start items-center w-full lg:w-[66%] gap-6 sm:gap-8 lg:gap-0">
                
                {/* Home Column */}
                <div className="flex flex-col gap-[18px] sm:gap-[23px] lg:gap-[28px] justify-start items-center lg:items-start text-center lg:text-left">
                  <p className="text-[16px] sm:text-[19px] lg:text-[22px] font-inter font-normal leading-[20px] sm:leading-[23px] lg:leading-[27px] text-white">
                    Home
                  </p>
                  <a 
                    href="#support" 
                    className="text-[14px] sm:text-[16px] lg:text-[18px] font-inter font-normal leading-[17px] sm:leading-[20px] lg:leading-[22px] text-white hover:text-[#d64d00] transition-colors"
                  >
                    Support
                  </a>
                </div>
                
                {/* About Column */}
                <div className="flex flex-col gap-[17px] sm:gap-[21px] lg:gap-[26px] justify-start items-center text-center lg:text-left lg:ml-[32px]">
                  <p className="text-[16px] sm:text-[19px] lg:text-[22px] font-inter font-normal leading-[20px] sm:leading-[23px] lg:leading-[27px] text-white">
                    About
                  </p>
                  <p className="text-[14px] sm:text-[16px] lg:text-[18px] font-inter font-normal leading-[17px] sm:leading-[20px] lg:leading-[22px] text-white">
                    FAQ&apos;s
                  </p>
                </div>
                
                {/* Service and Career Section */}
                <div className="flex flex-col lg:flex-row justify-start items-center lg:items-start w-full lg:w-auto gap-6 lg:gap-0 lg:ml-[30px]">
                  <div className="relative w-full lg:w-[322px] h-auto lg:h-[84px]">
                    <div className="flex flex-col sm:flex-row justify-start items-center lg:items-start w-full lg:w-[62%] gap-4 sm:gap-6 lg:gap-0">
                      <div className="flex flex-col gap-[17px] sm:gap-[21px] lg:gap-[26px] justify-start items-center lg:items-start text-center lg:text-left">
                        <p className="text-[16px] sm:text-[19px] lg:text-[22px] font-inter font-normal leading-[20px] sm:leading-[23px] lg:leading-[27px] text-white ml-0 lg:ml-[10px]">
                          Service
                        </p>
                        <a 
                          href="#terms" 
                          className="text-[14px] sm:text-[16px] lg:text-[18px] font-inter font-normal leading-[17px] sm:leading-[20px] lg:leading-[22px] text-white hover:text-[#d64d00] transition-colors"
                        >
                          Terms of Service
                        </a>
                      </div>
                      <a 
                        href="#career" 
                        className="text-[16px] sm:text-[19px] lg:text-[22px] font-inter font-normal leading-[20px] sm:leading-[23px] lg:leading-[27px] text-white hover:text-[#d64d00] transition-colors lg:ml-[-16px]"
                      >
                        Career
                      </a>
                    </div>
                    
                    <p className="text-[16px] sm:text-[19px] lg:text-[22px] font-inter font-normal leading-[20px] sm:leading-[23px] lg:leading-[27px] text-white text-center lg:text-left lg:absolute lg:top-0 lg:right-[79px] mt-4 lg:mt-0">
                      Contact
                    </p>
                    <a 
                      href="#privacy" 
                      className="text-[14px] sm:text-[16px] lg:text-[18px] font-inter font-normal leading-[17px] sm:leading-[20px] lg:leading-[22px] text-white hover:text-[#d64d00] transition-colors text-center lg:text-left lg:absolute lg:bottom-[23px] lg:right-[18px] mt-2 lg:mt-0 block"
                    >
                      Privacy Policy
                    </a>
                  </div>
                </div>
              </div>
              
              <p className="text-[14px] sm:text-[16px] lg:text-[18px] font-inter font-normal leading-[17px] sm:leading-[20px] lg:leading-[22px] text-white text-center lg:text-left lg:ml-[20px] mt-4 lg:mt-0">
                Refund & Cancellation Policy
              </p>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="flex flex-row justify-center items-center w-full bg-[#d64d00] py-[8px] sm:py-[9px] lg:py-[10px] px-[8px] sm:px-[9px] lg:px-[10px]">
          <p className="text-[12px] sm:text-[13px] lg:text-[14px] font-inter font-normal leading-[15px] sm:leading-[16px] lg:leading-[17px] text-right text-white">
            © 2025 Bharat Movers •  All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;