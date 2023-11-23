export default function MainContent(){
    return (
        <>
        <section className="max-w-5xl mx-auto flex flex-col md:flex-row items-start justify-between">
            <div className="md:w-2/5 w-full mb-16">
                <h2 className="text-5xl text-gray-800 font-bold md:font-semibold text-center md:text-start mb-6">What’s different about Manage?</h2>
                <p className="text-xl text-gray-600 md:text-start text-center mx-2 md:mx-0">
                Manage provides all the functionality your team needs, without 
                the complexity. Our software is tailor-made for modern digital 
                product teams.
                </p>
            </div>
            <div className="md:w-1/2 w-full">
                <div className="mx-2 md:mx-0">
                    <div className="mb-2 flex justify-between items-start">
                        <div className="">
                        <button className="px-6 py-2 rounded-full bg-orange-600 text-white font-semibold"> 01</button>
                        </div>
                        <div className="mx-6">
                        <h2 className="md:text-2xl text-lg mb-4 font-semibold text-gray-800">Track company-wide progress</h2>
                        <p className="text-md font-medium text-gray-600">
                        See how your day-to-day tasks fit into the wider vision. Go from 
                        tracking progress at the milestone level all the way done to the 
                        smallest of details. Never lose sight of the bigger picture again.
                        </p>
                        </div>
                    </div>
                    <div className="">
                    <div className="mb-2 flex justify-between items-start">
                        <div className="">
                        <button className="px-6 py-2 rounded-full bg-orange-600 text-white font-semibold"> 02</button>
                        </div>
                        <div className="mx-6">

                        <h2 className="md:text-2xl text-lg mb-4 font-semibold text-gray-800">
                        Advanced built-in reports
                        </h2>
                        <p className="text-md font-medium text-gray-600">
                        Set internal delivery estimates and track progress toward company 
                        goals. Our customisable dashboard helps you build out the reports 
                        you need to keep key stakeholders informed.
                        </p>
                        </div>
                    </div>
                    </div>
                    <div className="">
                    <div className=" flex justify-between items-start">
                        <div className="">
                        <button className="px-6 py-2 rounded-full bg-orange-600  text-white font-semibold">03</button>
                        </div>
                        <div className="mx-6">
                        <h2 className="md:text-2xl text-lg  mb-4 font-semibold text-gray-800"> Everything you need in one place
                        </h2>
                        <p className="text-md font-medium text-gray-600">
                        Stop jumping from one service to another to communicate, store files, 
                        track tasks and share documents. Manage offers an all-in-one team 
                        productivity solution..
                        </p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}