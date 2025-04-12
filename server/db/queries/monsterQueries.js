const pool = require('../pool/pool')

const getAllMonsters = async () => {
   try {
      const result = await pool.query('SELECT * FROM MONSTERS ORDER BY id')
      return result.rows;
   }catch (err) {
      console.error('error getting monsters', err)
      throw err
   }
}


const addMonster = async (name, image_url, species_id) => {
   const query = 'INSERT INTO monsters (name, image_url, species_id) VALUES ($1, $2, $3) RETURNING *'
   try {
      const result = await pool.query(query, [name, image_url, species_id])
      return result.rows[0];
   } catch(err){
      console.error('error inserting monster', err)
      throw err
   }
}

const getMonsterById = async (id) => {
   const query = 'SELECT * FROM monsters WHERE id = $1'
   try {
     const result = await pool.query(query , [id])
     return result.rows[0]
   } catch(err){
      console.error('error getting monster', err)
      throw err
   }
}

const updateMonsterById = async (id, name, image_url, species_id) => {
   const query = 'UPDATE monsters SET name = $1, image_url = $2, species_id = $3 WHERE id = $4 RETURNING *'
   try {
     const result = await pool.query(query , [name, image_url, species_id, id])
     return result.rows[0]
   } catch(err){
      console.error('error updating monster', err)
      throw err
   }
}


const deleteMonsterById = async (id) => {
   const query = 'DELETE FROM monsters WHERE id = $1 RETURNING *'
   try {
     const result = await pool.query(query , [id])
     return result.rows[0]
   } catch(err){
      console.error('error deleting monster', err)
      throw err
   }
}

module.exports = {
   getAllMonsters,
   addMonster, 
   getMonsterById,
   updateMonsterById,
   deleteMonsterById
}