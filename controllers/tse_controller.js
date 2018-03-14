var services = require('../providers/httpService');
var soap = require('../providers/soapService');

controller ={};
let resp = {
    STATUS: 0,
    USRMENSAJE: ""
}
controller.getCaptcha = function(req, res, next){
    console.log(req.body);
    try{
        console.log("CONSUMIENDO XML");
        var args = {
            'codSys': req.body.codSys,
            'cui': req.body.cui,
            'fechaNacimiento': req.body.fechaNacimiento,
        };
        soap.soapHttpCaptcha(args).then(respuesta => {
            res.json(respuesta.Transacciones1Result);
        }).catch(err => {
            resp.USRMENSAJE=err.message;
            res.json(resp);
        })
      
    }catch(ex){
        resp.USRMENSAJE=err.message;
        res.json(resp);
    }
}
controller.getLugarVotacion = function(req, res, next){
    console.log(req.body);
    try{
        console.log("CONSUMIENDO XML");
        var args = {
            'nTransac': req.body.nTransac,
            'Guid': req.body.guid,
            'id': req.body.codSys,
        };
        soap.soapHttpLugarVotacion(args).then(respuesta => {
            res.json(respuesta.ObtenerLugar1Result);
        }).catch(err => {
            resp.USRMENSAJE=err.message;
            res.json(resp);
        })
    }catch(ex){
        resp.USRMENSAJE=err.message;
        res.json(resp);
    }
}

module.exports = controller;