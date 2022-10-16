import '../App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { Navigate } from "react-router-dom"


function Landing() {

  return (
    <div className="App">
      <div className='image-left'> <img src='./imgs/doortemplate.png' height='700' /></div>
      <div>
        <h1>HomeTree</h1>
            <span className='buttons'>
              <Link to={'/propertyForm'} ><button> host </button></Link>
              <button> guest </button>
            </span>
      </div>

      <div className='image-right'> <img src='./imgs/doortemplate.png' height='700' /></div>

    </div>

  );
}

export default Landing;