import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function Editcustomer() {
    const [values, setValues] = useState({
        name: '',
        count: '',
        Amount: ''
    });
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:3000/users/${id}`)
            .then(res => {
                const user = res.data;
                if (user) {
                    setValues({
                        name: user.name || '',
                        count: user.count || '',
                        Amount: user.Amount || '',
                    });
                } else {
                    console.log('User not found');
                }
            })
            .catch(err => console.log(err));
    }, [id]);

    const handleUpdate = (event) => {
        event.preventDefault();
        axios.put(`http://localhost:3000/users/${id}`, values)
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
                        <input className='rounded-2xl p-2 bg-gray-200 border-gray-100' type='text' name='name' value={values.name} placeholder='Name' onChange={e => setValues({ ...values, name: e.target.value })} />
                    </div>
                    <div className='flex flex-col p-1'>
                        <label htmlFor='name' className='text-start'>No of items:</label>
                        <input type='text' className='rounded-2xl p-2  bg-gray-200 border-gray-100' name='count' placeholder='count' value={values.count} onChange={e => setValues({ ...values, count: e.target.value })} />
                    </div>
                    <div className='flex flex-col p-1 mb-1'>
                        <label htmlFor='name' className='text-start'>Amount:</label>
                        <input type='text' className='rounded-2xl p-2  bg-gray-200 border-gray-100' name='Amount' placeholder='amount' value={values.Amount} onChange={e => setValues({ ...values, Amount: e.target.value })} />
                    </div>
                    <label className= ' block m-2 py-2 text-center bg-gray-600 rounded-2xl px-10 w-full py-1 cursor-pointer' onClick={handleUpdate}>Update</label>
                </form>
            </div>
        </div>
    );
}

export default Editcustomer;
