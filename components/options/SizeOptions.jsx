import React from 'react'

export default function SizeOptions() {
    return (
        <div className=' '>
            <h1 className='text-2xl font-bold border-b-4'>
                Size Options
            </h1>
            <div className="form-control">
                <label className="label cursor-pointer">
                    <span className="label-text">Large</span>
                    <input type="radio" name="radio-10" className="radio checked:bg-black" />
                </label>
            </div>
            <div className="form-control">
                <label className="label cursor-pointer">
                    <span className="label-text">Medium</span>
                    <input type="radio" name="radio-10" className="radio checked:bg-black" />
                </label>
            </div>
            <div className="form-control">
                <label className="label cursor-pointer">
                    <span className="label-text">Small</span>
                    <input type="radio" name="radio-10" className="radio checked:bg-black" />
                </label>
            </div>
        </div>
    )
}
