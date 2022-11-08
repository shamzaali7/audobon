import React from 'react';

function Home(props, lead, setLead){
    function handleBird(e){
        setLead(e.target.index);
    }

    return(
        <div className="container1">
            {props.Birds.map((element, index) => {
                return(
                    <div key={index} onClick={handleBird} className="box">
                    <a href={"/showpage/" + index} ><img src={element.image}></img></a>
                    </div>
                )
            })}
        </div>
    )
}

export default Home;
