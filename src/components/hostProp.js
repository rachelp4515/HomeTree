import '../App.css';
import Backend from "../backend/"
import { useEffect, useState } from 'react';
import { GiExitDoor } from 'react-icons/gi'
import { Link } from 'react-router-dom';

function HostProp() {
    const [hostProp, setHostProp] = useState({})


    useEffect(() => {
        setHostProp(Backend.getProperty({}))
    }, [])
    
    return (
        <div className='propPage'>
            <div className='prop'>
                <h2> {hostProp.adrs} </h2>
                <Link to={'/rooms'}> <button> View Rooms </button> </Link>
                <div className='boxes'>
                    <div className='generalPropInfo'>
                        <h4> General Info </h4>
                        <p> <em> "{hostProp.about}" <br /> -{hostProp.fName} </em> </p>
                        <button> Edit Information </button>
                        <ul className='genInfoList'>
                            <li> + add emergency contacts </li>
                            <li> + add a guide book </li>
                            <li> + add a rule book </li>
                            <li> guest book </li>
                            <li> other </li>
                        </ul>
                    </div>
                    <div className='generalPropInfo'>
                        <h4><em> Guest View  <GiExitDoor /></em></h4>
                        <div className='coverImg'> + add a cover image </div>
                        <button> Options </button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default HostProp;