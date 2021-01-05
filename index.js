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
    // config: { json: { space: 2 } },
    handler: function(request, reply) {
        console.log('POST', request.payload)

        // return collection.insertOne(request.query);

        var strRet = ""
        for (var key in request.payload) {
            strRet += key + " : " + request.payload[key] + "\n"
        }

        return strRet
    }
}])

// MongoClient.connect(url, { useUnifiedTopology: true }, function(err, client) {
//     const db = client.db("Schedule")
//     collection = db.collection('plugSched')

//     server.start()
// })

server.start()