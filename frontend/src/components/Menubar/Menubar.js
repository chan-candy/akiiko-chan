import React, { Component } from 'react';
import { Container, Nav, Collapse, Row, Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Menubar.css';

export default class Menubar extends Component {
    state = {
        dropHomeDiv: false,
        dropOfficeDiv: false,
        dropOrganisationDiv: false,
        dropTravelDiv: false,
        dropMenDiv: false,
        dropWomenDiv: false,
        dropGiftDiv: false
    }

    toggleHomeDropDiv = () => {
        const dropper = this.state.dropHomeDiv;
        this.setState({dropHomeDiv: !dropper})
    }

    toggleOfficeDropDiv = () => {
        const dropper = this.state.dropOfficeDiv;
        this.setState({dropOfficeDiv: !dropper})
    }

    toggleOrganisationDropDiv = () => {
        const dropper = this.state.dropOrganisationDiv;
        this.setState({dropOrganisationDiv: !dropper})
    }

    toggleTravelDropDiv  = () => {
        const dropper = this.state.dropTravelDiv;
        this.setState({dropTravelDiv: !dropper})
    }

    toggleMenDropDiv = () => {
        const dropper = this.state.dropMenDiv;
        this.setState({dropMenDiv: !dropper})
    }

    toggleWomenDropDiv = () => {
        const dropper = this.state.dropWomenDiv;
        this.setState({dropWomenDiv: !dropper})
    }

    toggleGiftDropDiv = () => {
        const dropper = this.state.dropGiftDiv;
        this.setState({dropGiftDiv: !dropper})
    }

    render() {
        return (
            <>
            <Container className='navbar-wrapper'>
                <Nav fill as="ul" className='navbar-ul'>
                    <Nav.Item as="li">
                        <Nav className='navbar-li'><Link to='/home/all_products' onMouseEnter={this.toggleHomeDropDiv}>Home</Link></Nav>
                        {
                            this.state.dropHomeDiv ? 
                            <Collapse in={this.toggleHomeDropDiv}>
                                <Row className='navbar-dropdown' onMouseLeave={this.toggleHomeDropDiv}>
                                    <Col className='navbar-drop-list' sm={8}>
                                        <ul>
                                            <li>
                                                <Link to='/home/laundry'><img src='/images/nav_drop/home_drop/laundry.png' alt='laundry_img'/>
                                                <div className='navbar-drop-list-label'>LAUNDRY</div></Link></li>
                                            <li>
                                                <Link to='/home/mat'><img src='/images/nav_drop/home_drop/mat.png' alt='laundry_img'/>
                                                <div className='navbar-drop-list-label'>MAT</div></Link></li>
                                            <li>
                                                <img src='/images/nav_drop/home_drop/tableware.png' alt='laundry_img'/>
                                                <div className='navbar-drop-list-label'>TABLEWARE</div></li>
                                            <li>
                                                <img src='/images/nav_drop/home_drop/kitchen.png' alt='laundry_img'/>
                                                <div className='navbar-drop-list-label'>KITCHEN</div></li>
                                            <li>
                                                <img src='/images/nav_drop/home_drop/storage.png' alt='laundry_img'/>
                                                <div className='navbar-drop-list-label'>STORAGE</div></li>
                                        </ul>
                                        <Link to='/home/all_products' className='navbar-drop-link'>VIEW ALL BAGS</Link>
                                    </Col>
                                    <Col sm={4} className='navbar-drop-hero'><img src='/images/nav_drop/home_drop/homeDropHero.png' alt='home_drop_hero'/></Col>
                                </Row>
                            </Collapse> : null
                        }
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav className='navbar-li'><Link to='/beach'>Beach</Link></Nav>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav className='navbar-li'><a href='/' onMouseEnter={this.toggleOfficeDropDiv} onScroll={this.toggleOfficeDropDiv}>Office</a></Nav>
                        {
                            this.state.dropOfficeDiv ? 
                            <Collapse in={this.toggleOfficeDropDiv} onMouseLeave={this.toggleOfficeDropDiv}>
                                <Row className='navbar-dropdown'>
                                    <Col className='navbar-drop-list' sm={8}>
                                        <ul>
                                            <li>
                                                <img src='/images/nav_drop/office_drop/laptop_bag.png' alt='laundry_img'/>
                                                <div className='navbar-drop-list-label'>LAPTOP BAG</div></li>
                                            <li>
                                                <img src='/images/nav_drop/office_drop/messenger_bag.png' alt='laundry_img'/>
                                                <div className='navbar-drop-list-label'>MESSENGER BAG</div></li>
                                            <li>
                                                <img src='/images/nav_drop/office_drop/storage_bag.png' alt='laundry_img'/>
                                                <div className='navbar-drop-list-label'>STORAGE</div></li>
                                            <li>
                                                <img src='/images/nav_drop/office_drop/folder_bag.png' alt='laundry_img'/>
                                                <div className='navbar-drop-list-label'>FOLDER</div></li>
                                            <li>
                                                <img src='/images/nav_drop/office_drop/accessories.png' alt='laundry_img'/>
                                                <div className='navbar-drop-list-label'>ACCESSORIES</div></li>
                                        </ul>
                                        <a href='/' className='navbar-drop-link'>VIEW ALL BAGS</a>
                                    </Col>
                                    <Col sm={4} className='navbar-drop-hero'><img src='/images/nav_drop/office_drop/officeDropHero.png' alt='home_drop_hero'/></Col>
                                </Row>
                            </Collapse> : null
                        }
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav className='navbar-li'>Workout</Nav>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav className='navbar-li'><a href='/' onMouseEnter={this.toggleOrganisationDropDiv}>Organisation</a></Nav>
                        {
                            this.state.dropOrganisationDiv ? 
                            <Collapse in={this.toggleOrganisationDropDiv} onMouseLeave={this.toggleOrganisationDropDiv}>
                                <Row className='navbar-dropdown'>
                                    <Col className='navbar-drop-list' sm={8}>
                                        <ul>
                                            <li>
                                                <img src='/images/nav_drop/organisation_drop/wall_hanging.png' alt='laundry_img'/>
                                                <div className='navbar-drop-list-label'>WAL HANGING</div></li>
                                            <li>
                                                <img src='/images/nav_drop/organisation_drop/pouch.png' alt='laundry_img'/>
                                                <div className='navbar-drop-list-label'>POUCH</div></li>
                                            <li>
                                                <img src='/images/nav_drop/organisation_drop/baskets.png' alt='laundry_img'/>
                                                <div className='navbar-drop-list-label'>BASKETS</div></li>
                                            <li>
                                                <img src='/images/nav_drop/organisation_drop/storage.png' alt='laundry_img'/>
                                                <div className='navbar-drop-list-label'>STORAGE</div></li>
                                            <li>
                                                <img src='/images/nav_drop/organisation_drop/acessories.png' alt='laundry_img'/>
                                                <div className='navbar-drop-list-label'>ACCESSORIES</div></li>
                                        </ul>
                                        <a href='/' className='navbar-drop-link'>VIEW ALL BAGS</a>
                                    </Col>
                                    <Col sm={4} className='navbar-drop-hero'><img src='/images/nav_drop/organisation_drop/organisationDropHero.png' alt='home_drop_hero'/></Col>
                                </Row>
                            </Collapse> : null
                        }
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav className='navbar-li'><a href='/' onMouseEnter={this.toggleTravelDropDiv}>Travel</a></Nav>
                        {
                            this.state.dropTravelDiv ? 
                            <Collapse in={this.toggleTravelDropDiv} onMouseLeave={this.toggleTravelDropDiv}>
                                <Row className='navbar-dropdown'>
                                    <Col className='navbar-drop-list' sm={8}>
                                        <ul>
                                            <li>
                                                <img src='/images/nav_drop/travel_drop/duffel_bag.png' alt='laundry_img'/>
                                                <div className='navbar-drop-list-label'>DUFFEL BAG</div></li>
                                            <li>
                                                <img src='/images/nav_drop/travel_drop/cabin_bag.png' alt='laundry_img'/>
                                                <div className='navbar-drop-list-label'>CABIN BAG</div></li>
                                            <li>
                                                <img src='/images/nav_drop/travel_drop/backpack.png' alt='laundry_img'/>
                                                <div className='navbar-drop-list-label'>BACK PACK</div></li>
                                            <li>
                                                <img src='/images/nav_drop/travel_drop/accessories.png' alt='laundry_img'/>
                                                <div className='navbar-drop-list-label'>ACCESSORIES</div></li>
                                        </ul>
                                        <a href='/' className='navbar-drop-link'>VIEW ALL BAGS</a>
                                    </Col>
                                    <Col sm={4} className='navbar-drop-hero'><img src='/images/nav_drop/travel_drop/travelDropHero.png' alt='home_drop_hero'/></Col>
                                </Row>
                            </Collapse> : null
                        }
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav className='navbar-li'>Shopping</Nav>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav className='navbar-li'><a href='/' onMouseEnter={this.toggleMenDropDiv} onScroll={this.toggleMenDropDiv}>Men</a></Nav>
                        {
                            this.state.dropMenDiv ? 
                            <Collapse in={this.toggleMenDropDiv} onMouseLeave={this.toggleMenDropDiv}>
                                <Row className='navbar-dropdown'>
                                    <Col className='navbar-drop-list' sm={8}>
                                        <ul>
                                            <li>
                                                <img src='/images/nav_drop/men_drop/wallet.png' alt='laundry_img'/>
                                                <div className='navbar-drop-list-label'>WALLET</div></li>
                                            <li>
                                                <img src='/images/nav_drop/men_drop/coat_cover.png' alt='laundry_img'/>
                                                <div className='navbar-drop-list-label'>COAT COVER</div></li>
                                            <li>
                                                <img src='/images/nav_drop/men_drop/shoe_cover.png' alt='laundry_img'/>
                                                <div className='navbar-drop-list-label'>SHOE COVER</div></li>
                                            <li>
                                                <img src='/images/nav_drop/men_drop/bag.png' alt='laundry_img'/>
                                                <div className='navbar-drop-list-label'>BAG</div></li>
                                            <li>
                                                <img src='/images/nav_drop/men_drop/accessories.png' alt='laundry_img'/>
                                                <div className='navbar-drop-list-label'>ACCESSORIES</div></li>
                                        </ul>
                                        <a href='/' className='navbar-drop-link'>VIEW ALL BAGS</a>
                                    </Col>
                                    <Col sm={4} className='navbar-drop-hero'><img src='/images/nav_drop/men_drop/menDropHero.png' alt='home_drop_hero'/></Col>
                                </Row>
                            </Collapse> : null
                        }
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav className='navbar-li'><a href='/' onMouseEnter={this.toggleWomenDropDiv} onScroll={this.toggleWomenDropDiv}>Women</a></Nav>
                        {
                            this.state.dropWomenDiv ? 
                            <Collapse in={this.toggleWomenDropDiv} onMouseLeave={this.toggleWomenDropDiv}>
                                <Row className='navbar-dropdown'>
                                    <Col className='navbar-drop-list' sm={8}>
                                        <ul>
                                            <li>
                                                <img src='/images/nav_drop/women_drop/hand_bag.png' alt='laundry_img'/>
                                                <div className='navbar-drop-list-label'>HAND BAG</div></li>
                                            <li>
                                                <img src='/images/nav_drop/women_drop/wallet.png' alt='laundry_img'/>
                                                <div className='navbar-drop-list-label'>WALLET</div></li>
                                            <li>
                                                <img src='/images/nav_drop/women_drop/shoe_cover.png' alt='laundry_img'/>
                                                <div className='navbar-drop-list-label'>SHOE COVER</div></li>
                                            <li>
                                                <img src='/images/nav_drop/women_drop/coat_cover.png' alt='laundry_img'/>
                                                <div className='navbar-drop-list-label'>COAT COVER</div></li>
                                            <li>
                                                <img src='/images/nav_drop/women_drop/toiletries.png' alt='laundry_img'/>
                                                <div className='navbar-drop-list-label'>TIOLETRIES</div></li>
                                            <li>
                                                <img src='/images/nav_drop/women_drop/accessories.png' alt='laundry_img'/>
                                                <div className='navbar-drop-list-label'>ACCESSORIES</div></li>
                                        </ul>
                                        <a href='/' className='navbar-drop-link'>VIEW ALL BAGS</a>
                                    </Col>
                                    <Col sm={4} className='navbar-drop-hero'><img src='/images/nav_drop/women_drop/womenDropHero.png' alt='home_drop_hero'/></Col>
                                </Row>
                            </Collapse> : null
                        }
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav className='navbar-li'><a href='/' onMouseEnter={this.toggleGiftDropDiv} onScroll={this.toggleGiftDropDiv}>Gifting</a></Nav>
                        {
                            this.state.dropGiftDiv ? 
                            <Collapse in={this.toggleGiftDropDiv} onMouseLeave={this.toggleGiftDropDiv}>
                                <Row className='navbar-dropdown'>
                                    <Col className='navbar-drop-list' sm={8}>
                                        <ul>
                                            <li>
                                                <img src='/images/nav_drop/gift_drop/gift_box.png' alt='laundry_img'/>
                                                <div className='navbar-drop-list-label'>GIFT BOX</div></li>
                                            <li>
                                                <img src='/images/nav_drop/gift_drop/gift_bag.png' alt='laundry_img'/>
                                                <div className='navbar-drop-list-label'>GIFT BAG</div></li>
                                            <li>
                                                <img src='/images/nav_drop/gift_drop/gift_wrapper.png' alt='laundry_img'/>
                                                <div className='navbar-drop-list-label'>GIFT WRAPPER</div></li>
                                        </ul>
                                        <a href='/' className='navbar-drop-link'>VIEW ALL BAGS</a>
                                    </Col>
                                    <Col sm={4} className='navbar-drop-hero'><img src='/images/nav_drop/gift_drop/giftDropHero.png' alt='home_drop_hero'/></Col>
                                </Row>
                            </Collapse> : null
                        }
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav className='navbar-li'>Garden</Nav>
                    </Nav.Item>
                </Nav>
            </Container>  
            </>
        )
    }
}
