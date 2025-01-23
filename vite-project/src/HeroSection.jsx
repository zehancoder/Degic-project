function HeroSec() {
    return (
        <>
            <section className="flex mx-auto lg:my-14 flex-col-reverse lg:flex-row items-center justify-between gap-8 py-16 lg:py-20 px-5 lg:px-16 container">
                <div className="flex-1 flex flex-col items-start gap-6">
                    <h1 className="text-4xl lg:text-6xl font-bold max-w-lg">Simply explained with illustrations </h1>
                    <p className="text-lg mt-3 lg:text-xl text-gray-500 max-w-lg">There are a lot of different components that will help you create the perfect look for your project</p>
                    <div className="flex gap-3 mt-3">
                        <button className="bg-[#5F62E2] hover:bg-blue-600 text-white font-semibold py-3 px-6 transition duration-300 rounded text-sm lg:text-lg">Get Started</button>
                        <button className="bg-indigo-100 font-semibold py-3 px-6 rounded transition duration-300 text-[#5F62E2] text-sm lg:text-lg">Learn More</button>
                    </div>
                </div>
                <div className="flex-1 flex items-center justify-center lg:items-end lg:justify-end">
                    <img className="w-5/6 md:max-w-lg h-auto" src="/hero1.png" alt="" />
                </div>
            </section>
        </>
    )
}
export default HeroSec