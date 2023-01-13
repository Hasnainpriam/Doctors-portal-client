import React from 'react';
import united from '../../../assets/unt.153b969f2fa1799337aa.png'
import applo from '../../../assets/apollo-hospitals-logo-D404E82528-seeklogo.com.9db49f1ac1d9e820eda6.png'
import square from '../../../assets/squar.e7afe0013f834fcd0a94.png'
import ibns from '../../../assets/IBN-SINA-LOGO-removebg-preview.5690ff83d8cd1e53e9ea.png'
import lbd from '../../../assets/squar.e7afe0013f834fcd0a94.png'
import ehd from '../../../assets/logo_EHD.400bd036f4f5907c2a67.png'



const Hospitals = () => {
  return (
<div className='lg:px-20 mt-32'>
            <div className="bg-white py-6 sm:py-8 lg:py-12">
                <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
                    <div className="flex flex-col lg:flex-row lg:justify-between items-center mb-4 md:mb-8">
                        <h2 className="text-primary text-2xl lg:text-3xl font-bold text-center mb-2 lg:mb-0">Trusted by the best</h2>

                        <p className="max-w-md text-gray-400 text-center lg:text-right">Filler text is dummy text which has no meaning however looks very similar to real text.</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 rounded-lg gap-4 lg:gap-6">

                        <div className="h-16 sm:h-32 flex justify-center items-center bg-gray-100 text-gray-400 rounded-lg p-4">
                            <img src={united} className='h-20 grayscale' alt="" />
                        </div>

                        <div className="h-16 sm:h-32 flex justify-center items-center bg-gray-100 text-gray-400 rounded-lg p-4">
                            <img src={square} className='h-8 grayscale' alt="" />
                        </div>

                        <div className="h-16 sm:h-32 flex justify-center items-center bg-gray-100 text-gray-400 rounded-lg p-4">
                            <img src={applo} className='h-20 grayscale' alt="" />
                        </div>

                        <div className="h-16 sm:h-32 flex justify-center items-center bg-gray-100 text-gray-400 rounded-lg p-4">
                            <img src={ibns} className='h-20 grayscale' alt="" />
                        </div>

                        <div className="h-16 sm:h-32 flex justify-center items-center bg-gray-100 text-gray-400 rounded-lg p-4">
                            <img src={lbd} className='h-6 grayscale' alt="" />
                        </div>

                        <div className="h-16 sm:h-32 flex justify-center items-center bg-gray-100 text-gray-400 rounded-lg p-4">
                            <img src={ehd} className='h-20 grayscale' alt="" />
                        </div>


                    </div>
                </div>
            </div>
        </div>
  );
};

export default Hospitals;