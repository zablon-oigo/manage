export default function Testimonial({avatar}){
    
    return (
        <>
        <section className="my-6 ">
            <h2 className="text-6xl font-semibold  text-center text-gray-800 my-24"> What they’ve said</h2>
            <div className="flex items-center md:flex-row flex-col  gap-4 justify-between">
            
                <div className="bg-gray-100 p-2 rounded-xl ">
                    <div className="flex flex-col items-center relative">
                        <img src={avatar.Anisha} alt="" className="absolute -top-12 ring-2 ring-green-500 mb-4 rounded-full h-24 w-24 hover:-translate-y-2 hover:opacity-90 hover:transition-all hover:ease-in-out hover:scale-150 hover:duration-700 hover:delay-300" />
                       <div className="my-14">
                       <h2 className="text-xl  font-semibold text-gray-800 text-center mb-4">Anisha Li</h2>
                        <p className="text-center px-2 text-gray-600 font-medium text-lg">
                        “Manage has supercharged our team’s workflow. The ability to maintain 
                        visibility on larger milestones at all times keeps everyone motivated.”
                        </p>
                       </div>
                    </div>

                </div>
                <div className="bg-gray-100 p-2 rounded-xl ">
                    <div className="flex flex-col items-center relative">
                        <img src={avatar.Ali} alt="" className="absolute -top-12 ring-2 ring-green-500 mb-4 rounded-full h-24 w-24 hover:-translate-y-2 hover:opacity-90 hover:transition-all hover:ease-in-out hover:scale-150 hover:duration-700 hover:delay-300" />
                       <div className="my-14">
                       <h2 className="text-xl  font-semibold text-gray-800 text-center mb-4"> Ali Bravo</h2>
                        <p className="text-center text-gray-600 font-medium text-lg">
                        “We have been able to cancel so many other subscriptions since using 
                        Manage. There is no more cross-channel confusion and everyone is much 
                        more focused.”
                        </p>
                       </div>
                    </div>

                </div>
                <div className="bg-gray-100 p-2 rounded-xl ">
                    <div className="flex flex-col items-center relative">
                        <img src={avatar.Richard} alt="" className="absolute -top-12 ring-2 ring-green-500 mb-4 rounded-full h-24 w-24 hover:-translate-y-2 hover:opacity-90 hover:transition-all hover:ease-in-out hover:scale-150 hover:duration-700 hover:delay-300" />
                       <div className="my-14">
                       <h2 className="text-xl  font-semibold text-gray-800 text-center mb-4">Richard Watts</h2>
                        <p className="text-center text-gray-600 font-medium text-lg">
                        “Manage allows us to provide structure and process. It keeps us organized 
                        and focused. I can’t stop recommending them to everyone I talk to!”
                        </p>
                       </div>
                    </div>

                </div>
                <div className="bg-gray-100 p-2 rounded-xl hidden">
                    <div className="flex flex-col items-center relative">
                        <img src={avatar.Shanai} alt="" className="absolute -top-12 ring-2 ring-green-500 mb-4 rounded-full h-24 w-24 hover:-translate-y-2 hover:opacity-90 hover:transition-all hover:ease-in-out hover:scale-150 hover:duration-700 hover:delay-300" />
                       <div className="my-14">
                       <h2 className="text-xl  font-semibold text-gray-800 text-center mb-4">Shanai Gough</h2>
                        <p className="text-center text-gray-600 font-medium text-lg">
                        “Their software allows us to track, manage and collaborate on our projects 
                        from anywhere. It keeps the whole team in-sync without being intrusive.”
                        </p>
                       </div>
                    </div>

                </div>
                
            </div>
            <div className="my-40 flex justify-center">
                <button className="px-6 py-3 rounded-full bg-orange-500 text-white font-medium hover:bg-orange-700hover:transition-all hover:duration-700 hover:-translate-y-4 hover:scale-150 hover:delay-300 ">  Get Started</button>
            </div>
        </section>
        </>
    );
}