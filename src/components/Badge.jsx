import React from 'react'

const Badge = ({className, badgeText}) => {
  return (
    <div className={` px-[30px] py-[12px] bg-black text-white text-sm${className}`}>{badgeText}</div>
  )
}

export default Badge