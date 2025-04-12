const pool = require('../pool/pool')

const getAllSpecies = async () => {
   try {
      const result = await pool.query('SELECT * FROM SPECIES')
      return result.rows;
   }catch (err) {
      console.error('error getting monsters', err)
      throw err
   }
}

module.exports = {getAllSpecies}