import React from 'react'

export const LayoutOne = ({ children }: any) => <div className='flex-fill'>{children}</div>

export const LayoutTwo = ({ children }: any) => (
  <div>
    <h2>Layout Two</h2>
    {children}
  </div>
)
