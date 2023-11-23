
export default function Hero(heroImage){
    return (
        <>
        <section className="max-w-5xl mx-auto mb-24 bg-image ">
        <div className="flex items-center justify-between flex-col-reverse md:flex-row">
            <div className="w-full md:w-1/2">
                     <h2 className="md:text-6xl md:text-start text-center text-gray-800 text-5xl font-semibold mb-6">
                     Bring everyone together to build better products.
                     </h2>
                     <p className="text-xl md:text-start text-center  text-gray-600 mb-6">
                    Manage makes it simple for software teams to plan day-to-day 
                    tasks while keeping the larger team goals in view.
                     </p>
                     <div className="flex items-center md:items-start md:justify-start justify-center ">
                        <button className="bg-orange-400 text-white rounded-full text-lg py-2 px-4 capitalize font-medium transition-all hover:bg-orange-500 hover:translate-x-2 hover:scale-75 hover:duration-300 hover:delay-200 ">get started</button>
                     </div>
            </div>
            <div className="w-full md:w-1/2">
                <img src={heroImage.illustration} alt="" className="" />
            </div>
        </div>
        </section>
        </>
    )
}

