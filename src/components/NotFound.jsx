import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
  const navigate = useNavigate()
  return (
    <>
      <h1 style={{ fontSize: '50px' }}> 404 The page is NOT FOUND</h1>
      <button
        style={{ fontSize: '30px', background: 'red' }}
        onClick={() => navigate('/', { replace: true })}
      >
        Go to Start page
      </button>
    </>
  )
}

export default NotFound
