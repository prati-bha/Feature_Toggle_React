import React from 'react';
import "../App.scss"
const DisplayStaticData = (props) => {
    return (
        <div className="fontFamilyRoboto textJustified">
            {props.loading ? <div> <h1>Data is Loading </h1> </div> : <div> <h1>{props.title}</h1><h1> {props.description}</h1></div>}
        </div >
    )
}
export default DisplayStaticData;