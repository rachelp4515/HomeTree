
export default function Rooms() {
    return (
        <div className="roomsPage">
            <div className="roomOptions">

                <h2>Property Rooms</h2>
                <ul>
                    <li> Manage Rooms </li>
                    <li> Edit Layout </li>
                    <li> View Questions </li>
                </ul>
            </div>

            <div className="rooms">
                <div className="singleRoom">
                    <h4> Kitchen </h4>
                </div>
                <div className="singleRoom">
                    <h4> Bedroom </h4>
                </div>
                <div className="singleRoom">
                    <h4> Bathroom </h4>
                </div>
            </div>
        </div>
    )
}