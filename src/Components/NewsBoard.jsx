import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem';

const NewsBoard = ({ category }) => {

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    let url = ' https://newsapi.org/v2/top-headlines?country=us&apiKey=1b0d8d0bf1284796ae1c6d1fd6f12513';
    fetch(url).then(response => response.json()).then(data => setArticles(data.articles));
  }, [category]);

  return (
    <div>
      <h3 className='text-center'>Latest<span className='badge bg-danger m-1'>News</span></h3>
      {articles.map((news, index) => {
        return <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} />
      })}
    </div>
  )
}

export default NewsBoard
