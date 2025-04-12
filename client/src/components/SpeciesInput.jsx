const SpeciesInput = ({species, setSpeciesId}) => {
   
   return (
      <>
      <label> Species:
         <select 
            name="species_id"
            onChange={(e) => setSpeciesId(e.target.value)}
         >
            <option value="">-- Select species --</option>
            {species.map(spec => (
               <option value={spec.id} key={spec.id}>{spec.name} </option>
            ))}
         </select>
        </label>
      </>
   )
}

export default SpeciesInput;