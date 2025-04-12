import {  useState } from "react"
import axios from 'axios'
import SpeciesInput from "./SpeciesInput";

const Form = ({onAddMonster, species}) => {
   
   const [name, setName] = useState('');
   const [speciesId, setSpeciesId] = useState(null);



   const formatImageUrl = (name) => {
      const formattedName = name.toLowerCase().replace(/\s+/g, '_');
      return `https://monsterhunterwilds.wiki.fextralife.com/file/Monster-Hunter-Wilds/${formattedName}_monsters_mhwilds_wiki_guide200px.png`
   }

   const handleSubmit = async (e) => {
      e.preventDefault()
      const imageUrl = formatImageUrl(name)

      try {
         const res = await axios.post('http://localhost:2501/monsters', {
            name,
            image_url: imageUrl,       
            species_id: Number(speciesId),     
          });
          onAddMonster();
          console.log('Monster created:', res.data);
      } catch (err) {
         console.error(err)
         throw err;
      }

   }

   return(
      <form onSubmit={handleSubmit}>
         <label> Name:
            <input
               type="text"
               name='name'
               onChange={(e) => setName(e.target.value)}
            />
         </label>
        <SpeciesInput species={species} setSpeciesId={(e) => setSpeciesId(e.target.value)}/>
        <button type="submit">Add monster</button>
      </form>
   )
}

export default Form;