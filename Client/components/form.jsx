'use client'
import React, { useState } from 'react';

export default function Form() {
    const [formData, setFormData] = useState({});

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const you = JSON.stringify(formData)
        console.log(you);
        try {
            const res = await fetch('http://localhost:5000/api/createEntry', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            const data = await res.json();
            console.log(data);
        } catch (err) {
            console.log(err);
        }
    };



    

    return (
        <div className='p-3 max-w-lg mx-auto my-5'>
            <form className='flex flex-col ' onSubmit={handleSubmit}>
                <label className='text-slate-500 font-semibold text-xl my-3'>
                    Name:
                    <input type="text" name="name" className='mx-2 border p-2 rounded-lg' onChange={handleChange} value={formData.name} />
                </label >
                <label className='text-slate-500 font-semibold text-xl my-3'>
                    Phone Number:
                    <input type="text" name="phoneNumber" className='mx-2 border p-2 rounded-lg ' onChange={handleChange} value={formData.phoneNumber} />
                </label>
                <label className='text-slate-500 font-semibold text-xl my-3'>
                    Email:
                    <input type="email" name="email" className='mx-2 border p-2 rounded-lg' onChange={handleChange} value={formData.email} />
                </label>
                <label className='text-slate-500 font-semibold text-xl my-3'>
                    Hobbies:
                    <input type="text" name="hobbies" className='mx-2 border p-2 rounded-lg' onChange={handleChange} value={formData.hobbies} />
                </label>
                <button type="submit" className='bg-slate-600 text-white p-3 rounded-lg my-3 uppercase hover:opacity-90 disabled:opacity-80'>Save</button>
            </form>

            <button type="button" className='bg-slate-600 text-white p-3 rounded-lg my-3 uppercase hover:opacity-90 disabled:opacity-80' onClick={handleClick}>Get Entries</button>
        </div>
    );
}
