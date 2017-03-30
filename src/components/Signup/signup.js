import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar';

import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import Paper from 'material-ui/Paper';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import './signup.css'


function handleTouchTap() {
    alert('onTouchTap triggered on the title component');
}
const style = {
    margin: 12,
};
const styles = {
    paper: {
        height: 350,
        width: 400,
        margin: 70,
        textAlign: 'center',
        display: 'inline-block',
    },
};



class Signup extends Component {
    constructor(props){
        super(props)
            this.login = this.login.bind(this)
    }

login(ev) {
    ev.preventDefault();
    let email = this.refs.email.getValue();
    let pass = this.refs.pass.getValue();
    
    console.log(email);
    console.log(pass);
}

    render() {
        return (
            <div>

                <AppBar className="abc"
                    title={<span>Blood Bank</span>}
                    iconElementLeft={<IconButton></IconButton>}

                    iconElementRight={<FlatButton label="Create Account"> </ FlatButton>}
                />
                <Paper style={styles.paper} zDepth={2} >

                        <center>
                            <br />
                            <h1>Sign Up</h1>
                            <TextField
                                hintText="Enter your email"
                                floatingLabelText="Email Address"
                                ref="email"
                                type="Email"
                                required = "required"
                            /><br />
                            <TextField
                                hintText="Enter your password"
                                ref="pass"
                                type="Password"
                                floatingLabelText="Password"
                            /><br />
                            <br />
                            <RaisedButton type="button" onClick={this.login} label="Login" primary={true} style={style} />
                        </center>
                </Paper>


            </div>
        )

    }
}

export default Signup;