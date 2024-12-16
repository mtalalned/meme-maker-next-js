"use client"

import { useSearchParams } from 'next/navigation'
import React, { useRef, useState } from 'react'

const Creatememe = () => {  
  
    const searchParams = useSearchParams()
    const id = searchParams.get('id')
    const url = searchParams.get('url')
    const input1 = useRef()
    const input2 = useRef()
    const [imgURL , setImgUrl] = useState(null)

    const CreateMeme = async (event) => {
        event.preventDefault()
        const data = await fetch(`https://api.imgflip.com/caption_image?template_id=${id}&username=mtalalned&password=NEDaccount1234&text0=${input1.current?.value}&text1=${input2.current?.value}`)
        const response = await data.json()
        setImgUrl(response.data.url)
        input1.current.value = ''
        input2.current.value = ''
    }


    return (
    
    
    <div className='flex justify-center items-center fixed top-0 left-0 right-0 bottom-0 bg-current'>
      <div className='w-[400px] h-[500px]'>
        <img src={imgURL ? imgURL : url} alt="logo" className='w-full h-full'/>
      </div>
      <div className='w-[500px]'>
        <form onSubmit={CreateMeme} className='flex flex-col jusitfy-center items-center gap-5'>
            <input
                type="text"
                placeholder="Type here"
                className="input input-bordered input-primary w-full max-w-xs" ref={input1}/>
                
            <input
                type="text"
                placeholder="Type here"
                className="input input-bordered input-primary w-full max-w-xs" ref={input2}/>
                
            <button type='submit' className="btn btn-accent">Done</button>
        </form>
      </div>
    </div>
  )
}

export default Creatememe
