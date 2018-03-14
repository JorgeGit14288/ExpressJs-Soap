var services = require('../providers/httpService');
var soap = require('../providers/soapService');

controller ={};

controller.getTest = function(req, res, next){
    try{
        console.log("test controller GET");
        var respuesta = {
            "respuesta": "Test GET succesful"
        };
        return res.json(respuesta);
    }catch(ex){
        var respuesta = {
            "respuesta": "Test Failed by "+ex.message
        };
        return res.json(respuesta)
    }
}

controller.getPhotos = (req, res, next) => {
    console.log('ESTOY EN EL CONTROLADOR PARA OBTENER FOTOS')
    var options = {
        method: 'GET',
        url: 'https://jsonplaceholder.typicode.com/photos',
        headers: {
            'postman-token': 'c1231e5e-c7bb-25dc-5f5f-8effaecb9ba9',
            'cache-control': 'no-cache'
        }
    };
    services.httpRequest(options).then(respuesta => {
        res.send(respuesta);
}).catch(err => {
        res.send(err);
})
}

controller.getPosts = function(req, res, next) {
    console.log('ESTOY EN POST CONTROLLER ');
    //opciones para consumir el servicio
    var options = {
        method: 'GET',
        url: 'https://jsonplaceholder.typicode.com/posts',
        headers: {
            'postman-token': '0a279086-a487-3863-4241-181cfbfbdadc',
            'cache-control': 'no-cache'
        }
    };

    services.httpRequest(options).then(respuesta => {
        return res.send(respuesta);
}).catch(err => {
        return res.send(err);
});

    //return res.json(respuesta);
}

controller.getUsers = (req, res, next) => {
    console.log('ESTOY EN EL CONTROLADOR PARA OBTENER Usuarios')
    var options = {
        method: 'GET',
        url: 'https://randomuser.me/api/?results=25',
        headers: {
            'postman-token': 'c1231e5e-c7bb-25dc-5f5f-8effaecb9ba9',
            'cache-control': 'no-cache'
        }
    };
    services.httpRequest(options).then(respuesta => {
        res.send(respuesta);
}).catch(err => {
        res.send(err);
})

}

controller.getXml = (req, res, next) => {

    soap.soapHttp();
}


module.exports = controller;