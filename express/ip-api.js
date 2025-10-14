import express from "express";
import axios from "axios";

const app = express();
const PORT = process.env.PORT || 8082;

let fetchedIp = null; 

app.use(express.json());

app.get("/ip", (req, res) => {
    res.json({
        ip: fetchedIp,
        source: "httpbin.org"
    });
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: "Something went wrong!" });
});

(async () => {
    try {
        const apiResponse = await axios.get('https://httpbin.org/ip');
        fetchedIp = apiResponse.data.origin;
        app.listen(PORT, () => {
            console.log(`Server running on http://localhost:${PORT}/ip`);
            console.log(`IP address fetched: ${fetchedIp}`);
        });
    } catch (error) {
        console.error("Could not fetch IP on startup.", error.message);
    }
})();