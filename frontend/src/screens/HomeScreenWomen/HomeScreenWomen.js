import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import HomeScreenWomenProducts from '../../assets/products/HomeScreenWomenProducts';
import './HomeScreenWomen.css';

const HomeScreenWomen = () => {
    return (
        <Container>
            <Row className='women-wrapper'>
                <Col sm={9}>
                    <div className='women-title'>WOMEN</div>
                    <div className='women-title-sub'>SHOPPING BAGS</div>
                    <div className='women-text'>A delightful range of sustainable bags that are designed 
                        to perfection. Minimal, yet classic silhouettes to 
                        compliment just about every look, 
                        multipurpose & eye-catching.</div>
                </Col>
                <Col sm={3} className='women-button-placement'>
                    <button className='women-button'>SHOP ALL</button>
                </Col>
            </Row>
            <Row className='women-card-wrapper'>
                {HomeScreenWomenProducts.map(product => (
                    <Col key={product._id}>
                    <div className='women-card-image'>
                        <img src={product.image} alt='women_1'/>
                    </div>
                    <div className='women-card-title'>{product.name}</div>
                    <div className='women-card-text'>add to bag &#x20B9;{product.price}</div>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default HomeScreenWomen
