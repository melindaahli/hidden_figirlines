import LeftButtonDouble from "../assets/angle-double-small-left.svg"

function LeftButton(props){
    return (
        <div>
            <button className="btn btn-circle">
                <img src={LeftButtonDouble} alt="left button" className="size-[1.9em]" />
            </button>
        </div>
    );
}

export default LeftButton;