import React from 'react'

export default function Button({
    children,
    type ='button',
    bgColor ,
    textColor = 'text-white',
    className = '',
    ...props
}) {

  const defaultBgColor = 'bg-blue-600'; // Default background color
  const appliedBgColor = bgColor !== undefined ? bgColor : defaultBgColor;

  return (
    <button type={type} className={`px-4 py-2 rounded-lg  ${className} ${appliedBgColor} ${textColor}`} {...props}>
        {children}
    </button> 
 )
}

