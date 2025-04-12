import axios from 'axios'
import { useState } from 'react'
import SpeciesInput from './SpeciesInput'
const Monster = ({id, name, url, speciesName, species, onUpdateMonster }) => {

   const [isUpdating, setIspdating] = useState(false)

   const [newSpeciesId, setNewSpeciesId] = useState(null)
   const [newName, setNewName] = useState('')

   const handleUpdate = async (e) => {
      e.preventDefault()
      try{
         const res = await axios.put(`http://localhost:2501/monsters/${id}`,
            {id, name: newName, image_url: url, species_id: newSpeciesId}
         )
         console.log('Monster Updated:', res.data);
         setIspdating(false)
         onUpdateMonster()
         
      } catch (err){
         console.error(err)
      }
     
   }

   const handleDelete = async (e) => {
      e.preventDefault()
      try{
         const res = await axios.delete(`http://localhost:2501/monsters/${id}`)
         console.log('Monster Deleted', res.data);
         onUpdateMonster()
      } catch(err){
         console.error(err)
      }
   }

   return (
      <div>
        {isUpdating ? (
          <div>
            <img src={url} alt={name} />
            <form onSubmit={handleUpdate}>
               <label> Name:
                  <input
                  value={name}
                     type="text"
                     name='name'
                     onChange={(e) => setNewName(e.target.value)}
                  />
               </label>
               <SpeciesInput species={species} setSpeciesId={setNewSpeciesId}/>
               <button type='submit'>Confirm</button>
            </form>
          </div>
        ) : (
          <>
            <img src={url} alt={name} />
            <p>{name}</p>
            <p>{speciesName}</p>
            <button onClick={() => setIspdating(true)}>Update</button>
            <button onClick={handleDelete}>Delete</button>
          </>
        )}
      </div>
    )
}

export default Monster;