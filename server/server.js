import express from "express";
import axios from "axios";
import cors from "cors";

const app = express();
const PORT = 3000;

app.use(cors({ origin: "http://localhost:5173" }));
app.get("/get-reviews", async (req, res) => {
  const { placeId } = req.query; // place_id'yi frontend'den alacağız

  try {
    const response = await axios.get(
      "https://maps.googleapis.com/maps/api/place/details/json",
      {
        params: {
          place_id: placeId,
          fields: "reviews",
          key: "AIzaSyC1Pr_izHsfYGim0JxYMyacErRFG5ajL9M", // Google API Anahtarınızı buraya ekleyin
          language: "tr",
        },
      }
    );

    res.json(response.data.result.reviews); // Yorumları frontend'e döndür
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "API çağrısında bir hata oluştu" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
