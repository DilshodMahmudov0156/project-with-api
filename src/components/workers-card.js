import React from 'react';

function WorkersCard({data}) {
    return (
        <div className="col-xl-4 mt-4">
            <div className="card shaodw-lg">
                <div className="card-body">
                    <p><b>Ismi: </b>{data.name}</p>
                    <a href="" className="text-muted text-decoration-none">@{data.username}</a>
                    <a href="tel:000000000000" className="mt-3 d-block">{data.phone}</a>
                    <p className="mt-3"><b>Kasbi: </b>{data.role}</p>
                </div>
            </div>
        </div>
    );
}

export default WorkersCard;