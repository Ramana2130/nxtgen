import React from "react";
import home from '../assets/Business_SVG.svg'

const Hero = () => {
  return (
    <div>
     <section className=" my-3 bg-pink-100 rounded-lg">
	<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 sm:grid grid-cols-2">
		<div className="flex flex-col justify-center p-6 text-center rounded-sm ">
			<h1 className="text-xl font-bold leading-none sm:text-6xl">Grow Your Business With 
				<span className="dark:text-pink-600"> NxtGeN </span>Community
			</h1>
			<p className="mt-6 mb-8 text-lg sm:mb-12">NXTGEN is a vibrant community of forward-thinkers, innovators,
				<br  className="hidden md:inline lg:hidden" />and creators shaping the future together. 
			</p>
      <p className="mb-8 text-pink-600 font-bold">Unleash Your Potential, Join NXTGEN</p>
			<div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-center">
				<a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded dark:bg-pink-600 dark:text-gray-50">Get Started</a>
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
