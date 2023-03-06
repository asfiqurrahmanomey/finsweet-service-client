import React from 'react';
import { Link } from 'react-router-dom';
import icon from '../../../assets/icons/Icons Combine 1.png'
import "./Hero.css"
const Hero = () => {
    return (
        <div>
            <header class="bg-white dark:bg-gray-900">
                <div class="container px-6 py-16 mx-auto">
                    <div class="items-center lg:flex">
                        <div class="w-full lg:w-1/2">
                            <div class="lg:max-w-lg">
                                <h1 class="text-3xl text-gray-800 dark:text-white lg:text-7xl font-extrabold">Become The Hero <br /> Of Your Own Story</h1>

                                <p class="mt-3 text-gray-600 dark:text-gray-400">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed <br /> diam nonumy eirmod tempor invidunt ut labore et dolore <br /> magna aliquyam erat.</p>

                                <div class="flex flex-col mt-6 space-y-3 lg:space-y-0 lg:flex-row">
                                    <input id="email" type="text" class="subscribe-input bg-indigo-100" placeholder="Enter Your Email Id" />
                                    <button class="subscribe-button px-5 py-2 mt-0 text-sm tracking-wider text-white transition-colors duration-300 transform bg-indigo-700  lg:w-auto lg:mx-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                                        Subscribe
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div class="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                            <img class="w-full h-full max-w-md" src={icon} alt="email illustration vector art" />
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Hero;