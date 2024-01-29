import React from 'react'
import CryptoCard from './cryptoCard'
const cryptoList = ({coinsData}) => {
  return (
    <div>
        {coinsData.map((coins, index)=>{
          return(
            <CryptoCard 
            key={index} 
            image={coins.image} 
            price={coins.current_price} 
            name = {coins.name}/>
          )
        })}
    </div>
  )
}

export default cryptoList
