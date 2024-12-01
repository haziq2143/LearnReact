import AuthLayouts from "../Layouts/AuthLayouts";
import FormLogin from "../Fragments/FormLogin";
import { Link } from "react-router-dom";
const LoginPage = () => {
    return (
        <AuthLayouts title="Login">
              <FormLogin/>
              <p className="text-sm font-medium text-gray-400">don't have an account?
                <Link to="/register" className="text-yellow-500 hover:text-yellow-300">
                Sign Up
                </Link>
                </p>
        </AuthLayouts>
    )
}
export default LoginPage