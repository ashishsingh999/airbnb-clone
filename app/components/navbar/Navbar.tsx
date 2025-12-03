'use client';

import Container from "../Container";

const Navbar = () => {
  return ( 
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div
        className="
          py-4 
          border-b-[1px]
        "
      >
        <Container>
          <div 
            className="
              flex 
              flex-row 
              items-center 
              justify-between
              gap-3
              md:gap-0
            "
          >
            <div className="text-rose-500 font-bold text-2xl cursor-pointer">
              Airbnb
            </div>
            
            <div 
              className="
                border-[1px] 
                w-full 
                md:w-auto 
                py-2 
                rounded-full 
                shadow-sm 
                hover:shadow-md 
                transition 
                cursor-pointer
              "
            >
              <div 
                className="
                  flex 
                  flex-row 
                  items-center 
                  justify-between
                "
              >
                <div className="text-sm font-semibold px-6">
                  Anywhere
                </div>
                <div 
                  className="
                    hidden 
                    sm:block 
                    text-sm 
                    font-semibold 
                    px-6 
                    border-x-[1px] 
                    flex-1 
                    text-center
                  "
                >
                  Any Week
                </div>
                <div 
                  className="
                    text-sm 
                    pl-6 
                    pr-2 
                    text-gray-600 
                    flex 
                    flex-row 
                    items-center 
                    gap-3
                  "
                >
                  <div className="hidden sm:block">Add Guests</div>
                  <div 
                    className="
                      p-2 
                      bg-rose-500 
                      rounded-full 
                      text-white
                    "
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                      <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div 
                className="
                  p-4
                  md:py-1
                  md:px-2
                  border-[1px] 
                  border-neutral-200 
                  flex 
                  flex-row 
                  items-center 
                  gap-3 
                  rounded-full 
                  cursor-pointer 
                  hover:shadow-md 
                  transition
                "
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                <div className="hidden md:block">
                  <div className="bg-gray-500 rounded-full w-[30px] h-[30px] flex items-center justify-center text-white text-xs">
                    A
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Navbar;

