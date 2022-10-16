
import { Link } from 'react-router-dom';
import '../App.css';
import { GiCurledLeaf } from 'react-icons/gi'
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { gapi } from "gapi-script";
import { useEffect, useState } from 'react';




export default function Nav(props) {
    const {setUserId} = props

    const [profile, setProfile] = useState(null);


    useEffect(() => {
        const initClient = () => {
            gapi.client.init({
                clientId: '943245434171-itbj9c1d56lbbc35dinp3rdo7j1tfuth.apps.googleusercontent.com',
                scope: ''
            });
        };
        gapi.load("client:auth2", initClient)
    });

    const onSuccess = (res) => {
        console.log(res.googleId)
        setUserId(res.googleId)
        setProfile(res.profileObj);
    };
    const onFailure = (err) => {
        console.log('failed:', err);
    };
    const logOut = () => {
        setUserId("")
        setProfile(null);
    };


    return (
        <>
            {profile ? (
                <div className='navbar'>

                    <ul>
                        <li><Link to={'/'}><GiCurledLeaf /> hometree </Link> </li>
                        <li><Link to={'/'}> about </Link></li>
                        <li>
                            <GoogleLogout clientId='943245434171-itbj9c1d56lbbc35dinp3rdo7j1tfuth.apps.googleusercontent.com' buttonText="Log out" onLogoutSuccess={logOut} />
                        </li>
                    </ul>
                    <div className='profBanner'> <img src={profile.imageUrl} alt="user image" height={'60px'} /> </div>

                </div>

            )
                :
                (
                    <div className='navbar'>
                        <ul>
                            <li><Link to={'/'}><GiCurledLeaf /> hometree </Link> </li>
                            <li><Link to={'/'}> about </Link></li>
                            <li>
                                <GoogleLogin
                                    clientId='943245434171-itbj9c1d56lbbc35dinp3rdo7j1tfuth.apps.googleusercontent.com'
                                    scope=''
                                    onSuccess={onSuccess}
                                    onError={onFailure}
                                    cookiePolicy={'single_host_origin'}
                                    isSignedIn={true}
                                />
                            </li>
                        </ul>
                        <div className='profBanner'> </div>
                    </div>
                )
            }


        </>
    )
}