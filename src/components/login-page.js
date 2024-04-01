import React, {useState} from 'react';

function LoginPage({handleSubmit}) {

    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="container-fluid my-login-modal">
            <div className="row justify-content-center mt-5">
                <div className="col-xl-4 col-md-5 col-sm-8 mt-5">
                    <div className="card shadow-lg">
                        <h5 className="text-center mt-3">Shaxsiy ma'lmotingiz-***</h5>
                        <hr/>
                        <form className="card-body" onSubmit={(e) => {handleSubmit(e, {login: login, password: password})}}>
                            <input
                                type="text"
                                placeholder="login..."
                                className="form-control px-4 py-2"
                                onChange={(e) => setLogin(e.target.value)}
                            />
                            <input
                                type="password"
                                placeholder="parol-***"
                                className="form-control px-4 py-2 my-3"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <button className="btn btn-primary d-block w-50 mx-auto">Kirish</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;