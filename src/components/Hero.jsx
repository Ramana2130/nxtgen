import React from "react";
import home from '../assets/home.png'

const Hero = () => {
  return (
    <div>
     <section className="dark:bg-gray-100 dark:text-gray-800 my-3">
	<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
		<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
			<h1 className="text-2xl font-bold leading-none sm:text-5xl">Welcome To Our
				<span className="dark:text-pink-800">NxtGeN</span>Community
			</h1>
			<p className="mt-6 mb-8 text-lg sm:mb-12">NXTGEN is a vibrant community of forward-thinkers, innovators,
				<br  className="hidden md:inline lg:hidden" />and creators shaping the future together. 
			</p>
      <p className="mb-8 text-pink-800 font-bold">Unleash Your Potential, Join NXTGEN</p>
			<div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
				<a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded dark:bg-pink-800 dark:text-gray-50">Get Started</a>
				<a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-800">Learn More</a>
			</div>
		</div>
		<div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
			<img src={home} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
		</div>
	</div>
</section>
    </div>
  );
};

export default Hero;
