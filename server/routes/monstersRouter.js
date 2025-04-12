const express = require('express')
const queries = require('../db/queries/monsterQueries.js')

const router = express.Router()

router.route('/')
   .get(async (req, res) => {
      res.send(await queries.getAllMonsters())
   })
   .post(async (req, res) => {
      
      const {name, image_url, species_id} = req.body
      
      try {
         console.log('POST /monsters - Data received:', { name, image_url, species_id });     
         const newMonster = await queries.addMonster(name, image_url, species_id);         
         res.status(201).send(newMonster);
       } catch (err) {
         console.error('Error inserting monster:', err);            
         res.status(500).send('Error adding monster');
       }
   })

router.route('/:id')
   .get(async (req, res) => {
      res.send(await queries.getMonsterById(req.params.id))
   })
   .delete(async (req, res) => {
      res.send(await queries.deleteMonsterById(req.params.id))
   })
   .put(async (req, res) => {   
      const { name, image_url, species_id } = req.body;
      const { id } = req.params;
   
      try {
         const updated = await queries.updateMonsterById(Number(id), name, image_url, Number(species_id));
         res.send(updated);
      } catch (err) {
         console.error('❌ Error in PUT /monsters/:id:', err);
         res.status(500).send('Error updating monster');
      }
   })


module.exports = router
