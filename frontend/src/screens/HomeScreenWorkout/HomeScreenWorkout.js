import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import HomeScreenWorkoutProducts from '../../assets/products/HomeScreenWorkoutProducts';
import './HomeScreenWorkout.css';

const HomeScreenWorkout = () => {
    return (
        <Container>
             <Row className='workout-wrapper'>
                <Col sm={3} className='workout-button-placement'>
                    <button className='workout-button'>SHOP ALL</button>
                </Col>
                <Col sm={9} className='workout-wrapper'>
                    <div className='workout-title'>WORKOUT</div>
                    <div className='workout-text'>Health is wealth, every choice made for your well-being is reflected in your choice of accessories. 
                    Choose from our range of breathable, 100% organic & trendy gym and yoga bags. 
                    Enjoy the compliments as you inhale positivity & exhale your stress.</div>
                </Col>
            </Row>
            <Row>
                <Col sm={5}>
                    <div className='workout-hero-image'>
                        <img src={'/images/home_screen_workout_products/HomeScreenWorkoutHero.png'} alt='home_hero_img'/>
                    </div>
                </Col>
                <Col sm={7}>
                    <Row className='workout-card-wrapper'>
                        {HomeScreenWorkoutProducts.map(product => (
                            <Col className='home-card-items' key={product._id}>
                                <div>
                                    <img className='home-card-image' src={product.image} alt='home_1'/>
                                </div>
                                <div className='home-card-title'>{product.name}</div>
                                <div className='home-card-text'>add to bag &#x20B9;{product.price}</div>
                            </Col>
                        ))}
                    </Row>
                </Col>
            </Row>

        </Container>
    )
}

export default HomeScreenWorkout
