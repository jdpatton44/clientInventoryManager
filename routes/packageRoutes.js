const mongoose = require('mongoose');
const Package = mongoose.model('packages');

module.exports = (app) => {  
    app.get(`/api/package`, async (req, res) => {
        let packages = await Package.find();
        return res.status(200).send(packages);
      });
    
      app.post(`/api/package`, async (req, res) => {
        let package = await Package.create(req.body);
        return res.status(201).send({
          error: false,
          package
        })
      })
    
      app.put(`/api/package/:id`, async (req, res) => {
        const {id} = req.params;
    
        let package = await Package.findByIdAndUpdate(id, req.body);
    
        return res.status(202).send({
          error: false,
          package
        })
    
      });
    
      app.delete(`/api/package/:id`, async (req, res) => {
        const {id} = req.params;
    
        let package = await Package.findByIdAndDelete(id);
    
        return res.status(202).send({
          error: false,
          package
        })
    
      })
}