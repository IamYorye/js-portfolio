import React from 'react'

const About = () => {
    return (
        <div
            name="about"
            className="w-full h-fit bg-gradient-to-b from-gray-800 to-black text-white"
        >
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-fit">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                        About
                    </p>
                </div>
                <p className='text-xl mt-5'>
                    I'm a skilled software engineer with experience in Python and Javascript, and plenty of experience in utilizing frameworks like React, Django and Node.js. I'm a quick learner and a very collaborative individual who works closely with both my team and clients to create efficient, highly scalable, and user-friendly applications that deal with day to day life. Let's start working towards easier living with the power of tech!
                </p>

                <br />

                <p className="text-xl">
                    Inspired by not only the advancements in technology we've made over the years, but having that love for technology at a young age, whether it were my hand held games, gaming consoles, smart phones and eventually my favorite of all, the computer.  I'm excited to not only innovate but collaborate with others in an environment I've been around my whole life, but ready to see what the future as held in store for me.
                </p>
            </div>
        </div>
    )
}

export default About
