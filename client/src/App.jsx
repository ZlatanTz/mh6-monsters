import axios from 'axios'
import { useEffect, useState } from 'react'
import Form from  './components/Form'
import Monster from './components/Monster'

function App() {
  const [monsters, setMonsters] = useState([])
  const [species, setSpecies] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const fetchMonsters = async () => {
    try {
      console.log('Fetching monsters...'); // Log here

      const response = await axios.get('http://localhost:2501/monsters')
      setMonsters(response.data)
      setIsLoading(false)
    } catch(err){
      console.error(err)
      throw err
    }
  }

  const fetchSpecies = async () => {
    try{
       const response = await axios.get('http://localhost:2501/species')
       setSpecies(response.data)

    } catch(err) {
       console.error(err)
       throw err;
    }
 
 }

  useEffect(() => {
    fetchMonsters()
    fetchSpecies()
  }, [])

  const getSpeciesName = (species_id) => {
    const found = species.find(s => s.id === species_id)
    return found ? found.name : 'Unknown'
  }

 
  return (
    <>
      <Form onAddMonster={fetchMonsters} species={species}/>
      {isLoading ? (
        <p>Loading...</p>  
      ) : (
        monsters.map(monster => (
         <Monster key={monster.id}
          id={monster.id}
          name={monster.name}
          url={monster.image_url}
          speciesName= {getSpeciesName(monster.species_id)}
          speciesId= {monster.species_id}
          species={species}
          onUpdateMonster={fetchMonsters}
              />
        ))
      )}
    </>
  )
  
}

export default App
