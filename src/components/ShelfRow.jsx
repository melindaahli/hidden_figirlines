import Figure from '../components/Figure'

export default function ShelfRow(props) {
    return (
        <div>
            This is a shelf row that will contain all the figures of this series.
            It will wrap the Figures in a container so that they are using flex display?
            It will include the name of the series in the top left corner.

            Need to pass in Figure name ang image into the below Figure component.
            Try mapping.
            https://coursework.vschool.io/mapping-components-in-react/
            <Figure />
        </div>
    );
}