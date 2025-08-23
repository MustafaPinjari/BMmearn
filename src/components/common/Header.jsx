import React, { useState } from 'react';

import Button from '../ui/Button';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b border-[#00000026] pt-[23px] pb-[23px] px-4 sm:pt-[46px] sm:pb-[46px] sm:px-8 lg:px-[32px]">
      <div className="w-full max-w-[1440px] mx-auto">
        <div className="flex flex-row justify-between items-center w-full">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-[24px] sm:text-[32px] lg:text-[40px] font-inter font-bold leading-[30px] sm:leading-[39px] lg:leading-[49px] text-left text-[#d64d00]">
              Bharat Movers
            </h1>
          </div>

          {/* Hamburger Menu Icon (Mobile only) */}
          <button 
            className="block lg:hidden p-2" 
            aria-label="Open menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className="block w-full h-0.5 bg-[#121212] mb-1"></span>
              <span className="block w-full h-0.5 bg-[#121212] mb-1"></span>
              <span className="block w-full h-0.5 bg-[#121212]"></span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex flex-row justify-between items-center w-[56%]">
            <div className="flex flex-row justify-center items-center gap-[69px] sm:gap-[100px] lg:gap-[138px] w-[64%]">
              <nav className="flex flex-row gap-[69px] sm:gap-[100px] lg:gap-[138px] justify-center items-center">
                <button 
                  role="menuitem"
                  className="text-[16px] sm:text-[18px] lg:text-[20px] font-inter font-medium leading-[20px] sm:leading-[23px] lg:leading-[25px] text-left text-[#121212] hover:text-[#d64d00] transition-colors"
                >
                  Home
                </button>
                <button 
                  role="menuitem"
                  className="text-[16px] sm:text-[18px] lg:text-[20px] font-inter font-medium leading-[20px] sm:leading-[23px] lg:leading-[25px] text-left text-[#121212] hover:text-[#d64d00] transition-colors"
                >
                  services
                </button>
                <button 
                  role="menuitem"
                  className="text-[16px] sm:text-[18px] lg:text-[20px] font-inter font-medium leading-[20px] sm:leading-[23px] lg:leading-[25px] text-left text-[#121212] hover:text-[#d64d00] transition-colors"
                >
                  Support
                </button>
              </nav>
              
              <Button
                variant="primary"
                className="text-[16px] sm:text-[18px] lg:text-[20px] font-inter font-bold leading-[20px] sm:leading-[23px] lg:leading-[25px] text-white bg-[#d64d00] rounded-[30px] pt-[12px] pr-[26px] pb-[12px] pl-[26px] sm:pt-[14px] sm:pr-[30px] sm:pb-[14px] sm:pl-[30px] lg:pt-[16px] lg:pr-[34px] lg:pb-[16px] lg:pl-[34px] ml-[51px] sm:ml-[76px] lg:ml-[102px]"
                onClick={() => {}}
              >
                About
              </Button>
            </div>
            
            <Button
              variant="secondary"
              className="text-[18px] sm:text-[21px] lg:text-[24px] font-inter font-semibold leading-[23px] sm:leading-[27px] lg:leading-[30px] text-[#222222] bg-white border-2 border-[#d64d00] rounded-[30px] pt-[10px] pr-[18px] pb-[10px] pl-[18px] sm:pt-[11px] sm:pr-[21px] sm:pb-[11px] sm:pl-[21px] lg:pt-[12px] lg:pr-[24px] lg:pb-[12px] lg:pl-[24px]"
              onClick={() => {}}
            >
              Sign Up / Login
            </Button>
          </div>

          {/* Mobile Navigation Menu */}
          <nav className={`${menuOpen ? 'block' : 'hidden'} lg:hidden absolute top-full left-0 w-full bg-white border-t border-[#00000026] z-50`}>
            <div className="flex flex-col p-4 space-y-4">
              <button 
                role="menuitem"
                className="text-[18px] font-inter font-medium text-left text-[#121212] hover:text-[#d64d00] transition-colors py-2"
              >
                Home
              </button>
              <button 
                role="menuitem"
                className="text-[18px] font-inter font-medium text-left text-[#121212] hover:text-[#d64d00] transition-colors py-2"
              >
                services
              </button>
              <button 
                role="menuitem"
                className="text-[18px] font-inter font-medium text-left text-[#121212] hover:text-[#d64d00] transition-colors py-2"
              >
                Support
              </button>
              <Button
                variant="primary"
                className="text-[18px] font-inter font-bold text-white bg-[#d64d00] rounded-[30px] py-3 px-6 mt-2"
                onClick={() => {}}
              >
                About
              </Button>
              <Button
                variant="secondary"
                className="text-[18px] font-inter font-semibold text-[#222222] bg-white border-2 border-[#d64d00] rounded-[30px] py-3 px-6"
                onClick={() => {}}
              >
                Sign Up / Login
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;