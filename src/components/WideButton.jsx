export default function WideButton(props) {
    return (
        <div style={{ display: "flex", justifyContent: "center"}}>
            <button className="btn btn-wide btn-primary rounded-4xl lexend-deca-bold flex flex-col space-y-4 mt-4"
                    onClick={() => props.clickFunction()}>
                {props.text}
            </button>
        </div>
    );
}