import React from 'react'

const cryptoCard = ({image, name, price}) => {
  return (
    <>
    <div>
      <img src={image} alt={name} />
    </div>
    <div>
      <h2>{name}</h2>
      <h3>${price.toLocaleString()}</h3>
    </div>
    </>
  )
}

export default cryptoCard
