import React from 'react'

const UserDetails = ({ user }:{ user: any}) => {

  return (
    <div className='bg-slate-300 rounded-md px-5 py-4 mt-5'>
      <div className='flex'>
        <img src={user.image ? user.image : '/avatar.png'} className='w-10 rounded-full' alt="Foto usuario"  referrerPolicy="no-referrer" />
        <div className='ml-2'>
          <p className='text-xs font-bold'>{user.name}</p>
          <span className='text-xs mb-1 italic'>{user.email}</span>
        </div>
      </div>
    </div>
  )
}

export default UserDetails