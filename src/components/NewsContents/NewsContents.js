import React, { useEffect, useState } from 'react';
import './NewsContents.css';
import News from './News/News';
import nike from '../../assets/set.png';
import HeadLine from './HeadLine/HeadLine';
import Content from './Content/Content';
import axios from 'axios';

const NewsContent = ({show}) => {
    const [headLines, setHeadLines] = useState([]);
    const [news, setNews] = useState([]);
    const [head, setHead] = useState([]);
    const [reel, setReel] = useState([]);
    const [sport, setSport] = useState([]);
    const [head2, setHead2] = useState([]);
    const [entertainment, setEntainment] = useState([]);
    const [future, setFuture] = useState([]);
    const [more, setMore] = useState([]);
    const [editor, setEditor] = useState([]);
    const [head3, setHead3] = useState([]);
    const [head4, setHead4] = useState([]);

    useEffect(() => {
        axios.get("https://newsapi.org/v2/everything?domains=wsj.com&apiKey=f6e562ec786649d19e5cf65bd051ade2", {})
        .then((res) => {
            setNews(res.data.articles.slice(0, 3));
            setReel(res.data.articles.slice(3, 6));
            setSport(res.data.articles.slice(6, 9));
            setEntainment(res.data.articles.slice(9, 12));
            setFuture(res.data.articles.slice(12, 18));
            setMore(res.data.articles.slice(18, 24));
            setEditor(res.data.articles.slice(24, 30));
            console.log(res.data)
        }
        )
        .then((error) => console.log(error));

        axios.get("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=f6e562ec786649d19e5cf65bd051ade2", {})
        .then(res => {
            setHeadLines(res.data.articles.slice(9, 13))
            setHead(res.data.articles[0]);
            setHead2(res.data.articles[4]);
            setHead3(res.data.articles[2]);
            setHead4(res.data.articles[3]);
            console.log(res.data)
        })
        .then(error => console.log(error));
    }, []);

    console.log(head);

    return (
        <div className={ `${show ? 'change_set' : 'news_set' } news_content `}>
            <header className="news_header">
                <p>Welcome to BBC.com</p>
                <p className="date">Saturday, 13 March</p>
            </header>
            {
                <HeadLine
                    img={head.urlToImage}
                    text={head.title}
                    content={head.description}
                    />
                }
            <section className="headings">
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
            </section>
            <section >
                <h3 className="news_page">News</h3>
                <div className="news_head">
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
                </div>
            </section>
            <section >
                <h3 className="sport_page">Sport</h3>
                <div className="news_head">
                {
                    sport.map((net, index) => {
                        return (
                            <Content
                            key={index}
                    img={net.urlToImage}
                    url={net.url}
                    text={net.title} />
                        )
                    })
                
                }
                </div>
            </section>
            <section className="reel_section">
                <h3 className="reel_page">Reel</h3>
                <div className="reel_head">
                {
                    reel.map((net, index) => {
                        return (
                            <Content
                            key={index}
                    img={net.urlToImage}
                    url={net.url}
                    text={net.title} />
                        )
                    })
                
                }
                </div>
            </section>
            <section >
                <h3 className="travel_page">More around the BBC</h3>
                {
                <HeadLine
                    img={head2.urlToImage}
                    text={head2.title}
                    content={head2.description}
                    />
                }
                <div className="news_head">
                {
                    more.map((net, index) => {
                        return (
                            <Content
                            key={index}
                    img={net.urlToImage}
                    url={net.url}
                    text={net.title} />
                        )
                    })
                
                }
                </div>
            </section>
            <section className="reel_section" >
                <h3 className="future_page">Future Planet</h3>
                <div className="future_head">
                {
                    future.map((net, index) => {
                        return (
                            <Content
                            key={index}
                    img={net.urlToImage}
                    url={net.url}
                    text={net.title} />
                        )
                    })
                
                }
                </div>
            </section>
            <section>
                <h3 className="sport_page">Editor's Picks</h3>
                {
                <HeadLine
                    img={head4.urlToImage}
                    text={head4.title}
                    content={head4.description}
                    />
                }
                <div className="news_head">
                {
                    editor.map((net, index) => {
                        return (
                            <Content
                            key={index}
                    img={net.urlToImage}
                    url={net.url}
                    text={net.title} />
                        )
                    })
                
                }
                </div>
            </section>
            <section>
                <h3 className="entertainment_page">World in pictures</h3>
                {
                <HeadLine
                    img={head3.urlToImage}
                    text={head3.title}
                    content={head3.description}
                    />
                }
                <div className="news_head">
                {
                    entertainment.map((net, index) => {
                        return (
                            <Content
                            key={index}
                    img={net.urlToImage}
                    url={net.url}
                    text={net.title} />
                        )
                    })
                
                }
                </div>
            </section>
            
        </div>
    )
}

export default NewsContent;
