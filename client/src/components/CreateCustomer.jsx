import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function CreateCustomer() {
    const [values, setValues] = useState({
        name: '',
        count: '',
        Amount: ''
    });

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:3000/users', values)
            .then(res => {
                console.log(res);
                navigate('/');
            })
            .catch(err => console.log(err));
    };

    return (
        <div className='flex justify-center items-center h-screen bg-gray-400'>
            <div className='w-96 bg-gray-100 border border-gray-400 bf-white shadow px-5 pt-3 pb-5 rounded-2xl'>
                <form className='bg-gray-100 p-4 rounded-2xl'>
                    <div className='flex flex-col p-1'>
                        <label htmlFor='name' className='text-start'>Name:</label>
                        <input className='rounded-2xl p-2 bg-gray-200 border-gray-100' type='text' name='name' placeholder='Name' onChange={e => setValues({ ...values, name: e.target.value })} />
                    </div>
                    <div className='flex flex-col p-1'>
                        <label htmlFor='name' className='text-start'>No of items:</label>
                        <input type='text' className='rounded-2xl p-2 bg-gray-200 border-gray-100' name='count' placeholder='Count' onChange={e => setValues({ ...values, count: e.target.value })} />
                    </div>
                    <div className='flex flex-col p-1 mb-1'>
                        <label htmlFor='name' className='text-start'>Amount:</label>
                        <input type='text' className='rounded-2xl p-2 bg-gray-200 border-gray-100' name='Amount' placeholder='Amount' onChange={e => setValues({ ...values, Amount: e.target.value })} />
                    </div>
                    <label className='block m-2 py-2 text-center bg-gray-600 rounded-2xl px-10 w-full py-1 cursor-pointer' onClick={handleSubmit}>Submit</label>
                </form>
            </div>
        </div>
    );
}

export default CreateCustomer;
