import React from 'react';
import conference from '../assets/portfolio/conference-2.png';
import car from '../assets/portfolio/CarProject.png';
import planit from '../assets/portfolio/web1.png';

const Portfolio = () => {
    const portfolios = [
        {
            id: 1,
            src: conference,
            href: 'https://gitlab.com/IamYorye/fearless-frontend'
        },
        {
            id: 2,
            src: car,
            href: 'https://gitlab.com/IamYorye/carppointment'
        },
        {
            id: 3,
            src: planit,
            href: 'https://gitlab.com/planiteers/project-plan-it'
        },
    ];

    return (
        <div
            name="portfolio"
            className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
        >
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                        Portfolio
                    </p>
                    <p className="py-6">Check out some of my projects.</p>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
                    {portfolios.map(({ id, src, href }) => (
                        <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                            <img src={src} alt='' className='rounded-md duration-200 hover:scale-105' />
                            <div className='flex items-center justify-center'>
                                {/* Wrap the button in an anchor tag */}
                                <a href={href} target="_blank" rel="noopener noreferrer">
                                    <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">GitLab</button>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Portfolio;
