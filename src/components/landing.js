import '../App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";



function Landing() {
  return (
    <div className="App">
      <div>
        <h2> Are you a host or guest? </h2>
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