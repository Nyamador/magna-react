import React from 'react'

function LoginPage(){
    return (
        <section className="text-gray-700 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
          <div className="lg:w-2/6 md:w-1/2 bg-gray-200 rounded-lg p-8 flex flex-col md:ml-auto md:mr-auto w-full mt-10 md:mt-0" data-children-count="2">
            <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Login</h2>
            <input className="bg-white rounded border border-gray-400 focus:outline-none focus:border-black text-base px-4 py-2 mb-4" placeholder="Email" type="email" />
            <input className="bg-white rounded border border-gray-400 focus:outline-none focus:border-black text-base px-4 py-2 mb-4" placeholder="Password" type="password" />
            <button className="text-white bg-black border-0 py-2 px-8 focus:outline-none rounded text-lg">Login</button>
            <p className="text-xs text-gray-500 mt-3 ml-auto mr-auto">Need an account? Sign Up Here.</p>
          </div>
        </div>
      </section>
    );
}


export default LoginPage;