import { GoogleLogin } from '@react-oauth/google';
// eslint-disable-next-line camelcase
import { jwtDecode } from "jwt-decode";

const GoogleButton = () => {
    return (
        <>
            <GoogleLogin
                onSuccess={credentialResponse => {
                    console.log(credentialResponse.credential);
                    const decodeding = jwtDecode(credentialResponse.credential);
                    console.log(decodeding)
                }}
                onError={() => {
                    console.log('Login Failed');
                }}
            />
        </>
    )
}

export default GoogleButton;