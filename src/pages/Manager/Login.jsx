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
        <div className="container">
                <form method="post" className="d-flex flex-column gap-4 form-signin" onSubmit={handleSubmit}>
                <h3 className="form-signin-heading">Please sign in</h3>
                    <div className="d-flex flex-column gap-2 form-group">
                        <input
                            onChange={(e) => handleSetUserInput("m_id", e)}
                            value={userInput.m_id}
                            placeholder="관리자 아이디"
                            type="text"
                            className="form-control rounded-0" />
                        <input
                            onChange={(e) => handleSetUserInput("m_pw", e)}
                            value={userInput.m_pw}
                            placeholder="비밀번호"
                            type="password"
                            className="form-control rounded-0" />
                    </div>
                    <button className="btn btn-lg btn-primary btn-block" style={{ background: "#F29642" }}>로그인</button>
                </form>
        </div>
    )
}