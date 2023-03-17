import { useEffect, useState } from "react"
import { login } from "../../apis/auth.api"
import Cookies from "universal-cookie"
import { useNavigate } from "react-router-dom"
import { isLoggedIn } from "../../utils/functions"

export default () => {
    const [userInput, setUserInput] = useState({ m_id: "", m_pw: "" })
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const DAY_TO_MS = 86400000
        const res = await login(userInput)
        const cookies = new Cookies()
        if (res.status == "err") {
            alert(res.msg)
        } else {
            const { access_token, msg } = res
            alert(msg)
            cookies.set("amante-acs-tk", access_token, {path: "/", sameSite: "lax", expires: new Date(Date.now() + DAY_TO_MS)})
            window.location.href = "/manager/dashboard"
        }
    }


    const handleSetUserInput = (input, e) => {
        switch (input) {
            case "m_pw":
                setUserInput({ m_pw: e.target.value, m_id: userInput.m_id })
                break
            default:
                setUserInput({ m_id: e.target.value, m_pw: userInput.m_pw })
                break
        }
    }

    return (
        // <div className="container">
                // <form method="post" className="d-flex flex-column gap-4 form-signin" onSubmit={handleSubmit}>
                //     <h3 className="form-signin-heading">Please sign in</h3>
                //     <div className="d-flex flex-column gap-2 form-group">
                //         <input
                //             onChange={(e) => handleSetUserInput("m_id", e)}
                //             value={userInput.m_id}
                //             placeholder="관리자 아이디"
                //             type="text"
                //             className="form-control rounded-0" />
                //         <input
                //             onChange={(e) => handleSetUserInput("m_pw", e)}
                //             value={userInput.m_pw}
                //             placeholder="비밀번호"
                //             type="password"
                //             className="form-control rounded-0" />
                //     </div>
                //     <button className="btn btn-lg btn-primary btn-block" style={{ background: "#F29642" }}>로그인</button>
                // </form>
        // </div>
        <main className="main-content  mt-0">
        <div className="page-header align-items-start min-vh-100">
          <span className="mask bg-gradient-dark opacity-6"></span>
          <div className="container my-auto">
            <div className="row">
              <div className="col-lg-4 col-md-8 col-12 mx-auto">
                <div className="card z-index-0 fadeIn3 fadeInBottom">
                  <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                    <div className="bg-gradient-primary shadow-primary border-radius-lg py-3 pe-1">
                      <h4 className="text-white font-weight-bolder text-center mt-2 mb-0">Sign in</h4>
                      <div className="row mt-3">
                        <div className="col-2 text-center ms-auto">
                          <a className="btn btn-link px-3" href="javascript:;">
                            <i className="fa fa-facebook text-white text-lg"></i>
                          </a>
                        </div>
                        <div className="col-2 text-center px-1">
                          <a className="btn btn-link px-3" href="javascript:;">
                            <i className="fa fa-github text-white text-lg"></i>
                          </a>
                        </div>
                        <div className="col-2 text-center me-auto">
                          <a className="btn btn-link px-3" href="javascript:;">
                            <i className="fa fa-google text-white text-lg"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <form role="form" className="text-start" method="post" onSubmit={handleSubmit}>
                      <div className="input-group input-group-outline my-3">
                        <label className="form-label">User</label>
                        
                        <input
                            onChange={(e) => handleSetUserInput("m_id", e)}
                            value={userInput.m_id}
                            placeholder="관리자 아이디"
                            type="text"
                            className="form-control rounded-0" />
                      </div>
                      <div className="input-group input-group-outline mb-3">
                        <label className="form-label">Password</label>
                        <input
                            onChange={(e) => handleSetUserInput("m_pw", e)}
                            value={userInput.m_pw}
                            placeholder="비밀번호"
                            type="password"
                            className="form-control rounded-0" />
                      </div>
                      <div className="form-check form-switch d-flex align-items-center mb-3">
                        <input className="form-check-input" type="checkbox" id="rememberMe" checked/>
                        <label className="form-check-label mb-0 ms-3" for="rememberMe">Remember me</label>
                      </div>
                      <div className="text-center">
                        <button  className="btn bg-gradient-primary w-100 my-4 mb-2">Sign in</button>
                        {/* <button className="btn btn-lg btn-primary btn-block" style={{ background: "#F29642" }}>로그인</button> */}
                      </div>
                      <p className="mt-4 text-sm text-center">
                        Don't have an account?
                        <a href="../pages/sign-up.html" className="text-primary text-gradient font-weight-bold">Sign up</a>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer className="footer position-absolute bottom-2 py-2 w-100">
            <div className="container">
              <div className="row align-items-center justify-content-lg-between">
                <div className="col-12 col-md-6 my-auto">
                  <div className="copyright text-center text-sm text-white text-lg-start">
                    © <script>
                      document.write(new Date().getFullYear())
                    </script>,
                    made with <i className="fa fa-heart" aria-hidden="true"></i> by
                    <a href="https://www.creative-tim.com" className="font-weight-bold text-white" target="_blank">Creative Tim</a>
                    for a better web.
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <ul className="nav nav-footer justify-content-center justify-content-lg-end">
                    <li className="nav-item">
                      <a href="https://www.creative-tim.com" className="nav-link text-white" target="_blank">Creative Tim</a>
                    </li>
                    <li className="nav-item">
                      <a href="https://www.creative-tim.com/presentation" className="nav-link text-white" target="_blank">About Us</a>
                    </li>
                    <li className="nav-item">
                      <a href="https://www.creative-tim.com/blog" className="nav-link text-white" target="_blank">Blog</a>
                    </li>
                    <li className="nav-item">
                      <a href="https://www.creative-tim.com/license" className="nav-link pe-0 text-white" target="_blank">License</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </main>
    )
}