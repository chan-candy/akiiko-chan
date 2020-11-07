import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import './App.css';


import ProductList from './components/ProductList/ProductList';
import ProductDetails from './components/ProductDetails/ProductDetails';

import BeachProducts from './assets/products/BeachProducts';
import BeachSimilarProducts  from './assets/products/BeachSimilarProducts';
import HomeLaundryProducts from './assets/products/HomeLaundryProducts';
import HomeMatProducts from './assets/products/HomeMatProducts';
import HomeProductListViewAll from './components/HomeProductListViewAlll/HomeProductListViewAll';


export default class App extends Component {
  // constructor(props){
  //   super(props);
  // }

  render() {
    return (
      <Router>
          <Header/>
          <Switch>
            <Route path='/' component={HomeScreen} exact />
            {/* Home */}
            <Route path='/home/laundry' render={(props) => (<ProductList {...props} 
              productListLabel={'Laundry'}
              productListText={'A practical range of organic cotton laundry bags that are designed to be functional yet easy on the eyes. The fresh range of eco-friendly laundry bags are available in various shapes and sizes, additionally with handles, stands or to hang behind your door - making them an essential for every home.'}
              productDetails={HomeLaundryProducts}
              similarProductListLabel={'Similar Products'}
              similarProductListText={'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur'}
              similarProductDetails={BeachSimilarProducts}/>)}/>
            <Route path='/home/mat' render={(props) => (<ProductList {...props} 
              productListLabel={'Mat'}
              productListText={'A range of eco-friendly fabric mats for the kitchen. The simple yet high quality vegan mats are usable & a great fit for a clean & healthy kitchen space.'}
              productDetails={HomeMatProducts}
              similarProductListLabel={'Similar Products'}
              similarProductListText={'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur'}
              similarProductDetails={BeachSimilarProducts}/>)}/>

            {/* Home View All */}
            <Route path='/home/all_products' render={(props) => (<HomeProductListViewAll {...props} 
              laundryProductListLabel={'Laundry'}
              laundryProductListText={'A practical range of organic cotton laundry bags that are designed to be functional yet easy on the eyes. The fresh range of eco-friendly laundry bags are available in various shapes and sizes, additionally with handles, stands or to hang behind your door - making them an essential for every home.'}
              laundryProductDetails={HomeLaundryProducts}
              matProductLis tLabel={'Mat'}
              matProductListText={'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur'}
              matProductDetails={HomeMatProducts}
              similarProductListLabel={'Similar Products'}
              similarProductListText={'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur'}
              similarProductDetails={BeachSimilarProducts}
              />)}/>

            {/* Beach */}
            <Route path='/beach' render={(props) => (<ProductList {...props} 
              productListLabel={'Beach'} 
              productListText={'A refreshing trip to the beach, made trendy with 100% natural fibre beach accessories. Airy beach mats to spacious & eye-catching totes, designed to store souvenirs of sunny & joyous days by the sea.'} 
              productDetails={BeachProducts} 
              similarProductListLabel={'Similar  Products'}
              similarProductListText={'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur'}
              similarProductDetails={BeachSimilarProducts}/>)} />

              <Route path='/product/:id' render={(props) => (<ProductDetails {...props} 
              productInfo={HomeLaundryProducts}/>)}/>
          </Switch>
          <Footer/>
      </Router>
    )
  }
}