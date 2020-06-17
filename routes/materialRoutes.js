const mongoose = require('mongoose');
const Material = mongoose.model('materials');

module.exports = (app) => {  
    app.get(`/api/material`, async (req, res) => {
        let materials = await Material.find();
        return res.status(200).send(materials);
      });
    
      app.post(`/api/material`, async (req, res) => {
        let material = await Material.create(req.body);
        return res.status(201).send({
          error: false,
          material
        })
      })
    
      app.put(`/api/material/:id`, async (req, res) => {
        const {id} = req.params;
    
        let material = await Material.findByIdAndUpdate(id, req.body);
    
        return res.status(202).send({
          error: false,
          material
        })
    
      });
    
      app.delete(`/api/material/:id`, async (req, res) => {
        const {id} = req.params;
    
        let material = await Material.findByIdAndDelete(id);
    
        return res.status(202).send({
          error: false,
          material
        })
    
      })
}