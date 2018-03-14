var services = require('../providers/httpService');
var soap = require('../providers/soapService');

controller ={};

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
            res.json(err);
        })
      
    }catch(ex){
        var respuesta = {
            "respuesta": "Test Failed by "+ex.message
        };
        return res.json(respuesta)
    }
}
controller.getLugarVotacion = function(req, res, next){
    console.log(req.body);
    try{
        console.log("CONSUMIENDO XML");
        var args = {
            'nTransac': req.body.transacion,
            'Guid': req.body.codigoCapcha,
            'id': req.body.codSys,
        };
        soap.soapHttpLugarVotacion(args).then(respuesta => {
            res.json(respuesta.Transacciones1Result);
        }).catch(err => {
            res.json(err);
        })
      
    }catch(ex){
        var respuesta = {
            "respuesta": "Test Failed by "+ex.message
        };
        return res.json(respuesta)
    }
}

module.exports = controller;