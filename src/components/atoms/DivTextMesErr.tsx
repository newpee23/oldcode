import { DivTxtMesErr } from "../../types/atomsType";

const DivTextMesErr = (props: DivTxtMesErr) => {
    return (
        <div className={props.className}>
            <span>{props.text}</span>
        </div>
    )
}
export default DivTextMesErr;