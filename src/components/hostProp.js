import '../App.css';

function HostProp() {
    return (
        <div className='hostProp'>
            <h2> *Name of Property* </h2>
            <button> View Rooms </button>
            <div className='generalPropInfo'>
                <h4> General Info </h4>
                <ul className='genInfoList'>
                    <li> + add emergency contacts </li>
                    <li> + add a guide book </li>
                    <li> + add a rule book </li>
                    <li> guest book </li>
                    <li> other </li>
                </ul>
                
            </div>
        </div>
    )
}

export default HostProp;