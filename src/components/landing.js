import '../App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useCookies } from 'react-cookie';
import jwt_decode from 'jwt-decode';
import { Navigate } from "react-router-dom"


function Landing() {


  // const [cookie, setCookie, removeCookie] = useCookies("nToken")
  // // console.log(cookie)
  // let user = null
  // let isExpired = true
  // if (Object.keys(cookie).length != 0) {
  //   user = jwt_decode(cookie.nToken);
  //   isExpired = new Date(user.exp * 1000) < new Date()
  //   if (isExpired) {
  //     removeCookie("nToken")
  //   }
  // }

  return (
    <div className="App">
      <div>
        <h2> Home Tree </h2>
        <div className='buttons'>
          <Link to='/propertyForm'><button> host </button></Link>
          <button> guest </button>
        </div>
      </div>

      <div>
          {/* <img src='/imgs/door.jpg' /> */}
      </div>
    </div>

  );
}

export default Landing;