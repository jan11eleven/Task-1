'use client';
import { React, useState } from 'react';
import Customer from './Customer';

function Main() {
  const [customerList, setCustomerList] = useState([]);
  const [customerName, setCustomerName] = useState('');

  const handleInputCustomerName = (e) => {
    setCustomerName(e.target.value);
  };

  const handleSubmit = () => {
    setCustomerList([...customerList, customerName]);
  };

  return (
    <div className="flex flex-col items-center bg-slate-100 h-screen">
      <div className="flex justify-center mt-10">
        <input
          className="bg-slate-200 p-2 mr-10"
          type="text"
          onChange={handleInputCustomerName}
        />
        <button
          onClick={handleSubmit}
          className="bg-green-500 text-white p-2 rounded-md font-bold w-56"
        >
          Add Customer
        </button>
      </div>
      <ul>
        {customerList.map((customer) => (
          <Customer name={customer} />
        ))}
      </ul>
    </div>
  );
}

export default Main;
