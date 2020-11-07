import React from 'react'
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../ProductList/ProductList.css';

const HomeProductListViewAll = (props) => {
    return (
    <Container className='product-list-wrapper'>
        <Link to='/' className='product-list-back-button'><img src='/images/font_images/back_arrow.svg' alt='back_arrow'></img>BACK</Link>
        <div className='product-list-label'>{props.laundryProductListLabel}</div>
        <div className='product-list-text'>{props.laundryProductListText}</div>
        <Container>
            <Row className='product-list-card-wrapper'>
                {props.laundryProductDetails.map(product => (
                    <div className='product-list-card-wrapper' key={product._id}>
                        <div className='product-list-image'>
                            <img src={product.image} alt='home_1'/>
                        </div>
                        <div className='product-list-card-title'>{product.name}</div>
                        <div className='product-list-card-text'><Link to={`/product/${product._id}`}>add to bag &#x20B9;{product.price}</Link></div>
                    </div>
                ))}
            </Row>
        </Container>
        <div className='product-list-label'>{props.matProductListLabel}</div>
        <div className='product-list-text'>{props.matProductListText}</div>
        <Container>
            <Row className='product-list-card-wrapper'>
                {props.matProductDetails.map(product => (
                    <div className='product-list-card-wrapper' key={product._id}>
                        <div className='product-list-image'>
                            <img src={product.image} alt='home_1'/>
                        </div>
                        <div className='product-list-card-title'>{product.name}</div>
                        <div className='product-list-card-text'><Link to={`/product/${product._id}`}>add to bag &#x20B9;{product.price}</Link></div>
                    </div>
                ))}
            </Row>
        </Container>
        <Container>
                <div className='product-list-label'>{props.similarProductListLabel}</div>
                <div className='product-list-text'>{props.similarProductListText}</div>
                <Container>
                <Row className='product-list-card-wrapper'>
                    {props.similarProductDetails.map(product => (
                        <div className='product-list-card-wrapper' key={product._id}>
                            <div className='product-list-image'>
                                <img src={product.image} alt='home_1'/>
                            </div>
                            <div className='product-list-card-title'>{product.name}</div>
                        </div>
                    ))}
                </Row>
                </Container>
        </Container>
    </Container>
    )
}

export default HomeProductListViewAll
