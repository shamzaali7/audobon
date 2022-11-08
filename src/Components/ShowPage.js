import React from 'react';
import {useParams} from 'react-router-dom';


function ShowPage(props, lead){
    const { index }  = useParams()

    return(
        <div className="showPage">
            <div className="bird">
                <img src={props.Birds[index].image} height="150px"></img>
            </div>
            <div className="show">
                <p className="Head">{props.Birds[index].name}</p>
                <p>({props.Birds[index].genus})</p>
                <p className="para"><p className="cons">Conservation Status:</p>{props.Birds[index].conservationStatus}</p>
                <a href={props.Birds[index].homepage}>Read More</a>
            </div>
        </div>
    )
}

export default ShowPage