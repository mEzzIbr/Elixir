import React from 'react';

export default function Modal(props) {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <>
      <button
        className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Open regular modal
      </button>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Modal Title
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                  {props.text}
                  </p>

                  <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
              <label className="block text-sm">
                <span className="text-gray-700 dark:text-gray-400">Icon left</span>
                <div className="relative text-gray-500 focus-within:text-purple-600 dark:focus-within:text-purple-400">
                  <input className="block w-full pl-10 mt-1 text-sm text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input" placeholder="Jane Doe"/>
                  <div className="absolute inset-y-0 flex items-center ml-3 pointer-events-none">
                   
                  </div>
                </div>
              </label>

              <label className="block mt-4 text-sm">
                <span className="text-gray-700 dark:text-gray-400">Icon right</span>
                <div className="relative text-gray-500 focus-within:text-purple-600 dark:focus-within:text-purple-400">
                  <input className="block w-full pr-10 mt-1 text-sm text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input" placeholder="Jane Doe"/>
                  <div className="absolute inset-y-0 right-0 flex items-center mr-3 pointer-events-none">
                    
                  </div>
                </div>
              </label>
            </div>

                  <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
              <label className="block text-sm">
                <span className="text-gray-700 dark:text-gray-400">Icon left</span>
                <div className="relative text-gray-500 focus-within:text-purple-600 dark:focus-within:text-purple-400">
                  <input className="block w-full pl-10 mt-1 text-sm text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input" placeholder="Jane Doe"/>
                  <div className="absolute inset-y-0 flex items-center ml-3 pointer-events-none">
               
                  </div>
                </div>
              </label>

              <label className="block mt-4 text-sm">
                <span className="text-gray-700 dark:text-gray-400">Icon right</span>
                <div className="relative text-gray-500 focus-within:text-purple-600 dark:focus-within:text-purple-400">
                  <div className="absolute inset-y-0 right-0 flex items-center mr-3 pointer-events-none">
                 
                  </div>
                </div>
              </label>
            </div>


                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Save Changes
                  </button>
                </div>

                


              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}