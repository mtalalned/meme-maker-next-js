import React from 'react'
import Card from './components/Card/page.js'

const Home = async () => {
  
  const data = await fetch('https://api.imgflip.com/get_memes')
  const response = await data.json()
  console.log(response.data.memes);
  
  return (
    <>
    <h1 className="bg-success text-center text-white font-bold text-4xl p-3">MEME MAKER</h1>
    <div className='flex flex-wrap gap-5 justify-center items-center bg-current p-5'>
        {response.data.memes.map ((item , index)=> {
          return <Card name = {item.name} url = {item.url} id={item.id}/>
        })}
    </div>
    </>
  )
}

export default Home

