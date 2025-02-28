"use client";

import React from 'react'

type Props = {
    label: string;
    message: string;
}

const SectionHeader = (props: Props) => {
    console.log(props)
  return (
      <div>
          <p className='text-sm font-semibold'>{props.label}</p>
          <p className='text-sm font-light'>{props.message}</p>
      </div>
  )
}

export default SectionHeader;