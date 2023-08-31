
const ExpertSection = () => {
  return (
    <div className="max-w-[1200px] mx-auto grid grid-cols-3 mt-20 mb-20">
        <div className="text-white md:col-span-1 col-span-3">
            <img className="md:w-[500px] w-[300px] mx-auto" src="https://cdn.pixabay.com/photo/2021/04/04/07/49/laptop-svg-6149345_1280.png" alt="random" />
        </div>
        <div className="md:col-span-2 bg-indigo-300 p-4 flex flex-col justify-evenly items-start col-span-3">
            <h1 className="font-bold text-2xl text-green-800 uppercase text-[18px] ">Learn from experts</h1>
            <p className="text-[16px] font-bold sm:py-5 text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas nihil perferendis cupiditate? Fugiat aliquid aliquam officia pariatur iste et fugit error consectetur, earum sequi molestiae.</p>
            <button className="bg-black text-white p-2 rounded-lg capitalize">get standed</button>
        </div>
    </div>
  )
}

export default ExpertSection