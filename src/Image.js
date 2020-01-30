import React from "react";

function image(props) {
    console.log(props.name);
    const imgSrc = `${process.env.PUBLIC_URL}/img/${props.name}.jpg`
    return(
                <div className="img-wrapper">
                    <figcaption>
                        <img src={imgSrc}/>
                    </figcaption>
                </div>
    );
}
export default image;