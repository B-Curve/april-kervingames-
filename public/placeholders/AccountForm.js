import React from 'react';
import $ from 'jquery';

export default class AccountForm extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      userCreate: '',
      passCreate: '',
      confirmCreate: '',
      emailCreate: '',
      userLog: '',
      passLog: '',
      usernameTaken: '',
      emailTaken: '',
      passwordPrompt: '',
      confirmPrompt: ''
    }
  }

  findIfExists(usernameEnter, emailEnter){
    var self = this;
    var entryType;
    var whatItIs;
    if(usernameEnter == null){
      entryType = 'email';
      whatItIs = emailEnter;
    }else{
      entryType = 'username';
      whatItIs = usernameEnter;
    }
    $.ajax({
      type: 'POST',
      url: '/findIfExists',
      data: {entryType, whatItIs},
      success: function(data){
        if(data == 'taken'){
          showTaken();
        }else{
          notTaken();
        }
      }
    });
    function showTaken(){
      if(entryType === 'email'){
        self.setState({emailTaken: 'Email is in use.'});
      }else{
        self.setState({usernameTaken: 'Username is in use.'});
      }
    }
    function notTaken(){
      if(entryType === 'email'){
        self.setState({emailTaken: ''});
      }else{
        if(self.state.userCreate.length < 6 && self.state.userCreate.length !== 0){
          self.setState({usernameTaken: 'Username too short.'});
        }else{
          self.setState({usernameTaken: ''});
        }
      }
    }
  }

  updateNewUser(e){
    let usernameEnter = e.target.value;
    this.setState({userCreate: usernameEnter});
    this.findIfExists(usernameEnter, null);
  }

  updateNewPass(e){
    let password = e.target.value;
    this.setState({passCreate: password});
    if(password.length < 6 && password.length !== 0){
      this.setState({passwordPrompt: 'Password too short.'});
    }else{
      this.setState({passwordPrompt: ''});
    }
  }

  confirmPass(e){
    let confirm = e.target.value;
    this.setState({confirmCreate: confirm});
    if(confirm !== this.state.passCreate && confirm.length !== 0){
      this.setState({confirmPrompt: 'Passwords do not match.'});
    }else{
      this.setState({confirmPrompt: ''});
    }
  }

  updateNewEmail(e){
    let emailEnter = e.target.value;
    this.setState({emailCreate: emailEnter});
    this.findIfExists(null, emailEnter);
  }

  updateLogUser(e){
    let username = e.target.value;
    this.setState({userLog: username});
  }

  updateLogPass(e){
    let password = e.target.value;
    this.setState({passLog: password});
  }

  createUser(){
    let username = this.state.userCreate,
        password = this.state.passCreate,
        email = this.state.emailCreate;
    if(this.state.usernameTaken == '' && this.state.emailTaken == '' && this.state.passwordPrompt == '' && this.state.confirmPrompt == ''){
      if(this.state.userCreate.length > 0 && this.state.emailCreate.length > 0 && this.state.passCreate.length > 0 && this.state.confirmCreate.length > 0){
        $.ajax({
          type: 'POST',
          url: '/submitNewUser',
          data: {username, password, email},
          success: function(data){}
        });
      }else{
        alert('Missing a required field!');
      }
    }else{
      alert('One or more field(s) invalid!');
    }
  }

  loginUser(){
    alert('No functionality yet!');
  }

  render(){
    return(
      <div>
        <div className="account-form">
          <h1>Sign Up</h1>
          <form className="form-creds" id="sign-up" onSubmit={this.createUser.bind(this)}>
            <input type="text" placeholder="*Username" id="signUser" value={this.state.userCreate} onChange={this.updateNewUser.bind(this)}/>
            <h2>{this.state.usernameTaken}</h2>
            <input type="password" placeholder="*Password" id="signPass" value={this.state.passCreate} onChange={this.updateNewPass.bind(this)} />
            <h2>{this.state.passwordPrompt}</h2>
            <input type="password" placeholder="*Confirm Password" id="signConfirm" value={this.state.confirmCreate} onChange={this.confirmPass.bind(this)} />
            <h2>{this.state.confirmPrompt}</h2>
            <input type="email" placeholder="*E-Mail Address" id="signEmail" value={this.state.emailCreate} onChange={this.updateNewEmail.bind(this)} /><br />
            <h2>{this.state.emailTaken}</h2><br />
            <button>Submit</button>
          </form>
        </div>
        <div className="account-form">
          <h1>Sign In</h1>
          <form className="form-creds" id="sign-in" onSubmit={this.loginUser.bind(this)}>
            <input type="text" placeholder="Username" id="logUser" value={this.state.userLog} onChange={this.updateLogUser.bind(this)} /><br />
            <input type="password" placeholder="Password" id="logPass" value={this.state.passLog} onChange={this.updateLogPass.bind(this)} /><br /><br />
            <button>Submit</button>
          </form>
        </div>
        <script>
          e.preventDefault();
        </script>
      </div>
    );
  }
}
