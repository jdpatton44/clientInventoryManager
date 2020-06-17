const mongoose = require('mongoose');
const Mailing = mongoose.model('mailings');

module.exports = (app) => {  
    app.get(`/api/mailing`, async (req, res) => {
        let mailings = await Mailing.find();
        return res.status(200).send(mailings);
      });
    
      app.post(`/api/mailing`, async (req, res) => {
        let mailing = await Mailing.create(req.body);
        return res.status(201).send({
          error: false,
          mailing
        })
      })
    
      app.put(`/api/mailing/:id`, async (req, res) => {
        const {id} = req.params;
    
        let mailing = await Mailing.findByIdAndUpdate(id, req.body);
    
        return res.status(202).send({
          error: false,
          mailing
        })
    
      });
    
      app.delete(`/api/mailing/:id`, async (req, res) => {
        const {id} = req.params;
    
        let mailing = await Mailing.findByIdAndDelete(id);
    
        return res.status(202).send({
          error: false,
          mailing
        })
    
      })
}