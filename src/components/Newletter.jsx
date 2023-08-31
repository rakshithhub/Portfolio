
const Newletter = () => {
  return (
    <>
        <div className=" bg-indigo-300 w-full p-10 mb-20">
            <div className="  max-w-[1240px] py-10 mx-auto grid grid-cols-2">
                <div className="p-4 md:col-span-1 col-span-2">
                    <h1 className="font-bold text-white text-3xl">Want to learn latest I.T skills?</h1>
                    <p className="font-bold text-white text-x">Sign up to our newletter and stay up to date</p>
                </div>
                <div className="col-span-2 md:col-span-1 p-4">
                    <input type="text" placeholder="Eamil" className="p-2 mr-2 border-none outline-none text-slate-400" 
                    />
                    <button className="bg-black text-white  capitalize p-2 ">get standed</button>
                    <p className="text-2xl text-white font-bold">We can bout the protect your <span className="text-black block ">Privacy Policy</span></p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Newletter;