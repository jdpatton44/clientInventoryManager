const mongoose = require('mongoose');
const Client = mongoose.model('clients');

module.exports = (app) => {  
    app.get(`/api/client`, async (req, res) => {
        let clients = await Client.find();
        return res.status(200).send(clients);
      });
    
      app.post(`/api/client`, async (req, res) => {
        let client = await Client.create(req.body);
        return res.status(201).send({
          error: false,
          client
        })
      })
    
      app.put(`/api/client/:id`, async (req, res) => {
        const {id} = req.params;
    
        let client = await Client.findByIdAndUpdate(id, req.body);
    
        return res.status(202).send({
          error: false,
          client
        })
    
      });
    
      app.delete(`/api/client/:id`, async (req, res) => {
        const {id} = req.params;
    
        let client = await Client.findByIdAndDelete(id);
    
        return res.status(202).send({
          error: false,
          client
        })
    
      })
}