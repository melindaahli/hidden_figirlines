import WideButton from '../components/WideButton'

export default function Series() {

    return (
    <div className="items-center">
        This is the Series page. 
        The outermost div (above) should be a flex container or grid or smth like that.
        Some container to make it so that the image and right section are side by side.
        <div>
            This div is where the big box image should be.
        </div>
        <div className="">
            This div is where the right section should be.
            should be some type of container to make every thing vertically aligned (?)
            <div>back to boxes button.</div>
            <div>series name</div>
            <div>series description</div>
            <div>
                component that is a row of figurines (maybe try reusing ShelfRow?)
                new component is probably fine too.
            </div>
            <WideButton text={"OPEN BOX"} clickFunction={"function-that-will-open-boxes"} />
        </div>
    </div>
    );
}