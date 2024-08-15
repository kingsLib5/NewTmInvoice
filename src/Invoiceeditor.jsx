import React from 'react';

function Invoiceeditor() {
  return (
    <>
      <div className='flex flex-col h-[120vh] bg-stone-300'>

        
        <div className='bg-stone-700 h-[50px] flex justify-start items-center m-[20px] sm:m-[30px] md:m-[40px]'>
          <h1 className='font-mono font-bold text-[16px] sm:text-[18px] md:text-[20px] text-white p-[10px] sm:p-[15px] md:p-[20px]'>
            Invoice Modification
          </h1>
        </div>

        
        <div className=' h-auto sm:h-[70%] mx-[20px] sm:mx-[30px] md:mx-[50px] grid grid-cols-1 md:grid-cols-2'>
          
          <div className='h-auto sm:h-[100%] flex'>
            <form>
              <label className='flex flex-col ml-[10px] sm:ml-[15px] md:ml-[20px] mt-[10px] gap-[10px] text-[13px] sm:text-[14px] md:text-[15px]'>
                Customer:
                <input type="text" className='ml-[10px] rounded flex h-[40px] w-[300px] sm:w-[320px] md:w-[350px] outline-0 border border-black' />
                Address:
                <textarea className='ml-[10px] bg-stone-400 flex h-[65px] rounded w-[300px] sm:w-[320px] md:w-[350px] outline-0 border border-black'></textarea>
                Invoice No:
                <input type="number" className='ml-[10px] bg-stone-400 flex h-[40px] rounded w-[300px] sm:w-[320px] md:w-[350px] outline-0 border border-black' />
                Amount Paid:
                <input type="number" className='ml-[10px] flex h-[40px] rounded w-[300px] sm:w-[320px] md:w-[350px] outline-0 border border-black ' />
              </label>
            </form>
          </div>

          
          <div className='h-auto sm:h-[100%] flex'>
            <form>
              <label className='flex flex-col ml-[30px] sm:ml-[150px] md:ml-[250px] mt-[10px] gap-[10px] text-[13px] sm:text-[14px] md:text-[15px]'>
                Invoice Date:
                <input type="date" className='ml-[10px] flex h-[40px] rounded w-[300px] sm:w-[320px] md:w-[350px] border border-black outline-0' />
                Location:
                <input type="text" className='ml-[10px] flex h-[40px] rounded w-[300px] sm:w-[320px] md:w-[350px] border border-black outline-0'/>
                Authorised:
                <input type="text" className='ml-[10px] flex h-[40px] rounded w-[300px] sm:w-[320px] md:w-[350px] border border-black outline-0'/>
                Payment Type:
                <input type="text" className='ml-[10px] flex h-[40px] rounded w-[300px] sm:w-[320px] md:w-[350px] border border-black outline-0' />
                Account:
                <input type="text" className='ml-[10px] flex h-[40px] rounded w-[300px] sm:w-[320px] md:w-[350px] border border-black outline-0' />
              </label>
            </form>
          </div>
        </div>

        
        <div className=' h-auto sm:h-[100%] flex justify-center items-baseline mt-[20px] ml-[50px] mr-[50px] overflow-x-auto'>
          <table className='table-auto w-full border-collapse '>
            <thead>
              <tr className='bg-stone-400 text-left'>
                <th className='text-black text-[13px] sm:text-[14px] md:text-[15px] p-[10px] border-b border-gray-300'>Item Name</th>
                <th className='text-black text-[13px] sm:text-[14px] md:text-[15px] p-[10px] border-b border-gray-300'>Description</th>
                <th className='text-black text-[13px] sm:text-[14px] md:text-[15px] p-[10px] border-b border-gray-300'>Qty</th>
                <th className='text-black text-[13px] sm:text-[14px] md:text-[15px] p-[10px] border-b border-gray-300'>Rate</th>
                <th className='text-black text-[13px] sm:text-[14px] md:text-[15px] p-[10px] border-b border-gray-300'>Discount</th>
                <th className='text-black text-[13px] sm:text-[14px] md:text-[15px] p-[10px] border-b border-gray-300'>Amount</th>
                <th className='text-black p-[10px] border-b border-gray-300'>
                  <button className='bg-stone-800 w-[60px] sm:w-[70px] rounded text-[13px] sm:text-[14px] md:text-[15px] text-white h-[30px] sm:h-[40px] border-none'>Print</button>
                </th>
              </tr>
            </thead>
            <tbody>
             
              <tr className='hover:bg-stone-100'>
                <td className='p-[10px] border-b border-gray-300'>
                  <input type="text" placeholder='Item Name' className='w-full rounded border border-gray-300 px-[10px] py-[5px]' />
                </td>
                <td className='p-[10px] border-b border-gray-300'>
                  <input type="text" placeholder='Description' className='w-full rounded border border-gray-300 px-[10px] py-[5px]' />
                </td>
                <td className='p-[10px] border-b border-gray-300'>
                  <input type="number" placeholder='Qty' className='w-full rounded border border-gray-300 px-[10px] py-[5px]' />
                </td>
                <td className='p-[10px] border-b border-gray-300'>
                  <input type="number" placeholder='Rate' className='w-full rounded border border-gray-300 px-[10px] py-[5px]' />
                </td>
                <td className='p-[10px] border-b border-gray-300'>
                  <input type="number" placeholder='Discount' className='w-full rounded border border-gray-300 px-[10px] py-[5px]' />
                </td>
                <td className='p-[10px] border-b border-gray-300'>
                  <input type="number" placeholder='Amount' className='w-full rounded border border-gray-300 px-[10px] py-[5px]' />
                </td>
                <td className='p-[10px] border-b border-gray-300'>
                  <button className='bg-stone-800 w-full sm:w-auto px-[15px] py-[5px] rounded text-[13px] sm:text-[14px] md:text-[15px] font-bold text-white border-none'>Add</button>
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
