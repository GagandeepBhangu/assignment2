import React from 'react';

const Subjects = ({ subjects }) => {
    return (
        <div>
            {
                subjects.map(
                    (subject) => (
                        <div key={subject["Item"]} className="p-5 text-center">
                            <div className="card border-dark text-light bg-danger col p-3 m-2">
                            <h1 class="card-header">{subject["Item"]}</h1>
                            <div className="card-body">
                            <img className="shadow-lg mx-auto w-100 p-1" src={subject["Image"]}></img>
                                <br></br>
                                <br></br>
                                <br></br>
                            <h3><strong>{subject["Object"]}</strong></h3>
                            <p>{subject["Procedures"]}</p>
                            <br></br>
                            <h3><strong>Description</strong></h3>
                            <p>{subject["Description"]}</p>
                            <br></br>
                            <h3><strong>Reference</strong></h3>
                            <p>{subject["Reference"]}</p>
                            </div>
                            </div>
                        </div>
                    )
                )
            }
        </div>
    )
};

export default Subjects