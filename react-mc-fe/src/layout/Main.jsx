import React from 'react'
import Toast from '../components/Toast';

function Main() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 h-screen">
      <h1 className="text-2xl font-bold">Welcome to MyApp</h1>
      <p className="mt-4 text-gray-600">
        This is the main content area where you can add your application features.
      </p>
      <Toast />
    </div>
  )
}

export default Main
