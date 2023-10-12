import { DivHrType } from "../../types/atomsType";


const DivHr = (props: DivHrType) => {
    return (
        <div className={props.divClass}>
            <hr className={props.className}></hr>
        </div>
    )
}

export default DivHr;