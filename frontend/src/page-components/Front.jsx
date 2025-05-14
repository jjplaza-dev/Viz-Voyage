import React from 'react'

function Front() {
  return <>
    <section className='w-full h-[90vh] grid grid-cols-1 lg:grid-cols-2'>
      <div className='w-full h-full  p-5 pt-20 lg:pt-1 lg:pl-20 flex flex-col justify-center '>
        <div className='min-w-[80%] max-w-[90%] h-[75px] lg:h-[80px] absolute right-[50%] translate-x-[50%] translate-y-[120%] lg:translate-y-[150%] shadow-2xl bg-white top-5 lg:top-10 flex items-center px-5 rounded-full '>
          
          <div className='w-[95%] h-[80%]  rounded-l-full rounded-r-full lg:rounded-r-none hover:bg-gray-200 relative duration-200'>
            <svg className='absolute w-2/12 h-full scale-50' viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 8.5116C12 10.1685 10.6569 11.5116 9 11.5116C7.34315 11.5116 6 10.1685 6 8.5116C6 6.85474 7.34315 5.5116 9 5.5116C10.6569 5.5116 12 6.85474 12 8.5116Z" stroke="#0F172A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M16.5 8.5116C16.5 15.6537 9 19.7616 9 19.7616C9 19.7616 1.5 15.6537 1.5 8.5116C1.5 4.36946 4.85786 1.0116 9 1.0116C13.1421 1.0116 16.5 4.36946 16.5 8.5116Z" stroke="#0F172A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <input className='w-10/12 h-full absolute right-0 bg-inherit outline-none ' placeholder='Where to?'/>
          </div>
          <div className='w-[95%] h-[80%] border-l-2 border-r-2 hidden lg:block hover:bg-gray-200 relative duration-200'>
            <svg className='absolute w-2/12 h-full scale-50' viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.75 1.00232V3.25232M15.25 1.00232V3.25232M1 16.7523V5.50232C1 4.25968 2.00736 3.25232 3.25 3.25232H16.75C17.9926 3.25232 19 4.25968 19 5.50232V16.7523M1 16.7523C1 17.995 2.00736 19.0023 3.25 19.0023H16.75C17.9926 19.0023 19 17.995 19 16.7523M1 16.7523V9.25232C1 8.00968 2.00736 7.00232 3.25 7.00232H16.75C17.9926 7.00232 19 8.00968 19 9.25232V16.7523" stroke="#0F172A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <input className='w-10/12 h-full absolute right-0 bg-inherit outline-none' type='date' placeholder='When?'/>
          </div>
          <div className='w-[95%] h-[80%]  hidden lg:block rounded-r-full hover:bg-gray-200 relative duration-200'>
            <svg className='absolute w-2/12 h-full scale-50' viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.25 12.1522V16.4023C18.25 17.4967 17.4631 18.4382 16.3782 18.5823C14.2915 18.8593 12.1624 19.0023 10 19.0023C7.83757 19.0023 5.70854 18.8593 3.62185 18.5823C2.5369 18.4382 1.75 17.4967 1.75 16.4023V12.1522M18.25 12.1522C18.7219 11.75 19 11.1412 19 10.4912V6.70801C19 5.62707 18.2321 4.69313 17.1631 4.53318C16.0377 4.36479 14.8995 4.23547 13.75 4.14664M18.25 12.1522C18.0564 12.3173 17.8302 12.4476 17.5771 12.5317C15.1953 13.3236 12.6477 13.7523 10 13.7523C7.35229 13.7523 4.80469 13.3236 2.42289 12.5317C2.16984 12.4476 1.94361 12.3173 1.75 12.1522M1.75 12.1522C1.27808 11.7499 1 11.1412 1 10.4912V6.70801C1 5.62707 1.7679 4.69314 2.83694 4.53318C3.96233 4.36479 5.10049 4.23547 6.25 4.14664M13.75 4.14664V3.25232C13.75 2.00968 12.7426 1.00232 11.5 1.00232H8.5C7.25736 1.00232 6.25 2.00968 6.25 3.25232V4.14664M13.75 4.14664C12.5126 4.05102 11.262 4.00232 10 4.00232C8.73804 4.00232 7.48744 4.05102 6.25 4.14664M10 10.7523H10.0075V10.7598H10V10.7523Z" stroke="#0F172A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <input className='w-10/12 h-full absolute right-0 bg-inherit outline-none' placeholder='All Travel Style'/>
          </div>
          
          <button className='w-[40%] h-[80%] bg-green-500 rounded-full font-extrabold text-white flex justify-center items-center'>Search</button>
        </div>
        <div><h2>Chase horizons, conquer trails, and live your boldest journey.</h2></div>
        <div className='pt-10'><h5>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero, natus vel debitis voluptatem quia error illum repudiandae, aperiam eos dolore, perferendis repellat! Molestias officia dolorem, incidunt quos reiciendis dolor saepe!</h5></div>
      </div>
      <div className='w-full h-full  grid grid-cols-3'>
        <div className='w-10/12 aspect-[1/1.5] bg-black m-auto rounded-[15px] rotate-[-5deg] translate-y-[-20%]'></div>
        <div className='w-10/12 aspect-[1/1.5] bg-black m-auto rounded-[15px] rotate-0 translate-y-[0%]'></div>
        <div className='w-10/12 aspect-[1/1.5] bg-black m-auto rounded-[15px] rotate-[5deg] translate-y-[20%]'></div>
      </div>
    </section>
  </>
}

export default Front