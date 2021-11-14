import React from 'react';

const NewAddition = () => {
    return (
        <div className="py-5 container" id="newadditions">
            <h2> Check Our <span>New Additions</span></h2>
            <div className="row row-cols-md-2 row-cols-sm-1 row-cols-1 g-5  mb-5">
                <div>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/JwSa0e_Jjk4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div >
                <div>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/powB4956cOg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div >
        </div>
    );
};

export default NewAddition;