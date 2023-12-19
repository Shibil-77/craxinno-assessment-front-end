import React from 'react'
import Button from '../common/Button'

const PersonalInformation = () => {
    return (
        <>

            <div className='flex justify-center py-5'>
                <div>


                    <div className='flex justify-center'>
                        <div className="inline-flex mt-2 xs:mt-0 gap-3">
                            <button className="flex items-center justify-center rounded-full px-4 h-10 w-10 text-base font-medium text-white bg-[#0075FF]  hover:bg-gray-90">
                                1
                            </button>
                            <button className="flex items-center justify-center rounded-full px-4 h-10 w-10 text-base font-medium text-white bg-gray-600  hover:bg-gray-90">
                                2
                            </button>
                        </div>
                    </div>
                    <div>
                        <h1 className='text-center font-sans text-xl font-semibold'>Create your account</h1>
                        <h3 className='text-center mt-3 text-primary'>Set-up your RentlyPass in as little as 2 minutes.</h3>
                    </div>

                    <div className='py-10 space-y-5'>
                        <div className='flex gap-3'>
                            <div className='w-3/12'>
                                <select id="countries" className="bg-gray-50 h-12 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option selected>Mr</option>
                                    <option value="US">United States</option>
                                    <option value="CA">Canada</option>
                                    <option value="FR">France</option>
                                    <option value="DE">Germany</option>
                                </select>
                            </div>

                            <div className="w-10/12">
                                <div className="relative w-full min-w-[200px] h-12">
                                    <input
                                        className="peer w-full h-full bg-transparent text-black text-opacity-40 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-[#000000] placeholder-shown:border-t-[#000000] placeholder-shown:border-opacity-10 in border focus:border-2 border-t-[#0075FF] focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-[#0075FF] focus:border-[#0075FF]"
                                        placeholder="" /><label
                                            className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-[#000000] leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-[#000000] transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:[#0075FF] before:border-[#0075FF] peer-focus:before:!border-[#0075FF] after:border-[#0075FF] peer-focus:after:!border-[#0075FF]">Full Name as per your passport
                                    </label>
                                </div>
                            </div>

                        </div>

                        <div className="w-full">
                            <div className="relative w-full min-w-[200px] h-12">
                                <input
                                    type='date'
                                    className="peer w-full h-full bg-transparent text-black font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-[#000000] placeholder-shown:border-t-[#000000] placeholder-shown:border-opacity-10 in border focus:border-2  focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] "
                                    placeholder="Date And  " /><label
                                        className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-[#000000] leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-[#000000] transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:[#0075FF]">
                                </label>
                            </div>
                        </div>

                        <div className="w-full">
                            <div className="relative w-full min-w-[200px] h-12">
                                <input
                                    className="peer w-full h-full bg-transparent text-black text-opacity-40 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-[#000000] placeholder-shown:border-t-[#000000] placeholder-shown:border-opacity-10 in border focus:border-2 border-t-[#0075FF] focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-[#0075FF] focus:border-[#0075FF]"
                                    placeholder=" " /><label
                                        className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-[#000000] leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-[#000000] transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:[#0075FF] before:border-[#0075FF] peer-focus:before:!border-[#0075FF] after:border-[#0075FF] peer-focus:after:!border-[#0075FF]">Email address
                                </label>
                            </div>
                        </div>

                        <div className="w-full">
                            <div className="relative w-full min-w-[200px] h-12">
                                <input
                                    className="peer w-full h-full bg-transparent text-black text-opacity-40 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-[#000000] placeholder-shown:border-t-[#000000] placeholder-shown:border-opacity-10 in border focus:border-2 border-t-[#0075FF] focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-[#0075FF] focus:border-[#0075FF]"
                                    placeholder=" " /><label
                                        className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-[#000000] leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-[#000000] transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:[#0075FF] before:border-[#0075FF] peer-focus:before:!border-[#0075FF] after:border-[#0075FF] peer-focus:after:!border-[#0075FF]">Email address
                                </label>
                            </div>
                        </div>

                        <div className='w-full'>
                            <textarea id="message" rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-100 focus:ring-blue-500 focus:border-blue-500 " placeholder="Write your thoughts here..."></textarea>
                        </div>

                    </div>
                    <div className='flex justify-center'>
                        <Button text='Save and continue' />
                    </div>

                </div>
            </div>
        </>
    )
}

export default PersonalInformation