export default function Figure(props) {
    return (
        <div>
            This is a figure.
            It will have an image and 
            a small text of its name below.
            Its data is passed in via props.
            Grayscale (?) image if we know it's not found yet. 
            maybe do: (props.show) ? (props.image) : (props.silhouette / silohuette that's imported so we don't need to pass in?)
        </div>
    );
}