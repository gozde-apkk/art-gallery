



const MongoClient = require('mongodb').MongoClient;

const client = new MongoClient('mongodb://localhost:27017', { useNewUrlParser: true, useUnifiedTopology: true });

client.connect((err, db) => {
  if (err) throw err;

  const collection = db.db("art-gallery").collection('user');

  // Set a longer timeout for the insert operation
  collection.insertOne({ /* your document */ }, { wtimeout: 20000 }, (err, result) => {
    if (err) throw err;
    
    console.log('Document inserted successfully.');
    
    // Close the connection
    client.close();
  });
});
