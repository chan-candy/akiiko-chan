import React, { useState } from 'react';
import { Container, Row, Col, Dropdown } from 'react-bootstrap';
import './ProductDetails.css';

const ProductDetails = (props) => {

    const productInfo = props.productInfo.find(p => p._id === props.match.params.id);

    const [bigImageSrc, setImageSrc] = useState(productInfo.image)

    return (
        <Container className='product-details-wrapper'>
        <Row>
            <Col xs={1} className='alt-img-list'>
            <ul>
                {productInfo.images.map((prod, index) => (
                    <li key={index} onClick={() => setImageSrc(prod)}><img src={prod} alt='alt_image' /></li>
                ))}
            </ul>
            </Col>
            <Col xs={5}>
            <div className='alt-img-hero'>
                <img src={bigImageSrc} alt='alt_img'/>
            </div>
            </Col>
            <Col xs={6}>
                <div className='products-details-head'>Group Name</div>
                <div className='products-details-label'>Item Full Name</div>
                <div className='products-details-price'>&#x20B9; 566</div>
            <Row>
            <Col>
            <Dropdown>
                <Dropdown.Toggle className='product-details-button' variant="default" id="dropdown-basic">
                    FABRIC
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            </Col>
            <Col>
            <Dropdown>
                <Dropdown.Toggle variant="default" id="dropdown-basic">
                    THICKNESS
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            </Col>
            </Row>

            <Row>
            <Col className='product-details-color'>
            <Dropdown>
                <Dropdown.Toggle className='product-details-button' variant="default" id="dropdown-basic">
                    COLOR <div className='color-pick'></div>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown>
            </Col>

                <Col className='product-details-quantity'>
                <Dropdown>
                <Dropdown.Toggle className='product-details-button' variant="default" id="dropdown-basic">
                    QUANTITY
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown>
                </Col>
                </Row>

                <button className='product-purchase-button'>PURCHASE</button>
            </Col>
        </Row>
        
        </Container>
    )
}

export default ProductDetails
