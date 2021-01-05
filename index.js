require('dotenv').config();

var MongoClient = require('mongodb').MongoClient,
    Hapi = require('@hapi/hapi'),
    url = process.env.URL

const server = Hapi.server({
    port: 3000
});

server.route([{
    method: 'GET',
    path: '/api',
    config: { json: { space: 2 } },
    handler: function(request, reply) {
        console.log(request.query)

        return collection.insertOne(request.query);
    }
}])

MongoClient.connect(url, { useUnifiedTopology: true }, function(err, client) {
    const db = client.db("Schedule")
    collection = db.collection('plugSched')

    server.start()
})