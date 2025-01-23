import { Button } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
function CardFunc() {
    const Cards = [
        {
            id: 1,
            image: "/bags.png",
            headings: "Make myspace your best designed space",
            para: "A lot of different components that will help you create the perfect look for your project",
            btn: "Design"
        },
        {
            id: 2,
            image: "/khora.png",
            headings: "My company culture has changed today",
            para: "A lot of different components that will help you create the perfect look for your project",
            btn: "3D illustrations"
        },
        {
            id: 3,
            image: "/tomato.png",
            headings: "Professionals in craft! All products were super great",
            para: "A lot of different components that will help you create the perfect look for your project",
            btn: "Development"
        },
    ]

    return (
        <>
            <div className="lg:p-12 p-4">
                <div className="container mx-auto lg:gap-5 gap-2 lg:p-6">
                    <div className="flex lg:flex-row flex-col items-center justify-between ">
                        <div className="mb-5">
                        <h1 className="lg:text-5xl text-3xl font-semibold">Get more from our blog</h1>
                        <p className="lg:text-xl text-lg mt-4">There are a lot of different components that will <br /> help you create the perfect look for your project</p>
                        </div>
                        <Button variant="contained" sx={{fontSize: "17px", padding: "10px 12px", marginTop: "20px"}}>Explore All <ArrowForwardIcon sx={{marginLeft: "8px"}}/></Button>
                    </div>
                    <div className="grid grid-cols-12 lg:gap-8 gap-3 lg:p-3 lg:mt-12 mt-5 ">
                        {Cards.map((val) => (
                            <div className="lg:col-span-4 col-span-12 max-w-xl mx-auto lg:mx-0" key={val.id}>
                                <div className="lg:p-8 p-0 bg-gray-100 rounded-2xl h-96 flex items-center justify-center">
                                    <img src= {val.image} alt="" />
                                </div>
                                <div className="p-3">
                                    <h1 className="lg:text-3xl text-xl font-medium">{val.headings}</h1>
                                    <p className="lg:text-xl text-lg mt-3 text-gray-500">{val.para}</p>
                                    <button className="bg-green-300 p-2 text-sm rounded-sm mt-3 text-[#2AB691]">{val.btn}</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
export default CardFunc;