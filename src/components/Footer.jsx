import { BsFacebook,BsInstagram,BsTwitter,BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <>
        <div className="w-full p-10 bg-blue-800 ">
            <div className="max-w-1240px] mx-auto md:grid grid-cols-4 gap-10">
                <div className="flex flex-col col-span-1">
                    <h1 className="font-bold text-3xl">W3Cube Tech.</h1>
                    <p className="text-white text-justify mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, ullam! Aperiam libero consequuntur, voluptate nobis vitae, ratione saepe corrupti consectetur impedit minima et perferendis repellat quas doloribus in soluta laboriosam nostrum eveniet vel harum. Fugit eius vitae dicta, numquam, aliquid reiciendis doloribus consectetur harum, earum optio minima tenetur obcaecati sit.</p>
                    <div className="flex justify-around text-white mt-2 font-bold text-2xl">
                        <BsFacebook/>
                        <BsInstagram/>
                        <BsTwitter/>
                        <BsGithub/>
                    </div>
                </div>
                <div className="col-span-1 flex flex-col justify-center items-center">
                    <h3 className="font-bold text-xl mb-3">Solution</h3>
                    <ul className="text-white">
                        <ol>Analytics</ol>
                        <ol>Marketing</ol>
                        <ol>Commerce</ol>
                        <ol>Insights</ol>
                    </ul>
                </div>
                <div className="col-span-1 flex flex-col justify-center items-center">
                    <h3 className="font-bold text-xl mb-3">Solution</h3>
                    <ul className="text-white">
                        <ol>Analytics</ol>
                        <ol>Marketing</ol>
                        <ol>Commerce</ol>
                        <ol>Insights</ol>
                    </ul>
                </div>
                <div className="col-span-1 flex flex-col justify-center items-center">
                    <h3 className="font-bold text-xl mb-3">Solution</h3>
                    <ul className="text-white">
                        <ol>Analytics</ol>
                        <ol>Marketing</ol>
                        <ol>Commerce</ol>
                        <ol>Insights</ol>
                    </ul>
                </div>

            </div>
        </div>
    </>
  )
}

export default Footer