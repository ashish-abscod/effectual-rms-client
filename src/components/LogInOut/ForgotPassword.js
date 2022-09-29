import React from "react";

export default function ForgotPassword() {
  return (
    <>
    <div className="modal fade" id="forgotPassModal" tabIndex="-1" aria-labelledby="forgotPassLabel" aria-hidden="true"  data-bs-backdrop="static" data-bs-keyboard="false">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header theme2-bg justify-content-between">
                            <h4 className="modal-title theme3-color fw-bold text-white" id="loginModalLabel">Forgot Password ?</h4>
                            <button type="button" className="btn btn-light" data-bs-dismiss="modal" aria-label="Close">Close</button>
                        </div>
                        <div className="modal-body px-4">
                            <p className='text-secondary'>Lost your password? Please enter your email address. You will receive a link to create a new password via email.</p>

                            <form id="forgotPassword" className="text-center" name="login-form">
                                <label className="text-secondary fs-5 mb-2" htmlFor="email">Your e-mail or username</label>
                                <input type="text" id="userId" className="form-control fs-5 text-secondary" name="email" placeholder='Your Email...'/>
                                <p className="status text-danger"></p>
                                <div className="mt-5 mb-4">
                                    <button className="btn theme2-bg text-white" type="submit">Reset Password</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal-body px-4">
              <p className="text-secondary">
                Lost your password? Please enter your username or email address.
                You will receive a link to create a new password via email.
              </p>

              <form
                id="forgotPassword"
                className="text-center"
                name="login-form"
              >
                <label className="text-secondary fs-5 mb-2" htmlFor="username">
                  Your e-mail or username
                </label>
                <input
                  type="text"
                  id="userId"
                  className="form-control fs-5 text-secondary"
                  name="username"
                />
                <p className="status text-danger"></p>
                <div className="mt-5 mb-4">
                  <button className="btn theme2-bg text-white" type="submit">
                    Reset Password
                  </button>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-outline-secondary px-4"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
    </>
  );
}
