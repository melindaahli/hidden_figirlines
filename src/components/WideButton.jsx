export default function WideButton(props) {
    return (
        <div>
            <button className="btn btn-wide btn-primary rounded-4xl lexend-deca-bold flex flex-col space-y-4 mt-4 text-2xl gaegu-regular"
                    onClick={() => props.clickFunction()}>
                {props.text}
            </button>
        </div>
    );
}