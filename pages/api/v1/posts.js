
import axios from 'axios';


export default async (req, res) => {

    const method = req.method;
    switch (method) {
        case "POST":
            const postData = JSON.parse(req.body);
            console.log('Post Data', postData);
            return res.json({
                status: 'Saving Data to DB',
                ...postData
            });
            break;
        case "GET":
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
            const posts = response.data;
            let slice = posts.slice(0, 20);
            console.log(slice);
            return res.status(200).json(posts.slice(0, 20));
            break;
        default:
            break;
    }

};