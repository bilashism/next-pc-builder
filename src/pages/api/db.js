const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.3ackybm.mongodb.net/NextPcBuilder?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true
  }
});

async function run(req, res) {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    const NextPcBuilderDB = client.db("NextPcBuilder");
    const categoriesCollection = NextPcBuilderDB.collection("categories");
    const productsCollection = NextPcBuilderDB.collection("products");
    console.log(req.url, req.query);

    if (req.method === "GET") {
      if (req.query.name === "products") {
        if (req.query.id) {
          const result = await productsCollection.findOne({ id: req.query.id });
          console.log(result);
          res.send({ message: "success", status: 200, data: result });
        }

        const result = await productsCollection.find({}).toArray();
        console.log(result);
        res.send({ message: "success", status: 200, data: result });
      }

      if (req.query.name === "categories") {
        const result = await categoriesCollection.find({}).toArray();
        res.send({ message: "success", status: 200, data: result });
      }
    }

    // if (req.method === "POST") {
    //   const news = req.body;
    //   const result = await categoryCollection.insertOne(news);
    //   res.json(result);
    // }
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}

export default run;

// // Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// const fs = require("fs"); // If you are running this code in Node.js
// export default function handler(req, res) {
//   // If you are running this code in a browser, you won't need 'fs'

//   // Read the contents of the JSON file (as a string)
//   if (req.method === "GET" && req.query?.id) {
//     const categoryId = req.query.id;
//     const jsonData = fs.readFileSync("./db.json", "utf8");
//     const parsedData = JSON.parse(jsonData)?.products?.filter(
//       product => product?.categoryId === categoryId
//     );

//     res.status(200).json(parsedData);
//   }
// }
