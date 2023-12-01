import { memo } from "react";


function SCmp(props) {
    console.log("Scomponent");
    return(
        <h2>Second component</h2>
    )
}
export default memo(SCmp);