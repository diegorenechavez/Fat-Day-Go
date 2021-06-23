import React from 'react';
import GoogleLogin from 'react-google-login';



export const GoogleApiLogin = (props) => {
     
    console.log("these be props",props)
    const responseGoogle = (response) => {
        console.log(response);
        console.log(response.profileObj);
        let user = {
            firstname: response.profileObj.givenName,
            lastName: response.profileObj.givenName,
            email: response.profileObj.email,
            password:response.profileObj.googleId

        }
        console.log("this be the user",user)
       
        
    }

    return(

    <GoogleLogin
        clientId="83869903582-ce75735v88vfe9lbhgrcadil36basoh0.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
    />)
}



