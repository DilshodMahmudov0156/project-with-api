import React from 'react';

function PostData({ opener }) {
    return (
        <div className="my-modal container-fluid">
            <div className="row mt-5 justify-content-center">
                <div className="col-xl-4 col-md-5 col-sm-8">
                    <div className="card shadow-lg">
                        <h5 className="text-center mt-4">Add new person <i className="bi bi-person-add"></i></h5>
                        <hr/>
                        <form className="card-body p-4">
                            <input type="text" placeholder="Name..." className="form-control p-2 px-3"/>
                            <input type="text" placeholder="Role..." className="form-control p-2 px-3 my-3"/>
                            <input type="text" placeholder="@username..." className="form-control p-2 px-3 my-3"/>
                            <input type="number" placeholder="+998" className="form-control p-2 px-3"/>
                            <div className="d-flex">
                                <button className="btn btn-outline-danger d-block w-100 m-4" onClick={() => {opener("close")}}>Close <i
                                    className="bi bi-x-lg"></i>
                                </button>
                                <button className="btn btn-primary d-block w-100 m-4">Add <i
                                    className="bi bi-person-plus"></i>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PostData;