export default function WideButton(props) {
    return (
        <div>
            <button className="btn btn-wide btn-primary rounded-4xl lexend-deca-bold"
                    onClick={() => props.clickFunction()}>
                {props.text}
            </button>
        </div>
    );
}