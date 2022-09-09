import React from 'react'
export default function Login() {
    return (
        <>
            <div className="modal fade" id="loginModal" tabIndex="-1" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="loginModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header theme2-bg justify-content-center">
                            <h5 className="modal-title theme3-color fw-bold fs-3 text-white" id="loginModalLabel">Login</h5>
                        </div>
                        <div className="modal-body px-4">
                            <form id="login" className="text-center" name="login-form">
                                <p className="status"></p>
                                <label className="text-secondary fs-5 mb-2" htmlFor="username">Your e-mail or username</label>
                                <input type="text" id="username" className="form-control fs-5 text-secondary" name="username" /><br />
                                <label className="text-secondary fs-5 mb-2" htmlFor="password">Your password</label>
                                <input type="password" id="password" className="form-control fs-5 text-secondary" name="password" autoComplete="off" />
                                <div className="mt-5 mb-4">
                                    <a className="btn btn-outline-primary me-5" data-bs-target="#forgotPassModal" data-bs-toggle="modal" type="submit" data-bs-dismiss="modal">Forgot password?</a>
                                    <button className="btn theme2-bg text-white" type="submit" value="LOGIN">Login</button>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-outline-secondary px-4" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
