import React from 'react';
import { Match } from 'react-router';
import SiteLayout from './frames/SiteLayout';
import NotFoundPage from './frames/NotFoundPage';
import Counter from './Counter';

let About = () => {
  return <div>About us</div>
}

export default class Routes extends React.Component{
  render(){
    return(
      <div>
        <Match pattern="/" component={About}/>
      </div>
    );
  }
}
