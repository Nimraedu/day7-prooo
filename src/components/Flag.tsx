import React from 'react'
import type { Flag  } from '../App'

type Flagprops={
    flag: Flag;
}
const Flag = ({flag}: Flagprops) => {
  return (
    <div>
      <h1 className='text-4xl mb-4-'>{flag.name}</h1>
      <div className={`flex ${flag.horizontal ? 'flex-row' : 'flex-col'} w-96 h-60 border border-gray-300`}>
      <div className= {'flex-1 ${flag.color1}' } ></div>
      <div className={'flex-1 ${flag.color2}'}></div>
      <div className={'flex-1 ${flag.color3}'}></div>
      </div>
    </div>
  )
}

export default Flag
