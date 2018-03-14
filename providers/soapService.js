var soap = require('soap');
var url = 'https://wsconsulta2018.azurewebsites.net/captchaservice.asmx?WSDL';
var args = {
    'codSys': 'ef1b058bc386',
    'cui': '1957043550101',
    'fechaNacimiento': '1962-07-07',
};

function soapHttp(){
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
module.exports.soapHttp = soapHttp;