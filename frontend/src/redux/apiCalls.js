import { loginFail, loginStart, loginSuccess } from "./UserSlice"
import { publicRequest } from "../requestMethod"

export const login = async (dispatch, user) => {
    dispatch(loginStart())
    try {
        const res = await publicRequest.post("auth/login", user);
        console.log(res , "res")
        dispatch(loginSuccess(res?.data));
    } catch(err) {
          dispatch(loginFail())
    }
  
}