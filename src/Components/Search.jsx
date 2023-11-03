import  React, {useState, useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import CardMoviesComponents from './CardMovie';
import PaginationComponent from '../Parts/Pagination';
import SearchBarCardComponents from './SearchBox';

const  SearchContainer = ()=>{
    const [content, setContent] = useState([]);
    const [pageno, setPageno] = useState(1);
    const [paginationno, setPaginationno] = useState(0);

    const [searchValue, setSearchValue] = useState('Fight club');
    const [typeValue, setTypeValue] = useState('movie');
    const API_KEY = "90b17c84b484021cf2a93b22b3512b4f";

    
    
    const GetDataTrending = async ()=>{
        
        const {data} = await axios.get(`https://api.themoviedb.org/3/search/${typeValue}?api_key=${API_KEY}&page=${pageno}&language=en-US&query=${searchValue}&include_adult=false`);
        console.log('data', data.results)
        setContent(data.results);
        setPaginationno(data.total_pages);
    }

    useEffect(()=>{
        console.log('Trending Component did mount');
        GetDataTrending();
       
    }, [])

    const fetchDataQuery = ()=>{
        // 
        GetDataTrending()
    }
    
    const handleClick = (number)=>{
        setPageno(number);
    }
    useEffect(()=>{
        console.log('Trending Component didupdate mount');
        GetDataTrending();
     
    }, [pageno])
    return (
        <main className='homePage'>
            <Container>
                <Row>
                    <Col className='col-12'>
                        <section>
                            <h1 className='txtCenter'>Search Movies /  TV Series</h1>
                            <h3 className='txtCenter'> For You</h3>
                            <SearchBarCardComponents 
                                searchValue={searchValue}
                                setSearchValue={(value)=>{setSearchValue(value)}}
                                typeValue={typeValue}
                                setTypeValue={(value)=>{setTypeValue(value)}}
                                filterData={fetchDataQuery} />
                        </section>
                    </Col>
                </Row>
                <Row>
                    
                    <Col className='col-12'>
                        <Row>
                                {
                                    content && content.length > 0 ? content.map((item, index)=>{
                                        return (<CardMoviesComponents key={index} data={item} mediaType={typeValue}/>)
                                    }) : 'Loading ....'
                                }

                            {
                                paginationno && paginationno > 1 ? <PaginationComponent maxnum={paginationno} activenum={pageno} handleClick={handleClick}/> : ''
                            }
                        </Row>
                    </Col>
                    
                </Row>
            </Container>
        </main>
    )
}

export default SearchContainer;