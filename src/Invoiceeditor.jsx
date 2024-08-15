import React from 'react';

function Invoiceeditor() {
  return (
    <>
      <div className='flex flex-col min-h-screen bg-stone-300'>

        {/* Header */}
        <div className='bg-stone-700 h-[50px] flex justify-start items-center px-4 sm:px-6 md:px-8'>
          <h1 className='font-mono font-bold text-[16px] sm:text-[18px] md:text-[20px] text-white'>
            Invoice Modification
          </h1>
        </div>

       {/* Form Section */}
<div className='h-auto mx-[10px] sm:mx-[20px] md:mx-[30px] grid grid-cols-1 md:grid-cols-2 gap-[20px]'>

{/* Left Form */}
<div className='h-auto w-full'>
  <form>
    <label className='flex flex-col gap-[10px] text-[13px] sm:text-[14px] md:text-[15px] w-full'>
      Customer:
      <input type="text" className='rounded flex h-[40px] w-[300px] outline-0 border border-gray-500' />
      Address:
      <textarea className='bg-gray-300 flex h-[65px] rounded w-[300px] outline-0 border border-gray-500'></textarea>
      Invoice No:
      <input type="number" className='bg-gray-300 flex h-[40px] rounded w-[300px] outline-0 border border-gray-500' />
      Amount Paid:
      <input type="number" className='flex h-[40px] rounded w-[300px] outline-0 border border-gray-500' />
    </label>
  </form>
</div>

{/* Right Form */}
<div className='h-auto w-full '>
  <form>
    <label className='flex flex-col gap-[10px] text-[13px] sm:text-[14px] md:text-[15px] w-full'>
      Invoice Date:
      <input type="date" className='flex h-[40px] rounded w-[300px] border border-gray-500 outline-0' />
      Location:
      <input type="text" className='flex h-[40px] rounded w-[300px] border border-gray-500 outline-0'/>
      Authorised:
      <input type="text" className='flex h-[40px] rounded w-[300px] border border-gray-500 outline-0'/>
      Payment Type:
      <input type="text" className='flex h-[40px] rounded w-[300px] border border-gray-500 outline-0' />
      Account:
      <input type="text" className='flex h-[40px] rounded w-[300px] border border-gray-500 outline-0' />
    </label>
  </form>
</div>
</div>


        {/* Table Section */}
        <div className='w-full px-4 sm:px-6 md:px-8 py-4 overflow-x-auto'>
          <table className='table-auto w-full border-collapse'>
            <thead>
              <tr className='bg-stone-400 text-left'>
                <th className='text-black text-[13px] sm:text-[14px] md:text-[15px] p-2 border-b border-gray-300'>Item Name</th>
                <th className='text-black text-[13px] sm:text-[14px] md:text-[15px] p-2 border-b border-gray-300'>Description</th>
                <th className='text-black text-[13px] sm:text-[14px] md:text-[15px] p-2 border-b border-gray-300'>Qty</th>
                <th className='text-black text-[13px] sm:text-[14px] md:text-[15px] p-2 border-b border-gray-300'>Rate</th>
                <th className='text-black text-[13px] sm:text-[14px] md:text-[15px] p-2 border-b border-gray-300'>Discount</th>
                <th className='text-black text-[13px] sm:text-[14px] md:text-[15px] p-2 border-b border-gray-300'>Amount</th>
                <th className='p-2 border-b border-gray-300'>
                  <button className='bg-stone-800 w-[60px] sm:w-[70px] rounded text-white h-[30px] sm:h-[40px] text-[13px] sm:text-[14px] md:text-[15px]'>Print</button>
                </th>
              </tr>
            </thead>
            <tbody>
              {/* Row Input */}
              <tr className='hover:bg-stone-100'>
                <td className='p-2 border-b border-gray-300'>
                  <input type="text" placeholder='Item Name' className='w-full rounded border border-gray-300 px-2 py-1' />
                </td>
                <td className='p-2 border-b border-gray-300'>
                  <input type="text" placeholder='Description' className='w-full rounded border border-gray-300 px-2 py-1' />
                </td>
                <td className='p-2 border-b border-gray-300'>
                  <input type="number" placeholder='Qty' className='w-full rounded border border-gray-300 px-2 py-1' />
                </td>
                <td className='p-2 border-b border-gray-300'>
                  <input type="number" placeholder='Rate' className='w-full rounded border border-gray-300 px-2 py-1' />
                </td>
                <td className='p-2 border-b border-gray-300'>
                  <input type="number" placeholder='Discount' className='w-full rounded border border-gray-300 px-2 py-1' />
                </td>
                <td className='p-2 border-b border-gray-300'>
                  <input type="number" placeholder='Amount' className='w-full rounded border border-gray-300 px-2 py-1' />
                </td>
                <td className='p-2 border-b border-gray-300'>
                  <button className='bg-stone-800 w-full sm:w-auto px-4 py-2 rounded text-white text-[13px] sm:text-[14px] md:text-[15px] font-bold'>Add</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Invoiceeditor;
