import axios from "axios";

export default function handler(req, res) {
    console.log("ENTERING api/search-neuf");
    if (req.method === 'POST') {
        let uri = `${process.env.NEXT_PUBLIC_API_URI}/api/new/announcements/search`
        let body = req.body
        console.log("send req to", uri, "body", body);
        axios.post(uri, body)
      .then(response => {
        res.status(200).json({data: response.data});
      })
      .catch(err => {
        res.status(500).json(err)
      })
    } else {
      // Handle any other HTTP method
    }
  }