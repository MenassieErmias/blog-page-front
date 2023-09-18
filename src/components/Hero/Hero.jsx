import './hero.css';
import { useEffect, useState } from 'react';

// require("dotenv").config();

const Hero = () => {
    const [posts, setPosts] = useState();

    const apiKey = process.env.REACT_APP_API_KEY;

    console.log(apiKey)
    const fetchData = async () => {
        try {
            const response = await fetch(
                "https://api.jsonbin.io/v3/b/6507fe902639b33ebfa81b63",
                {
                    method: "GET",
                    headers: {
                        "X-ACCESS-KEY": apiKey,
                        "Content-type": "application/json"
                    }
                }
            );
            const data = await response.json();
            setPosts(data);
            console.log(posts)
        } catch (error) {
            console.log(error.message)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div id="hero">Hero</div>
    )
}

export default Hero;