import React from 'react'
import Button from '@/components/common/Button'
import Header from '@/components/layout/Header'
export function about() {
  return (
    <div>
      <Header />
        
        <button
        className="medium bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        type="button">
          Cancel
          </button>
          <Button size={'small'} shape={'rounded-sm'} />
    </div>
  )
}

export default about