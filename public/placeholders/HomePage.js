import React from 'react';

export default class HomePage extends React.Component{
  render(){
    return(
      <div>
        <div className="welcome-website">
          <h1>Welcome to KervinGames!</h1>
          <section className="site-frame">
            <h2>This is a work-in-progress site that is running on NodeJS,
            while using ReactJS to render the pages on the fly. I have set up
            routing with react-router to allow a single page web app to be made
            so that response times are as low as possible. All user data
            is stored on a MySQL database and session data is
            taken care of through the NodeJS package: client-sessions. The account page uses ajax requests
            that query the MySQL database to check if the username/email being entered is already
            in use. Try entering the username 'brandonkervin' or the email 'brandonkervin@gmail.com'
            if you want to see what I am talking about! I am running on a raspberry pi.<br /><br />
            I have a problem when it comes to web development... Instead of implementing new ideas
            on my current project, I like to start from scratch and see how fast I can get it done.</h2>
          </section>
        </div>
        <div className="welcome-website">
          <h1>Access Account Page</h1>
          <section className="site-frame">
            <h2><a href="/account">Click here to access the account page!</a></h2><br /><br />
            <h2><a href="/counter">Click here to access some random counter I made!</a></h2><br /><br />
            <h2><a href="https://github.com/B-Curve/april-kervingames-?files=1">Click here to see the full source code of this website!</a></h2>
          </section>
        </div>
      </div>
    );
  }
}
