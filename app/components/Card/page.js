import React from 'react'
import Link from 'next/link'

const Card = ({name , url , id}) => {
  return (
      <div key={id} className="card card-compact bg-base-100 w-[300px] h-auto shadow-xl">
  <figure>
    <img
      src={url}
      alt="logo" className='w-full h-auto'/>
  </figure>
  <div className="card-body p-0">
    <h2 className="card-title">{name}</h2>
    <div className="card-actions justify-end">
      <Link href={{
        pathname: '/creatememe',
        query: {
          url: url,
          id: id,
        }
      }}>
        <button className="btn btn-primary">Create Meme</button>
      </Link>
    </div>
  </div>
</div>
  )
}

export default Card
