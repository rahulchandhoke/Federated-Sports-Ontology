'use strict'
const Hapi = require('hapi');
const Good = require('good');
const Path = require('path');
const server  = new Hapi.Server({
    host: 'localhost',
    port: 1400
});


server.route ({
    method: 'GET',
    path: '/sparql',
    handler: function(request,response){
            console.log(request);
            let sparqlQueryProcessor = new SparqlQueryProcessor(request.params);
            return sparqlQueryProcessor.executeQuery();
    }
});

server.start((err) =>{
    if(err){
        throw err;
    }
    console.log('Server: ',server.info.uri)
});