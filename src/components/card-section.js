import React from 'react';
import Card from "./card";

function CardSection({ deletePerson, data}) {
    return (
        <div className="container mt-5">
            <div className="row mt-5">
                {data.map((item) => (<Card data={item} deletePerson={deletePerson} />))}
            </div>
        </div>
    );
}

export default CardSection;