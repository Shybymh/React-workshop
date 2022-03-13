import React, { Component } from 'react';
import Directory from './DirectoryComponent';
import CampsiteInfo from './CampsiteInfoComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import { CAMPSITES } from '../shared/campsites';
import { COMMENTS } from '../shared/comments';
import { PARTNERS } from '../shared/partners';
import { PROMOTIONS } from '../shared/promotions';

// Main component working as container component, passing props to other presentational components and defining routes

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      campsites: CAMPSITES,
      comments: COMMENTS,
      partners: PARTNERS,
      promotions: PROMOTIONS
    };
  }

  // campsites, promotions and partners data being filtered by checking the boolean
  // attribute of featured and passes to Homepage as props to be rendered.
  
  // A specific view of selected campsite is generated dynamically using 
  // React Router parameters. 

  render() {
    const HomePage = () => {
      return (
        <Home 
          campsite={this.state.campsites.filter(campsite => campsite.featured)[0]}
          promotion={this.state.promotions.filter(promotion => promotion.featured)[0]}
          partner={this.state.partners.filter(partner => partner.featured)[0]}
        />
      );
    }
     
    const CampsiteWithId = ({match}) => {
      return (
        <CampsiteInfo 
          campsite={this.state.campsites.filter(campsite => campsite.id === +match.params.campsiteId)[0]}
          comments={this.state.comments.filter(comment => comment.campsiteId === +match.params.campsiteId)}
        />
      );
    };   

    return (
      <div>
        <Header />
        <Switch>
          <Route path='/home' component={HomePage} />
          <Route exact path='/directory' render={() => <Directory campsites={this.state.campsites} />} />
          <Route path='/directory/:campsiteId' component={CampsiteWithId} />
          <Route exact path='/contactus' component={Contact} />
          <Route exact path='/aboutus' render={() => <About partners={this.state.partners} />} />
          <Redirect to='/home' />
        </Switch>
        <Footer />
      </div>
    );
  }
}


export default Main;