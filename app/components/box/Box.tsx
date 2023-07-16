import React from 'react'
import { twMerge } from 'tailwind-merge'

type BoxProps = {
    children:React.ReactNode,
    className?:string
}

const Box = (props: BoxProps) => {
  return (
    <div className={twMerge(`
      bg-neutral-900 rounded-lg h-fit w-full
    `, props.className)}>
        {props.children}
    </div>
  )
}
export default Box;