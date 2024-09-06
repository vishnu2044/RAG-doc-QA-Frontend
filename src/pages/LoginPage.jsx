import React from 'react'
import LoginForm from '../components/login/LoginForm'

const LoginPage = () => {
  return (
      <div className="bg-gray-200 h-screen flex items-center justify-center p-4 dark:bg-slate-800">
        <div className="bg-white p-6 shadow-lg rounded-xl w-96 dark:bg-slate-100">
            <div className="text-2xl text-blue-800 font-bold capitalize text-center mb-4">
              <h3>welcome back!</h3>
            </div>
            <LoginForm />
        </div>
      </div>
  )
}

export default LoginPage
