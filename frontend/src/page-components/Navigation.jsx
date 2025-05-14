import React from 'react'
const logoImage = "src/assets/VizVoyage.png"


function Navigation() {


  return <>
    <section className='w-full h-[8vh] lg:h-[15vh] bg-green-200 duration-200 sticky top-0 z-10'>
        <div className='w-[90%] h-full m-auto flex items-center justify-between'>
          <div className='w-10 lg:w-[40vw] h-10 lg:h-[40%] grid grid-cols-1 lg:grid-cols-4 justify-start'>
            <div className='w-full h-full lg:hidden flex flex-col justify-center align-middle gap-[5px] relative'>
              <div className='w-[80%] h-[5%] bg-black'></div>
              <div className='w-[80%] h-[5%] bg-black'></div>
            </div>


            <button className='w-full text-start font-semibold hidden relative lg:block group'>Travel Styles 
              <svg className='inline-flex ml-2 rotate-180 group-hover:rotate-0 duration-150' width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.46967 0.474309C4.76256 0.181415 5.23744 0.181415 5.53033 0.474309L9.78033 4.72431C10.0732 5.0172 10.0732 5.49208 9.78033 5.78497C9.48744 6.07786 9.01256 6.07786 8.71967 5.78497L5 2.0653L1.28033 5.78497C0.987437 6.07786 0.512563 6.07786 0.21967 5.78497C-0.0732233 5.49208 -0.0732233 5.0172 0.21967 4.72431L4.46967 0.474309Z" fill="#0F172A"/>
              </svg>
              <div className='w-[200px] h-fit bg-white absolute left-0 opacity-0 pointer-events-none group-hover:pointer-events-auto group-hover:opacity-100 group-hover:flex group-hover:translate-y-[10px] translate-y-[-10px] transition-all duration-700 flex-col rounded-[5px]'>
                <a href='/group' className='w-full h-fit pr-10 pl-5 py-5 flex font-normal items-center hover:bg-slate-200 duration-300'>Group Travel</a>
                <a href='/group' className='w-full h-fit pr-10 pl-5 py-5 flex font-normal items-center hover:bg-slate-200 duration-300'>Budget Travel</a>
                <a href='/group' className='w-full h-fit pr-10 pl-5 py-5 flex font-normal items-center hover:bg-slate-200 duration-300'>Solo Travel</a>
                <a href='/group' className='w-full h-fit pr-10 pl-5 py-5 flex font-normal items-center hover:bg-slate-200 duration-300'>Business Travel</a>
              </div>
          </button>


            <button className='w-full text-start font-semibold hidden relative lg:block group'>Destinations
              <svg className='inline-flex ml-2 rotate-180 group-hover:rotate-0 duration-150' width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.46967 0.474309C4.76256 0.181415 5.23744 0.181415 5.53033 0.474309L9.78033 4.72431C10.0732 5.0172 10.0732 5.49208 9.78033 5.78497C9.48744 6.07786 9.01256 6.07786 8.71967 5.78497L5 2.0653L1.28033 5.78497C0.987437 6.07786 0.512563 6.07786 0.21967 5.78497C-0.0732233 5.49208 -0.0732233 5.0172 0.21967 4.72431L4.46967 0.474309Z" fill="#0F172A"/>
              </svg>
              <div className='w-[400px] h-[300px] bg-white absolute left-0 opacity-0 pointer-events-none group-hover:pointer-events-auto group-hover:opacity-100 group-hover:flex group-hover:translate-y-[10px] translate-y-[-10px] transition-all duration-700 rounded-[5px] flex'>
                <a href='/destination' className='w-full h-full hover:w-[200%] duration-500'>
                  <div className='w-full h-[80%] bg-red-500 bg-cover bg-center' style={{backgroundImage: "url(src/assets/luzon.jpg)"}}></div>
                  <div className='w-full h-[20%] flex justify-center items-center'>Luzon</div>
                </a>
                <a href='/destination' className='w-full h-full hover:w-[200%] duration-500'>
                  <div className='w-full h-[80%] bg-red-500 bg-cover bg-center' style={{backgroundImage: "url(src/assets/visayas.jpg)"}}></div>
                  <div className='w-full h-[20%] flex justify-center items-center'>Visayas</div>
                </a>
                <a href='/destination' className='w-full h-full hover:w-[200%] duration-500'>
                  <div className='w-full h-[80%] bg-red-500 bg-cover bg-center' style={{backgroundImage: "url(src/assets/mindanao.jpg)"}}></div>
                  <div className='w-full h-[20%] flex justify-center items-center'>Mindanao</div>
                </a>
              </div>
            </button>


            <a href='/brochures' className='w-full text-start font-semibold hidden relative lg:flex group items-center cursor-pointer'>Brochures
            </a>


            <button className='w-full text-start font-semibold hidden relative lg:block group'>Company 
              <svg className='inline-flex ml-2 rotate-180 group-hover:rotate-0 duration-150' width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.46967 0.474309C4.76256 0.181415 5.23744 0.181415 5.53033 0.474309L9.78033 4.72431C10.0732 5.0172 10.0732 5.49208 9.78033 5.78497C9.48744 6.07786 9.01256 6.07786 8.71967 5.78497L5 2.0653L1.28033 5.78497C0.987437 6.07786 0.512563 6.07786 0.21967 5.78497C-0.0732233 5.49208 -0.0732233 5.0172 0.21967 4.72431L4.46967 0.474309Z" fill="#0F172A"/>
              </svg>
              <div className='w-[200px] h-fit bg-white purple-300 absolute left-0 opacity-0 pointer-events-none group-hover:pointer-events-auto group-hover:opacity-100 group-hover:flex group-hover:translate-y-[10px] translate-y-[-10px] transition-all duration-700 flex flex-col rounded-[5px]'>
                <a href='/group' className='w-full h-fit pr-10 pl-5 py-5 flex font-normal items-center hover:bg-slate-200 duration-300'>About Us</a>
                <a href='/group' className='w-full h-fit pr-10 pl-5 py-5 flex font-normal items-center hover:bg-slate-200 duration-300'>Our Team</a>
                <a href='/group' className='w-full h-fit pr-10 pl-5 py-5 flex font-normal items-center hover:bg-slate-200 duration-300'>News</a>
                <a href='/group' className='w-full h-fit pr-10 pl-5 py-5 flex font-normal items-center hover:bg-slate-200 duration-300'>Careers</a>
              </div>
            </button>


          </div>
          <a href='/' className='h-[80%] aspect-square absolute right-[50%] translate-x-[50%]'><div className='w-full h-full border-black box-border bg-cover' style={{backgroundImage: "url(src/assets/VizVoyage.png)"}}></div></a>
          <div className='w-[15rem] h-[40%] right-0 flex justify-end lg:justify-between items-center'>
            <button className='h-[60%] hidden lg:block aspect-square '>
              <svg className='w-full h-full'viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.9815 16.7316C14.6121 14.9243 12.4424 13.7568 10 13.7568C7.55761 13.7568 5.38789 14.9243 4.01846 16.7316M15.9815 16.7316C17.8335 15.0832 19 12.6812 19 10.0068C19 5.03627 14.9706 1.00684 10 1.00684C5.02944 1.00684 1 5.03627 1 10.0068C1 12.6812 2.1665 15.0832 4.01846 16.7316M15.9815 16.7316C14.3915 18.147 12.2962 19.0068 10 19.0068C7.70383 19.0068 5.60851 18.147 4.01846 16.7316M13 7.75684C13 9.41369 11.6569 10.7568 10 10.7568C8.34315 10.7568 7 9.41369 7 7.75684C7 6.09998 8.34315 4.75684 10 4.75684C11.6569 4.75684 13 6.09998 13 7.75684Z" stroke="#0F172A" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
            <a href='/about'><button className='w-fit h-fit px-2 lg:px-7 py-2 rounded-[5px] font-semibold border-0 lg:border-2 border-black bg-inherit hover:bg-black hover:text-white hover:border-white duration-200 active:translate-x-1 active:translate-y-1 active:duration-0'>Get In Touch</button></a>
          </div>
        </div>
    </section>
  </>
}

export default Navigation