var soap = require('soap');
var url = 'https://wsconsulta2018.azurewebsites.net/captchaservice.asmx?WSDL';
var args = {
    'codSys': 'ef1b058bc386',
    'cui': '1957043550101',
    'fechaNacimiento': '1962-07-07',
};

function soapHttpTest(){
    soap.createClient(url, function(err, client) {
        if (err) {
            console.log(err);
        } else {
            if (err) {
                console.log(err);
            } else {
                //InsSujetoFotoFactura
                client.Transacciones1(args, function(err, result) {
                    console.log("Resultado: " + JSON.stringify(result));
                  
                });
            }
        }
    });
}




function soapHttpCaptcha(body){
     return new Promise(function(resolve, reject){ 
        soap.createClient(url, function(err, client) {
            if (err) {
                console.log(err);
                reject (err);
            } else {
                if (err) {
                    console.log(err);
                    reject(err);
                } else {
                    //InsSujetoFotoFactura
                    client.Transacciones1(body, function(err, result) {
                       // console.log("Resultado: " + JSON.stringify(result));
                      resolve(result);
                    });
                }
            }
        });
    });
    
}
function soapHttpLugarVotacion(body){
    return new Promise(function(resolve, reject){ 
       soap.createClient(url, function(err, client) {
           if (err) {
               console.log(err);
               reject (err);
           } else {
               if (err) {
                   console.log(err);
                   reject(err);
               } else {
                   //InsSujetoFotoFactura
                   client.ObtenerLugar1(body, function(err, result) {
                      // console.log("Resultado: " + JSON.stringify(result));
                     resolve(result);
                   });
               }
           }
       });
   });
}
module.exports.soapHttpCaptcha = soapHttpCaptcha;
module.exports.soapHttpLugarVotacion = soapHttpLugarVotacion;
module.exports.soapHttpTest = soapHttpTest;