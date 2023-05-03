import React from 'react'
import { Link, useRouteError,} from 'react-router-dom'

const ErrorPage = () => {
  const { error, status } = useRouteError()
  return (
    <section className='flex items-center h-screen p-16  text-gray-900'>
        
      <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
        
        
        <div className='max-w-md text-center'>
        <div>
            <img src="https://img.freepik.com/free-photo/yellow-triangle-warning-sign-symbol-danger-caution-risk-traffic-icon-background-3d-rendering_56104-1156.jpg?w=900&t=st=1683151056~exp=1683151656~hmac=ec334edda25b80528f5f86065163181b8affb2b124c1dfe03aea749b07159f3c" alt="" />
        </div>
          <h2 className='mb-8 font-extrabold text-5xl text-gray-600'>
            <span className='sr-only'>Error</span> {status || 404}
          </h2>
          <p className='text-2xl font-semibold md:text-3xl mb-8'>
            {error?.message}
          </p>
          <Link
            to='/'
            className='px-8 py-3 font-semibold rounded bg-amber-400 text-gray-900'
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ErrorPage
