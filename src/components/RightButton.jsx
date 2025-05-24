import RightButtonDouble from "../assets/angle-double-small-right.svg"

function RightButton(props){
    return (
        <div>
            <button className="btn btn-circle">
                <img src={RightButtonDouble} alt="right button" className="size-[1.9em]" />
            </button>
        </div>
    );
}

export default RightButton;
