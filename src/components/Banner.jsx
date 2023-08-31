import Typed from 'react-typed';
const Banner = () => {
  return (
    <>
        <div className="bg-indigo-600 py-[50px] w-full">
            <div className=" max-w-[1240px] py-[95px] mx-auto text-center text-white">
                <div className="md:text-4xl font-bold text-2xl md:p-[24px]">Learn with us</div>
                <div className="md:text-[70px] font-bold text-3xl md:p-[24px]">Grow with us.</div>
                <div className="md:text-3xl font-bold text-xl md:p-[24px]">Learn
                <Typed
                className='md:px-4 px-2'
                    strings={['Web Development','Digital Marketing','Ethical Hacking']}
                    typeSpeed={80}
                    backSpeed={50}
                    loop= {true}
                />
                </div>
                <button className="bg-black text-white px-2 py-4 rounded-lg capitalize mt-5">get standed</button>
            </div>
        </div>
    </>
  )
}

export default Banner