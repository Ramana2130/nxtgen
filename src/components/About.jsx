import React from 'react'

const About = () => {
  return (
    <div>
      <div className="dark:bg-gray-100 dark:text-gray-800 shadow-lg my-2">
	<div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-50">
		<div className="flex items-center justify-between">
			<span className="text-sm dark:text-gray-600">Hey Guys,</span>
			<a rel="noopener noreferrer" href="#" className="px-2 py-1 font-bold rounded dark:bg-pink-600 dark:text-gray-50">NxtGeN</a>
		</div>
		<div className="mt-3">
			<a rel="noopener noreferrer" href="#" className="text-2xl font-bold hover:underline">About</a>
			<p className="mt-2">Welcome to NXTGEN, where innovation knows no bounds and creativity thrives! Our community is a dynamic hub for forward-thinkers, dreamers, and doers who are passionate about shaping the future. From tech enthusiasts to social changemakers, we come together to explore cutting-edge ideas, collaborate on groundbreaking projects, and empower each other to reach new heights. Join us on this exciting journey as we unlock the potential of tomorrow, today.</p>
		</div>
		<div className="flex items-center justify-between mt-4">
			<a rel="noopener noreferrer" href="#" className="hover:underline dark:text-pink-600">Read more</a>
			
		</div>
	</div>
</div>
    </div>
  )
}

export default About
