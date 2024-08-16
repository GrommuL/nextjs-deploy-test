'use client'

import { useState } from 'react'

const CategoriesPage = () => {
  const [active, setActive] = useState(false)
  return (
    <div className='h-full w-full bg-slate-700'>
      <button className='text-yellow-300' onClick={() => setActive((prev) => !prev)}>
        click
      </button>
      {active && <span className='text-orange-500'>ACTIVE</span>}
    </div>
  )
}
export default CategoriesPage
