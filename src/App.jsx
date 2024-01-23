
import { useEffect, useState } from 'react'
import Header from './components/Header'
import axios from 'axios'

function App() {
  const [data, setData] = useState([])
  const [searchedMovie, setSearchedMovie] = useState([])

  useEffect(() => {
    getData();
  }, [])

  const getData = async () => {
    const res = await axios.get("https://swapi.dev/api/films/?format=json")
    console.log(res.data.results)
    setData(res?.data?.results)
    setSearchedMovie(res?.data?.results)
  }


  return (
    <Header data={data} searchedMovie={searchedMovie} setSearchedMovie={setSearchedMovie} />
  )
}

export default App
