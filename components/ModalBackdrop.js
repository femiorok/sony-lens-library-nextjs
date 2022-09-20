import React from 'react'

const ModalBackdrop = ({ toggleStockModal }) => {
  return (
    <div className='fixed inset-0 w-screen h-[100rem] bg-orange-800/25' onClick={toggleStockModal}></div>
  )
}

export default ModalBackdrop