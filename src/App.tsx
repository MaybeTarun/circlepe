import './App.css'
import img1 from './assets/1.png';
import img2 from './assets/2.png';
import img3 from './assets/3.png';
import img4 from './assets/4.png';
import img5 from './assets/5.png';
import img6 from './assets/6.png';
import arrow from './assets/arrow.svg';
import Progress from './components/Progress.tsx'

function App() {
  return (
    <>
      <Progress/>
        {/* bg image */}
      <div className="min-h-screen relative flex items-center justify-center bg-[#1b1b1b]">
        {/* bg circle */}
        <div className="fixed top-[-350px] left-[-400px] w-[1100px] h-[1100px] bg-circle rounded-full overflow-hidden"></div>
        
        {/* right aside */}
        <div className="opacity-0 fixed top-0 right-0 h-full w-1/3 bg-black lg:opacity-20"></div>

        {/* sections */}
        <div className='overflow-hidden z-10'>

          {/* section 1 */}
          <section className='w-screen h-screen flex flex-col lg:flex-row justify-center items-center mt-10 lg:mt-0'>
            {/* text */}
            <div className='w-[380px] h-fit leading-[1.15] mx-10 flex flex-col text-left px-5'>
              <div className='text-[#AAAAAA] text-[24px] lg:text-[48px] w-[220px]'>How Does it <span className='text-[#EEEEEE]'>Work</span><span className='text-[#459BFF]'> ?</span></div>
              <div className="w-[84px] border-t-2 border-[#459BFF] lg:my-8 my-4"></div>
              <div className='text-[#EEEEEE] text-[18px] lg:text-[20px] w-[350px]'>We make it possible in a quick and easy few steps process, takes max 5 mins</div>
            </div>
            {/* img */}
            <div><img src={img1} className='rounded-[2rem] p-10 lg:scale-100 scale-[90%] mt-[-50px] lg:mt-0'></img></div>
          </section>

          {/* section 2 */}
          <section className='w-screen h-screen flex flex-col lg:flex-row justify-center items-center'>
            {/* text */}
            <div className='w-[380px] h-fit leading-[1.15] mx-10 px-5'>
              <div className='text-[#AAAAAA] text-[36px] lg:text-[48px] w-[220px]'>Step <span className='text-[#EEEEEE]'>1</span></div>
              <div className="w-[84px] border-t-2 border-[#459BFF] my-6"></div>
              <div className='text-[#FCF1B6] lg:text-[20px] text-[18px]'>
                <ul className='list-disc pl-5'>
                  <li className='text-[#FCF1B6] marker:text-[#F6E43F]'>Tenant selects the property</li>
                  <li className='text-[#AAAAAA] marker:text-[#D9D9D9]'>Tenant selects flexible rent tenure & corresponding amount</li>
                </ul>
              </div>
            </div>
            {/* img */}
            <div><img src={img2} className='rounded-[2rem] p-10 lg:scale-100 scale-[90%] mt-[-50px] lg:mt-0'></img></div>
          </section>

          {/* section 3 */}
          <section className='w-screen h-screen flex flex-col lg:flex-row justify-center items-center'>
            {/* text */}
            <div className='w-[380px] h-fit leading-[1.15] mx-10 px-5'>
              <div className='text-[#AAAAAA] text-[36px] lg:text-[48px] w-[220px]'>Step <span className='text-[#EEEEEE]'>1</span></div>
              <div className="w-[84px] border-t-2 border-[#459BFF] my-6"></div>
              <div className='text-[#FCF1B6] lg:text-[20px] text-[18px]'>
                <ul className='list-disc pl-5'>
                  <li className='text-[#AAAAAA] marker:text-[#D9D9D9]'>Tenant selects the property</li>
                  <li className='text-[#FCF1B6] marker:text-[#F6E43F]'>Tenant selects flexible rent tenure & corresponding amount</li>
                </ul>
              </div>
            </div>
            {/* img */}
            <div><img src={img3} className='rounded-t-[2rem] p-10 lg:scale-100 scale-[90%] mt-[-50px] lg:mt-0'></img></div>
          </section>

          {/* section 4 */}
          <section className='w-screen h-screen flex flex-col lg:flex-row justify-center items-center'>
            {/* text */}
            <div className='w-[380px] h-fit leading-[1.15] mx-10 px-5'>
              <div className='text-[#AAAAAA] text-[36px] lg:text-[48px] w-[220px]'>Step <span className='text-[#EEEEEE]'>2</span></div>
              <div className="w-[84px] border-t-2 border-[#459BFF] my-6"></div>
              <div className='text-[#FCF1B6] lg:text-[20px] text-[18px]'>
                <ul className='list-disc pl-5'>
                  <li className='text-[#FCF1B6] marker:text-[#F6E43F]'>Tenant selects Pay with Circle enabling :
                    <ul className='list-disc pl-5 text-[#EEEEEE] marker:text-[#EEEEEE] text-[16px] mt-2'>
                      <li>Zero security deposit move-in</li>
                      <li>Reduced rent offer</li>
                      <li>3 months salary cover</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            {/* img */}
            <div><img src={img4} className='rounded-[2rem] p-10 lg:scale-100 scale-[90%] mt-[-50px] lg:mt-0'></img></div>
          </section>

          {/* section 5 */}
          <section className='w-screen h-screen flex flex-col lg:flex-row justify-center items-center'>
            {/* text */}
            <div className='w-[380px] h-fit leading-[1.15] mx-10 px-5'>
              <div className='text-[#AAAAAA] text-[36px] lg:text-[48px] w-[220px]'>Step <span className='text-[#EEEEEE]'>3</span></div>
              <div className="w-[84px] border-t-2 border-[#459BFF] my-6"></div>
              <div className='text-[#FCF1B6] lg:text-[20px] text-[18px]'>
                <ul className='list-disc pl-5'>
                  <li className='text-[#FCF1B6] marker:text-[#F6E43F]'>Smooth Onboarding for the Tenant begins</li>
                </ul>
              </div>
            </div>
            {/* img */}
            <div><img src={img5} className='rounded-[2rem] p-10 lg:scale-100 scale-[90%] mt-[-50px] lg:mt-0'></img></div>
          </section>

          {/* section 6 */}
          <section className='w-screen h-screen flex flex-col lg:flex-row justify-center items-center'>
            {/* text */}
            <div className='w-[380px] h-fit leading-[1.15] mx-10 px-5'>
              <div className='text-[#AAAAAA] text-[36px] lg:text-[48px] w-[220px]'>Step <span className='text-[#EEEEEE]'>4</span></div>
              <div className="w-[84px] border-t-2 border-[#459BFF] my-6"></div>
              <div className='text-[#FCF1B6] lg:text-[20px] text-[18px]'>
                <ul className='list-disc pl-5'>
                  <li className='text-[#FCF1B6] marker:text-[#F6E43F]'>Tenant gets approved to move-in :
                    <ul className='list-disc pl-5 text-[#EEEEEE] marker:text-[#EEEEEE] text-[16px] mt-2'>
                      <li>Gets Zero-security deposit approval</li>
                      <li>Zero cost EMI = Monthly Rent</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            {/* img */}
            <div><img src={img6} className='rounded-[2rem] p-10 lg:scale-100 scale-[90%] mt-[-50px] lg:mt-0'></img></div>
          </section>

        </div>
      </div>
    </>
  );
}

export default App
