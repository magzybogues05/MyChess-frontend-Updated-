import React from 'react'
import { useNavigate } from 'react-router-dom'


const Landing = () => {
    const navigate=useNavigate();
  return (
    <div className='h-full w-full'>
        <div className='h-full w-full pt-8'>
            <div className='h-full w-full grid grid-cols-1 gap-4 md:grid-cols-2'>
                <div className='flex justify-center'>
                    <img src='/chessBoard.png' className='max-h-25 max-w-25'></img>
                </div>
                <div className='pt-16'>
                    <div className='flex justify-center'>
                        <h1 className='text-4xl font-bold'>
                            Play Chess Online on the #2 Site!
                        </h1>
                    </div>
                    <div className='mt-12 flex justify-center'>
                        <button onClick={()=>{navigate('/game')}} className='px-8 py-6 text-2xl bg-green-500 hover:bg-green-700 text-white font-bold rounded'>
                            Play Online
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Landing
