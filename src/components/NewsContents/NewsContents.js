import React, { useEffect, useState } from 'react';
import './NewsContent.css';
import News from './News/News';
import nike from '../../assets/set.png';
import Content from './Content/Content';
import axios from 'axios';

const NewsContent = ({show}) => {
    const [headLines, setHeadLines] = useState([]);
    const [news, setNews] = useState([]);


    useEffect(() => {
        axios.get("https://newsapi.org/v2/everything?domains=wsj.com&apiKey=f6e562ec786649d19e5cf65bd051ade2", {})
        .then((res) => {
            setNews(res.data.articles)
            console.log(res.data)
        }
        )
        .then((error) => console.log(error));

        axios.get("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=f6e562ec786649d19e5cf65bd051ade2", {})
        .then(res => {
            setHeadLines(res.data.articles)
            console.log(res.data)
        })
        .then(error => console.log(error));
    }, []);

    console.log(news.filter(net => net.author));
    console.log(headLines);

    return (
        <div className={ `${show ? 'change_set' : 'news_set' } news_content `}>
            <header className="news_header">
                <p>Welcome to BBC.com</p>
                <p className="date">Saturday, 13 March</p>
            </header>
            <section className="news">
                {
                    news.map((net, index) => {
                        return (
                            <Content
                            key={index}
                    img={net.urlToImage}
                    url={net.url}
                    text={net.title} />
                        )
                    })
                
                }
                <h2>News</h2>
                <h2>News</h2>
                <h2>News</h2>
                {
                    headLines.map((headline, index) => {
                        return (
                            <News
                                key={index}
                                url={headline.url}
                                img={headline.urlToImage}
                                text={headline.title} />
                        )
                    })
                }
                
                <News 
                    url="/"
                    img={nike}
                    text="this is the evening news of today...." />
                <News 
                    url="/nike"
                    img={nike}
                    text="this is the evening news of today...." />
                <News 
                    url="/nike"
                    img={nike}
                    text="this is the evening news of today...." />
            </section>
            
        </div>
    )
}

export default NewsContent;
