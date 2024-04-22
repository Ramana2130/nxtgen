import React from 'react'
import weather from '../assets/weather.png'
import quiz from '../assets/quiz.jpg'
import car from '../assets/car.jpg'
import fish from '../assets/fish.jpg'

const Project = () => {
  return (
    <section id='projects' className="py-6 sm:py-12 dark:bg-gray-100 dark:text-gray-800 my-3">
	<div className="container p-6 mx-auto space-y-8">
		<div className="space-y-2 text-center">
			<h2 className="text-3xl font-bold">Our Projects</h2>
			<p className="font-serif text-sm dark:text-gray-600">Check Out Some of Our Works</p>
		</div>
		<div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
			<article className="flex flex-col dark:bg-gray-50">
				<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
					<img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src={weather} />
				</a>
				<div className="flex flex-col flex-1 p-6">
					<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
					<a rel="noopener noreferrer" href="https://ramana2130.github.io/Weather-App/" className="text-xs tracking-wider uppercase hover:underline dark:text-pink-600">Weather App</a>
					<h3 className="flex-1 py-2 text-lg font-semibold leading-snug">This is Our Weather App</h3>
					<div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600">
						<span>Tailwind Css, React Js</span>
						<span>2.1K views</span>
					</div>
				</div>
			</article>
			<article className="flex flex-col dark:bg-gray-50">
				<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
					<img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src={quiz} />
				</a>
				<div className="flex flex-col flex-1 p-6">
					<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
					<a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline dark:text-pink-600">Quiz</a>
					<h3 className="flex-1 py-2 text-lg font-semibold leading-snug">This is Our Quiz App</h3>
					<div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600">
						<span>Tailwind Css, JavaScript</span>
						<span>2.2K views</span>
					</div>
				</div>
			</article>
			<article className="flex flex-col dark:bg-gray-50">
				<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
					<img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src={car} />
				</a>
				<div className="flex flex-col flex-1 p-6">
					<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
					<a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline dark:text-pink-600">Car Repair Booking App</a>
					<h3 className="flex-1 py-2 text-lg font-semibold leading-snug">This is Our Car Repair Booking App</h3>
					<div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600">
						<span>React Js using Material UI</span>
						<span>2.3K views</span>
					</div>
				</div>
			</article>
			<article className="flex flex-col dark:bg-gray-50">
				<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
					<img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src={fish} />
				</a>
				<div className="flex flex-col flex-1 p-6">
					<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
					<a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline dark:text-pink-600">Fish Order App</a>
					<h3 className="flex-1 py-2 text-lg font-semibold leading-snug">This is Our Fish Order App Using MERN Stack</h3>
					<div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600">
						<span>MERN Stack</span>
						<span>2.4K views</span>
					</div>
				</div>
			</article>
		</div>
	</div>
</section>
  )
}

export default Project