require('dotenv').config();

var MongoClient = require('mongodb').MongoClient,
    Hapi = require('@hapi/hapi'),
    url = process.env.URL

const server = Hapi.server({
    port: 3000
});

server.route([{
    method: 'POST',
    path: '/api',
    handler: function(request, reply) {
        console.log('POST', request.payload)

        return collection.insertOne(request.payload);
    }
}])

MongoClient.connect(url, { useUnifiedTopology: true }, function(err, client) {
    const db = client.db("Schedule")
    collection = db.collection('plugSched')

    server.start()
})

server.start()