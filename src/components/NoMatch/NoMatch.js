import React from 'react';
import NotFound from '../../image/NoFound.gif';

const NoMatch = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col text-center">
                    <img src={NotFound} alt="" />
                </div>
            </div>
        </div>
    );
};

export default NoMatch;