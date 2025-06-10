import React from 'react'

const Navbar = () => {
  return (
      <div className="flex justify-between px-20 py-4 bg-blue-300">
          <p className='font-semibold'>Notes</p>
          <div >
              <ul className="flex font-semibold justify-around gap-10 ">
                  <li>About </li>
                  <li>Notes</li>
                  <li>Account</li>
                  <li>Login</li>
              </ul>
          </div>

      </div>
  )
}

export default Navbar
