import LeftButtonDouble from "../assets/angle-double-small-left.svg"

function LeftButton({onClick}){
    return (
        <div>
            <button onClick={onClick} className="btn btn-circle">
                <img src={LeftButtonDouble} alt="left button" className="size-[1.9em]" />
            </button>
        </div>
    );
}

export default LeftButton;