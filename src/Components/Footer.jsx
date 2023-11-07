import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Footer.css';

import {  BsLinkedin, BsTwitter,  BsGoogle, BsGithub} from "react-icons/bs";
const FooterComponent = ()=>{
    
    return (
        <>
            <footer className='myFooter'>
                <Container>
                   <Row>
                        <Col>
                        <div class="second__footer">
<ul className="unstyled" style={{ display: 'flex', flexDirection: 'row', listStyle: 'none' }}>
    <li style={{ margin: '0 10px' }}><a href="#">Contact Us</a></li>
    <li style={{ margin: '0 10px' }}><a href="#">Account</a></li>
    <li style={{ margin: '0 10px' }}><a href="#">News</a></li>
    <li style={{ margin: '0 10px' }} className="spacer"></li>
    <li style={{ margin: '0 10px' }}><a href="#">Press Room</a></li>
    <li style={{ margin: '0 10px' }}><a href="#">Advertising</a></li>
    <li style={{ margin: '0 10px' }}><a href="#">Jobs</a></li>
  </ul>
                            </div>

                            <div className="footer__head">
      <ul className="unstyled" style={{ display: 'flex', listStyle: 'none', color:"white" }}>
  <li style={{ margin: '0 10px' }}><a href="#">Home</a></li>
  <li style={{ margin: '0 10px' }}><a href="#">Top Rated Movies</a></li>
  <li style={{ margin: '0 10px' }}><a href="#">Box Office</a></li>
  <li style={{ margin: '0 10px' }}><a href="#">TV</a></li>
  <li style={{ margin: '0 10px' }}><a href="#">Coming Soon</a></li>
  <li style={{ margin: '0 10px' }}><a href="#">Site Index</a></li>
  <li style={{ margin: '0 10px' }}><a href="#">Search</a></li>
  <li style={{ margin: '0 10px' }}><a href="#">In Theaters</a></li>
</ul>

  
      </div>

      <p className='head_3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio, perspiciatis repellat voluptatibus  <br />
      veniam laborum ducimus recusandae ullam nesciunt est, rem ipsum laudantium fuga quisquam iure delec  <br />
       fugiat dolorem harum dolor placeat veniam. Porro, optio nihil dolorem aliquam consequuntur et pariatur, quam,  <br />
       veniam dicta tempore laboriosam? Iusto, impedit iure, accusantium esse tempora eos quia itaque cupiditate ipsam  eligendi odit</p>

                           
                            <ul className='socialIconsList'>
                           
                                <li>
                                    <a rel="noreferrer" href="https://www.linkedin.com/in/muhammed-ashif-ke/" target="_blank">
                                        <BsLinkedin />
                                    </a>
                                </li>
                                <li>
                                    <a rel="noreferrer" href="https://twitter.com/MohdAshifred" target="_blank">
                                        <BsTwitter />
                                    </a>
                                </li>
                              
                                <li>
                                    <a rel="noreferrer" href="https://652e984ffd970b0786df5ac3--earnest-centaur-2f0af8.netlify.app/" target="_blank">
                                        <BsGoogle />
                                    </a>
                                </li>
                                <li>
                                    <a rel="noreferrer" href="https://github.com/mohd-ashif" target="_blank">
                                        <BsGithub />
                                    </a>
                                </li>
                               
                            </ul>
                            
                        </Col>
                   </Row>
                </Container>
            </footer>
        </>
    )
}

export default FooterComponent;