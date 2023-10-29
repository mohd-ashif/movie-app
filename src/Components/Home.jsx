import React, { useState, useEffect } from 'react'
import "../App.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardMoviesComponents from './CardMovie';


import axios from 'axios';

const  HomeContainer = ()=>{
  const [content, setContent] = useState([]);
  const [pageno, setPageno] = useState(1)
  const [paginationno, setPaginationno] = useState(0)
  const API_KEY = 'c82efe36f886f9f4ee17e977df32ddfe'


  const GetDataTrending = async ()=>{
    const {data} = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}&page=${pageno}`)
    setContent(data.results);
    setPaginationno(data.total_pages);
    console.log('data', data)
}

  useEffect(()=>{
      
      GetDataTrending();
      //eslint-disable-next-line
  }, [])
  
  

  
  return (
    <main className='homePage'> 
    <div>
      <Container>
        <Row>
          <Col className='col-12'>
         <section>
          <h1 className='txtCenter'>Top Trending</h1>
          <h3 className='txtCenter'>Tv and Movies For You</h3>
         </section>
         </Col>
         {
                        content && content.length > 0 ? content.map((item)=>{
                            return (<CardMoviesComponents key={item.id} data={item} />)
                        }) : 'Loading ....'
                    }

                
        </Row>
      </Container>
    </div>

    </ main>
  )
}

export default HomeContainer