import React from 'react';
import Card from "./card";

function CardSection({ deletePerson, data, secondOpener}) {
    return (
        <div className="container-fluid mt-5">
            <div className="row mt-5">
                {data.map((item) => (<Card data={item} deletePerson={deletePerson} secondOpener={secondOpener}/>))}
            </div>
        </div>
    );
}

export default CardSection;
