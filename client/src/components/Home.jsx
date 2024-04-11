import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
function Home() {
  const [data, setData] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3000/users')
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  }, []);

  const handleCustomerClick = (customer) => {
    setSelectedCustomer(customer);
  };

  const handleDelete = (id) =>{
    const confirm = window.confirm("Would you like to Delete");
    if(confirm){
        axios.delete(`http://localhost:3000/users/${id}`)
        .then(res => {
            location.reload();
        })
        .catch(err => console.log(err));
    }
  }
  return (
    <div className=' p-4 bg-gray-600 h-screen'>
        <Header />
        <div className='grid bg-blue-500 grid-cols-5 justify-content-center align-items-center bg-gray-200 vh-100 gap-2 overflow-hidden rounded-xl mt-6'>
            <div className='col-span-3 m-1 rounded-xl'>  
                <div className='rounded bg-gray-100 shadow-md p-4 overflow-auto' style={{ maxHeight: '520px' }}>
                <table className="table-fixed">
                    <thead>
                    <tr className='cursor-pointer border-b border-gray-500' style={{ cursor: 'pointer' }}>
                        <th style={{ width: '20%' }}>Customer Name</th>
                        <th style={{ width: '20%' }}>Count</th>
                        <th style={{ width: '30%' }}>Amount</th>
                        <th style={{ width: '10%' }}>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {data.map((customer, index) => (
                        <tr key={index} onClick={() => handleCustomerClick(customer)} className='cursor-pointer hover:bg-gray-200' style={{ cursor: 'pointer' }}>
                        <td className='pl-1 text-center'>{customer.name}</td>
                        <td className='pl-1 text-center'>{customer.count}</td>
                        <td className='pl-1 text-center'>{customer.Amount}</td>
                        <td className='text-center p-2 flex gap-3'>
                            <Link to={`/edit/${customer.id}`} className='flex cursor-pointer bg-gray-100' style={{ cursor: 'pointer' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                </svg>
                                Edit
                            </Link>
                            <label onClick={e => handleDelete(customer.id)} className='flex cursor-pointer' style={{ cursor: 'pointer' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                </svg>
                                Delete
                            </label>
                        </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                </div>
            </div>
            <div className='col-span-2 rounded-2xl my-2 mx-1 text-center bg-gray-300' style={{ height: '100%' }}>
                <div className='rounded bg-gray-300 p-4 flex-grow' style={{ height: '400px' }}>
                    {!selectedCustomer ? (
                        <div className='justify-center m-10 p-10'>
                            <h2 className='m-10 p-10 font-bold'>No customer selected</h2>
                        </div>
                    ) : (
                        <div className='flex flex-col justify-center' style={{ height: '100%' }}>
                            <h2 className='font-bold'>Selected Customer Details</h2>
                            <p className='font-color-gray-200'><span className='text-start font-bold'>Name:</span> {selectedCustomer.name}</p>
                            <p><span className='font-bold'>Count: </span>{selectedCustomer.count}</p>
                            <p><span className='font-bold'>Amount: </span>{selectedCustomer.Amount}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
        <Footer />
    </div>
  );
}

export default Home;
