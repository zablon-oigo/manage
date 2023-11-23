export default  function Header({images}){
    return(
        <>
        <header className="p-10 relative ">
             <nav className="max-w-5xl mx-auto flex items-center justify-between">
                <div className="">
                    <a href=""><img src={images.logo} alt="" /></a>
                </div>
                <button className="md:hidden block">
                    <img src={images.hamburger}  alt="" className="" />
                </button>
                <div className="space-x-4 md:block hidden">
                    <a href="" className="text-md font-semibold text-gray-800 transition-all hover:border-b-2 hover:border-gray-600 hover:duration-300 hover:delay-200  hover:text-gray-600">Pricing</a>
                    <a href="" className="text-md font-semibold text-gray-800 transition-all hover:border-b-2 hover:border-gray-600 hover:duration-300 hover:delay-200  hover:text-gray-600">Product</a>
                    <a href="" className="text-md font-semibold text-gray-800 transition-all hover:border-b-2 hover:border-gray-600 hover:duration-300 hover:delay-200  hover:text-gray-600">About Us</a>
                    <a href="" className="text-md font-semibold text-gray-800 transition-all hover:border-b-2 hover:border-gray-600 hover:duration-300 hover:delay-200  hover:text-gray-600">Careers</a>
                    <a href="" className="text-md font-semibold text-gray-800 transition-all hover:border-b-2 hover:ease-in  hover:border-gray-600 hover:duration-700 hover:delay-200  hover:text-gray-600"> Community</a>
                </div>
               <div className="md:block hidden">
                <button className="bg-orange-400 hover:bg-orange-500 transition-all hover:duration-300 hover:delay-200 hover:translate-x-4 hover:scale-125 rounded-full px-6 py-2 text-white font-semibold">Get Started</button>
               </div>
             </nav>
          <section className="absolute top-70 w-full right-0 bg-white"></section>
        </header>
    
        </>
    );
}