import React from "react";

function CreateUser() {
  return (
    <>
      <div
        className="modal fade"
        id="createUser"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h1
                className="modal-title fs-5 text-primary text-center"
                id="exampleModalLabel"
              >
                TẠO TÀI KHOẢN ADMIN
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body mb-4">
              <form className="py-3 px-5">
                <div className="mb-3">
                  <label htmlFor="userName" className="form-label">
                    Tên đăng nhập
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="userName"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Mật khẩu
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="confirm-password" className="form-label">
                    Nhập lại mật khẩu
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="confirm-password"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="admin-password" className="form-label">
                    Mật khẩu ADMIN
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="admin-password"
                  />
                </div>
                <button type="submit" className="btn btn-primary w-100 mt-3">
                  Xác Nhận
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateUser;
