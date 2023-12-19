"use client"
import React, { useState } from 'react'
import Button from '../common/Button';

const SignUp = () => {
    const [isPasswordVisibleOne, setIsPasswordVisibleOne] = useState(true);

    function togglePasswordVisibilityOne() {
        setIsPasswordVisibleOne((prevState: Boolean) => !prevState);
    }

    const [isPasswordVisible, setIsPasswordVisible] = useState(true);

    function togglePasswordVisibility() {
        setIsPasswordVisible((prevState: Boolean) => !prevState);
    }

    return (
        <div className='lg:w-3/12 w-full'>
            <div>
                <h1 className='text-center font-sans text-xl font-semibold'>Create your account</h1>
                <h3 className='text-center mt-3 text-primary'>Set-up your RentlyPass in as little as 2 minutes.</h3>
            </div>
            <div className='my-10'>
                <h1>Contact details</h1>
                <div className='space-y-3'>
                    <div className="w-full">
                        <div className="relative w-full min-w-[200px] h-12">
                            <input
                                className="peer w-full h-full bg-transparent text-[#0075FF] font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-[#000000] placeholder-shown:border-t-[#000000] placeholder-shown:border-opacity-10 in border focus:border-2 border-t-[#0075FF] focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-[#0075FF] focus:border-[#0075FF]"
                                placeholder=" " /><label
                                    className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-[#000000] leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-[#000000] transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:[#0075FF] before:border-[#0075FF] peer-focus:before:!border-[#0075FF] after:border-[#0075FF] peer-focus:after:!border-[#0075FF]">Email address
                            </label>
                        </div>
                    </div>

                    <div className="w-full">
                        <div className="relative w-full min-w-[200px] h-12">
                            <input
                                type='number'
                                className="peer w-full h-full bg-transparent text-[#0075FF] font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-[#000000] placeholder-shown:border-t-[#000000] placeholder-shown:border-opacity-10 in border focus:border-2 border-t-[#0075FF] focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-[#0075FF] focus:border-[#0075FF]"
                                placeholder=" " /><label
                                    className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-[#000000] leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-[#000000] transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:[#0075FF] before:border-[#0075FF] peer-focus:before:!border-[#0075FF] after:border-[#0075FF] peer-focus:after:!border-[#0075FF]">Mobile number
                            </label>
                        </div>
                    </div>

                    <h1>Set a password</h1>

                    <div className="w-full">
                        <div className="relative w-full min-w-[200px] h-12">
                            <input
                                type={isPasswordVisibleOne ? "password" : "text"}
                                className="peer w-full h-full bg-transparent text-[#0075FF] font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-[#000000] placeholder-shown:border-t-[#000000] placeholder-shown:border-opacity-10 in border focus:border-2 border-t-[#0075FF] focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-[#0075FF] focus:border-[#0075FF]"
                                placeholder=" " /><label
                                    className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-[#000000] leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-[#000000] transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:[#0075FF] before:border-[#0075FF] peer-focus:before:!border-[#0075FF] after:border-[#0075FF] peer-focus:after:!border-[#0075FF]">Create a password
                            </label>
                            <button
                                className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-600"
                                onClick={togglePasswordVisibilityOne}
                            >
                                {isPasswordVisibleOne ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-5 h-5"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-5 h-5"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>

                    <div className="w-full">
                        <div className="relative w-full min-w-[200px] h-12">
                            <input
                                type={isPasswordVisible ? "password" : "text"}
                                className="peer relative w-full h-full bg-transparent text-[#0075FF] font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-[#000000] placeholder-shown:border-t-[#000000] placeholder-shown:border-opacity-10 border focus:border-2 border-t-[#0075FF] focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-[#0075FF] focus:border-[#0075FF]"
                                placeholder=" " /><label
                                    className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-[#000000] leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-[#000000] transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:[#0075FF] before:border-[#0075FF] peer-focus:before:!border-[#0075FF] after:border-[#0075FF] peer-focus:after:!border-[#0075FF]">Confirm your password
                            </label>
                            <button
                                className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-600"
                                onClick={togglePasswordVisibility}
                            >
                                {isPasswordVisible ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-5 h-5"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-5 h-5"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                    <h3 className='text-center mt-3 text-primary'>We need a password to keep your information safe. But don’t worry, we’ll also send your custom RentlyPass URL via email.</h3>
                    <div className='flex justify-center'>
                    <Button text='Create your account'/>
                    </div>
                    <h3 className='text-center mt-3 text-primary'> By clicking ‘Create your account’, you are agreeing to our Terms & Conditions and Privacy Policy.</h3>


                </div>
            </div>
        </div>
    )
}

export default SignUp