import axios from "axios";

export default function handler(req, res) {
    console.log("ENTERING api/details-occas");
    if (req.method === 'GET') {
        const { query: { id } } = req
        let uri = `${process.env.NEXT_PUBLIC_API_URI}/api/announcements/${id}`
        console.log("send req to", uri, "id", id);
        axios.get(uri)
            .then(response => {
                res.status(200).json({ data: response.data });
            })
            .catch(err => {
                res.status(500).json(err)
            })
    } else {
        // Handle any other HTTP method
    }
}