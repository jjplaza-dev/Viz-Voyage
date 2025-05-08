import React from 'react'
const logoImage = "src/assets/VizVoyage.png"

function Navigation() {


  return <>
    <section className='w-full h-[8vh] lg:h-[15vh] duration-200 fixed top-2'>
        <div className='w-[90%] h-full m-auto flex items-center justify-between'>
          <div className='w-10 lg:w-[40vw] h-10 lg:h-[40%] grid grid-cols-1 lg:grid-cols-4 justify-start'>
            <div className='w-full h-full lg:hidden flex flex-col justify-center align-middle gap-[5px] relative'>
              <div className='w-[80%] h-[5%] bg-black'></div>
              <div className='w-[80%] h-[5%] bg-black'></div>
            </div>
            <button className='w-full text-start font-semibold hidden lg:block'>Travel Styles</button>
            <button className='w-full text-start font-semibold hidden lg:block'>Destinations</button>
            <button className='w-full text-start font-semibold hidden lg:block'>Brochures</button>
            <button className='w-full text-start font-semibold hidden lg:block'>Company</button>
          </div>
          <div className='h-[80%] aspect-square absolute right-[50%] translate-x-[50%]  border-black box-border bg-cover' style={{backgroundImage: "url(src/assets/VizVoyage.png)"}}></div>
          <div className='w-[15rem] h-[40%] right-0 flex justify-end lg:justify-between items-center'>
            <button className='h-[60%] hidden lg:block aspect-square '>
              <svg className='w-full h-full'viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.9815 16.7316C14.6121 14.9243 12.4424 13.7568 10 13.7568C7.55761 13.7568 5.38789 14.9243 4.01846 16.7316M15.9815 16.7316C17.8335 15.0832 19 12.6812 19 10.0068C19 5.03627 14.9706 1.00684 10 1.00684C5.02944 1.00684 1 5.03627 1 10.0068C1 12.6812 2.1665 15.0832 4.01846 16.7316M15.9815 16.7316C14.3915 18.147 12.2962 19.0068 10 19.0068C7.70383 19.0068 5.60851 18.147 4.01846 16.7316M13 7.75684C13 9.41369 11.6569 10.7568 10 10.7568C8.34315 10.7568 7 9.41369 7 7.75684C7 6.09998 8.34315 4.75684 10 4.75684C11.6569 4.75684 13 6.09998 13 7.75684Z" stroke="#0F172A" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
            <button className='w-fit h-fit px-2 lg:px-7 py-2 rounded-[5px] font-semibold border-0 lg:border-2 border-black'>Get In Touch</button>
          </div>
        </div>
    </section>
  </>
}

export default Navigation