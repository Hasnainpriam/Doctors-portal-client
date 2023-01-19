import React from 'react';
import img from '../../../src/assets/Untitled design (1).png'

const About = () => {
  return (
    <div>
    <section className="text-gray-600 body-font">
        <div className="container px-5 py-8 mx-auto flex flex-col">
            <div className="lg:w-5/6 mx-auto">
                <div className="flex flex-col sm:flex-row mt-10">
                    <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                        <div className="w-40 h-40 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                            <img alt="content" className="object-cover object-center h-45 w-45 rounded-full" src={img} />
                        </div>
                        <div className="flex flex-col items-center text-center justify-center">
                            <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">Ibrahim Hasnine</h2>
                            <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                            <p className="text-base">Hi,Im Ibrahim Hasnine .Im from IIUC .Recently Im learning MERN stack..</p>
                        </div>
                    </div>
                    <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                        <p className="leading-relaxed text-lg mb-4">Hi,Im Ibrahim Hasnine .Im from IIUC .Recently Im learning MERN stack..a philomath of web and app development. My core skill is based on JavaScript. As an Engineering student, I'm fond of exploring new technologies and inventions. Beside study, I want to contribute a lot to Web and App development. So, here I'm available for developing and exploring more and more.As a philomath, Programming, Development, Data Science in brief Computer Science is my dream and passion. I want to explore and discover Computer Science by myself. That's why I've chosen the path of self learning method to explore it.</p>

                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
  );
};

export default About;