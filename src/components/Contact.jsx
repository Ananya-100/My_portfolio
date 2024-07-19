// ContactMe.js
import React from 'react';

const Contact = () => {
    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="w-full max-w-lg p-8 bg-white rounded-lg shadow-md">
                <h2 className="text-3xl font-bold mb-6 text-center text-blue-800">Contact Me</h2>
                <form action="https://api.web3forms.com/submit" method="POST" className="space-y-4">
                    <input type="hidden" name="access_key" value="faee4931-4ea1-4fb3-bab1-dbbd93c4b6de"></input>
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder='Your name'
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder='Your mail'
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows="4"
                            placeholder='Your message'
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            required
                        ></textarea>
                    </div>
                    <div className="text-center">
                        <button
                            type="submit"
                            className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;
