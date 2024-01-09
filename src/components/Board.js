import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import CardItem from './CardItem';
import Spinner from 'react-bootstrap/Spinner'

const Board = ({ category, loading, setLoading, darkMode }) => {
  
  const [articles, setArticles] = useState([]);

  const fetchData = async () => {
    try {
      setLoading(true);
      let url = `https://saurav.tech/NewsAPI/top-headlines/category/${category}/in.json`;
      let response = await fetch(url);
      let data = await response.json();
      setArticles(data.articles);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    
  }, [category]);

  return (
    <>
      <Container className={darkMode ? `bg-dark d-flex flex-wrap justify-content-center` : `bg-secondary d-flex flex-wrap justify-content-center`} style={{minHeight:"100vh"}} >
        {loading ? (
          <h1 className='text-light' style={{textAlign: "center !important"}}><Spinner animation="border" />Loading...</h1>
        ) : (
          articles.map((news, index) => (
            <CardItem
              key={index}
              title={news.title}
              description={news.description}
              image={news.urlToImage}
              url={news.url}
              className="m-2"
            />
          ))
        )}
      </Container>
    </>
  );
};

export default Board;
