import { Button } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
function SecTwo() {
    return (
        <>
            <div className="bg-gray-50">
            <div className="grid grid-cols-12 container mx-auto lg:py-28 py-6">
                <div className="lg:col-span-6 col-span-12 py-2">
                    <div className="flex items-center justify-evenly">
                        <div className="text-center bg-white lg:p-8 p-4 rounded ">
                            <img className="mx-auto lg:w-3/5" src="/save.png" alt="" />
                            <h2 className="lg:text-xl text-lg font-medium mt-2">Management</h2>
                            <p className="md:text-lg text-sm mt-3">Software platform for running <br /> your new internet business</p>
                        </div>
                        <div className="text-center bg-white lg:p-8 p-4 rounded ">
                            <div className="p-2 bg-gray-100 rounded-full h-32 w-32 flex items-center justify-center mx-auto">
                            <img className="mx-auto lg:w-3/5" src="/game.png" alt="" />
                            </div>
                            <h2 className="lg:text-xl text-lg font-medium mt-2">Entertainment</h2>
                            <p className="md:text-lg text-sm mt-3">Software platform for running <br /> your new internet business</p>
                        </div>
                        
                    </div>
                    <div className="flex items-center justify-evenly mt-5">
                        <div className="text-center bg-white lg:p-8 p-4 rounded ">
                            <img className="mx-auto lg:w-3/5" src="/camera.png" alt="" />
                            <h2 className="lg:text-xl text-lg font-medium mt-2">Marketing</h2>
                            <p className="md:text-lg text-sm mt-3">Software platform for running <br /> your new internet business</p>
                        </div>
                        <div className="text-center bg-white lg:p-8 p-4 rounded ">
                            <img className="mx-auto lg:w-3/5" src="/wathch.png" alt="" />
                            <h2 className="lg:text-xl text-lg font-medium mt-2">References</h2>
                            <p className="md:text-lg text-sm mt-3">Software platform for running <br /> your new internet business</p>
                        </div>
                        
                    </div>
                    
                </div>
                <div className="lg:col-span-6 col-span-12 lg:pl-6 p-3 relative lg:h-auto h-[580px] lg:mt-0 mt-12">
                    <h1 className="lg:text-6xl text-3xl font-semibold leading-[70px]">The quickest way <br /> to create modern <br /> presentation</h1>
                    <p className="lg:text-2xl text-gray-500 text-lg lg:mt-8 mt-5">Best software platform for running an internet <br /> business. We build the most powerful and <br /> flexible tools for internet commerce.</p>
                    <Button variant="text" sx={{backgroundColor: "#5F62E226", fontSize: "17px", padding: "16px", marginTop: "25px", borderRadius: "15px"}}>Explore All <ArrowForwardIcon sx={{marginLeft: "5px", fontSize: "24px"}}/></Button>
                    <div className="absolute bottom-2 left-8">
                        <p className="text-lg text-gray-400">Follw Us</p>
                        <div className="flex items-center gap-3 cursor-pointer mt-5">
                            <img src="/face.png" alt="" />
                            <img src="/ins.png" alt="" />
                            <img src="/two.png" alt="" />
                        </div>
                    </div>
                </div> 
            </div>
            </div>
        </>
    )
}
export default SecTwo