import { useEffect, useState } from 'react'
import './App.css'
import Cards from './Components/Cards'
import { fetchData } from './dataFetch'
function App() {
  const [data, setData] = useState({})
  useEffect(() => {
    //   const data =
    fetchData()
      .then((res) => setData(res))
      .catch((err) => console.log(err))
  }, [])
  return (
    <div className="app">
      <Cards data={data} />
    </div>
  )
}

export default App
