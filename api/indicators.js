import axios from "axios";

export default async function handler(req, res) {

  console.log(req.query)
  const { year } = req.query;

  try {

    const response = await axios.get(
      "https://moz-demog-api.vercel.app/v1/indicators",
      {
        params: {
          y_start: year,
        },
        headers: {
          "x-api-key": process.env.API_KEY,
        },
      }
    );

    res.status(200).json(response.data);

  } catch (err) {
    console.error("ERROR:");

    console.error(err.message);

    res.status(500).json({
      error: err.message,
    });
  }
}