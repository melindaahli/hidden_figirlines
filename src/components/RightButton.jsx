import RightButtonDouble from "../assets/angle-double-small-right.svg"

function RightButton({onClick}){
    return (
        <div>
            <button onClick={onClick} className="btn btn-circle">
                <img src={RightButtonDouble} alt="right button" className="size-[1.9em]" />
            </button>
        </div>
    );
}

export default RightButton;
