import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import CardMoviesComponents from "./CardMovie";
import PaginationComponent from "../Parts/Pagination";

import LeftListBarComponent from "../Parts/LeftSideBar";
import useGenres from "../Hooks/UseGenres";

const TvSeriesContainer = () => {
  const [content, setContent] = useState([]);

  const [genres, setGenres] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);

  const [pageno, setPageno] = useState(1)
  const [paginationno, setPaginationno] = useState(0)
  const API_KEY = "90b17c84b484021cf2a93b22b3512b4f"


  const genreforURL = useGenres(selectedGenres)
  const GetDataTrending = async () => {

    const { data } = await axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&page=${pageno}&with_genres=&language=en-US&with_genres=${genreforURL}`)
    setContent(data.results);
    setPaginationno(data.total_pages);
  }

  useEffect(() => {
    console.log('Trending Component did mount');
    GetDataTrending();

  }, [])

  useEffect(() => {
    GetDataTrending();
  
  }, [pageno, genreforURL])

  const handleClick = (number) => {
    setPageno(number);
  }
  useEffect(() => {
    console.log('Trending Component didupdate mount');
    GetDataTrending();

  }, [pageno])
  return (
    <main className='homePage'>
      <Container>
        <Row>
          <Col className='col-12'>
            <section>
              <h1 className='txtCenter'>Top Trending Tv Series</h1>
              <h3 className='txtCenter'> For You</h3>
            </section>
          </Col>
        </Row>
        <Row>

          <Col className='me-auto my-2 my-lg-0' >
            <LeftListBarComponent genres={genres} selectedGenres={selectedGenres} setSelectedGenres={setSelectedGenres} setGenres={setGenres} type="tv" setPage={setPageno} />
          </Col>
          <Col className='col-lg-10 col-md-6 '>
            <Row>
              {
                content && content.length > 0 ? content.map((item, index) => {
                  return (<CardMoviesComponents key={index} data={item} mediaType="tv" />)
                }) : 'Loading ....'
              }

              {
                paginationno && paginationno > 1 ? <PaginationComponent maxnum={paginationno} activenum={pageno} handleClick={handleClick} /> : ''
              }
            </Row>
          </Col>

        </Row>
      </Container>
    </main>
  )
}

export default TvSeriesContainer;