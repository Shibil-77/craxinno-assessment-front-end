import React from 'react'


const Button = (props:any) => {
    return (
        <div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10 rounded">
                {props?.text}
            </button>
        </div>
    )
}

export default Button