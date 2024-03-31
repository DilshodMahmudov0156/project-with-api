import React from 'react';

function LoginPage({}) {
    return (
        <div className="container-fluid my-modal">
            <div className="row justify-content-center mt-5">
                <div className="col-xl-4 col-md-5 col-sm-8 mt-5">
                    <div className="card shadow-lg">
                        <h5 className="text-center mt-3">Ro'yxatdan o'ting!</h5>
                        <hr/>
                        <form action="" className="card-body">
                            <input type="text" placeholder="login..." className="form-control px-4 py-2"/>
                            <input type="password" placeholder="parol-***" className="form-control px-4 py-2 my-3"/>
                            <button className="btn btn-primary d-block w-50 mx-auto">Kirish</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;