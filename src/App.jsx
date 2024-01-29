import { useEffect, useState } from 'react'
import axios from 'axios'
import CryptoList from './components/cryptoList'
import Pagination from './components/pagination'

function App() {
  const [coinsData, setCoinsData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(10);


  useEffect(()=>{
    const fetchData = async()=>{
      
      const response = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&per_page=50");

      setCoinsData(response.data)
    } 
    fetchData()
  },[])
console.log(coinsData)

const lastIndex = currentPage * postPerPage;
const firstIndex = lastIndex - postPerPage;
const currentPost = coinsData.slice(firstIndex, lastIndex)
  return (
    <>
      <h2>CRYPTO APP</h2>
      <CryptoList coinsData = {currentPost}/>
      <Pagination 
      currentPage = {currentPage}
      setCurrentPage = {setCurrentPage}
      postPerPage = {postPerPage}
      totalPost = {coinsData.length}
      />
    </>
  )
}

export default App
