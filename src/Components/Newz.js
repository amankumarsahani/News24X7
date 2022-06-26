import React, { useEffect, useState } from "react";
import NewzCard from "./NewzCard";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "./Spinner";

export default function Newz(props) {
    const [page, setPage] = useState(1);
    const [articles, setArticals] = useState([]);
    const [loading, setLoading] = useState(true);
    const [totalResults, setTotalResults] = useState(0);

    const updateNewz = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        let data = await fetch(url);
        setLoading(true);
        let parsedData = await data.json();
        setArticals(parsedData.articles);
        setTotalResults(parsedData.totalResults);
        setLoading(false);
    };

    const fetchMoreData = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`;
        setPage(page + 1);
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticals(articles.concat(parsedData.articles));
        setTotalResults(parsedData.totalResults);
    };
    useEffect(() => {
        updateNewz();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
    return (
        <div className='newzbox' data-theme={props.mode}>
            <div className="container py-3">
                <div className='heading'>
                    <h1>24X7 Top {props.category.charAt(0).toUpperCase() + props.category.slice(1)} News</h1>
                </div>
                {loading && <Spinner />}
                <InfiniteScroll
                
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalResults}
                    loader={<Spinner />}
                >
                    <div className="container">
                        <div className="row">
                            {articles.map((item) => {
                                return (
                                    <div className="col-md-3" key={item.url}>
                                        <NewzCard
                                            title={item.title}
                                            description={item.description}
                                            newzUrl={item.url}
                                            imageUrl={item.urlToImage}
                                            source={item.source.name}
                                            author={item.author}
                                            time={item.publishedAt}
                                            mode={props.mode}
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </InfiniteScroll>
            </div>
        </div>
    );
}
