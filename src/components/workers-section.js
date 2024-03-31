import React from 'react';
import WorkersCard from "./workers-card";

function WorkersSection({data}) {
    return (
        <div className="container-fluid mt-5">
            <div className="row mt-5">
                {data.map((item) => (<WorkersCard data={item}/>))}
            </div>
        </div>
    );
}

export default WorkersSection;