// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const fs = require("fs"); // If you are running this code in Node.js
export default function handler(req, res) {
  // If you are running this code in a browser, you won't need 'fs'

  // Read the contents of the JSON file (as a string)
  if (req.method === "GET" && req.query?.id) {
    const categoryId = req.query.id;
    const jsonData = fs.readFileSync("./db.json", "utf8");
    const parsedData = JSON.parse(jsonData)?.products?.filter(
      product => product?.categoryId === categoryId
    );

    res.status(200).json(parsedData);
  }
}
