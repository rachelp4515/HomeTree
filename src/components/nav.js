
import { Link } from 'react-router-dom';
import '../App.css';
import { GiCurledLeaf } from 'react-icons/gi'


export default function Nav(){
    return(
        <div className='navbar'>
            <ul>
            {/* make link tos */}
                <li><Link to={'/'}><GiCurledLeaf/> hometree </Link> </li>
                <li><Link to={'/'}> about </Link></li>
                <li><Link to={'/signUp'}> sign up </Link></li>
            </ul>
            <div className='profBanner'>

            </div>
        </div>
    )
}