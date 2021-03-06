import React from 'react';
import AccountForm from '../placeholders/AccountForm';
import Counter from '../Counter';
import HomePage from '../placeholders/HomePage';
import Forums from '../placeholders/Forums';
import NotFoundPage from './NotFoundPage';
import { Route, Redirect, Switch } from 'react-router';
import $ from 'jquery';

export default class DesktopLayout extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      isDropped: false,
      isLogged: 'NOT SIGNED IN',
      canLogout: 'PAGE LOCKED'
    }
  }

  getActive(activeUrl){
    if(window.location.pathname === activeUrl){
      return 'active';
    }
  }

  redirectTo(getLink){
    if(getLink == 'twitter'){
      window.location.href = 'https://twitter.com/brandonkervin';
    }
    if(getLink == 'facebook'){
      window.location.href = 'https://www.facebook.com/brandon.kervin'
    }
    if(getLink == 'github'){
      window.location.href = 'https://github.com/b-curve';
    }
    if(getLink == 'linkedin'){
      window.location.href = 'https://www.linkedin.com/in/brandon-k-46165991/';
    }
    if(getLink == 'youtube'){
      window.location.href = 'https://www.youtube.com/user/brandonkervin97';
    }
  }

  render(){
    return(
      <div>
        <link href="https://fonts.googleapis.com/css?family=Abel" rel="stylesheet" />
        <link rel="stylesheet" type="text/css" href="/static/css/desktopProps.css" />
        <header className="desktop-header">
          <h1>KervinGames(WIP)</h1>
            <navbar className="desktop-navigator">
              <ul>
                <li><a href="http://kervingames.com" className={this.getActive('/')}>HOME</a></li>
                <li><a href="http://kervingames.com/account" className={this.getActive('/account')}>ACCOUNT</a></li>
                <li><a href="http://kervingames.com/forums" className={this.getActive('/forums')}>FORUMS</a></li>
                <li>{this.state.canLogout}</li>
                <li>{this.state.isLogged}</li>
              </ul>
            </navbar>
        </header>
        <section className="desktop-body">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/counter" component={Counter} />
            <Route path="*" component={NotFoundPage} />
          </Switch>
        </section>
        <footer className="desktop-footer">
          <img src="/static/images/twitter.gif" alt="twitter" onClick={() => this.redirectTo('twitter')} />
          <img src="/static/images/facebook.png" alt="facebook" onClick={() => this.redirectTo('facebook')} />
          <img src="/static/images/github.png" alt="github" onClick={() => this.redirectTo('github')} />
          <img src="/static/images/linkedin.png" alt="linkedin" onClick={() => this.redirectTo('linkedin')} />
          <img src="/static/images/youtube.png" alt="youtube" onClick={() => this.redirectTo('youtube')} />
          <ul>
            <li>CONTACT</li>
            <li>ABOUT</li>
            <li>TERMS &amp; CONDITIONS</li>
          </ul>
        </footer>
      </div>
    );
  }
}
