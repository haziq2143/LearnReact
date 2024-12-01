import AuthLayouts from "../Layouts/AuthLayouts";
import { Link } from "react-router-dom";
import FormRegister from "../Fragments/FormRegister";
const RegisterPage = () => {
    return (
        <AuthLayouts title="Register">
              <FormRegister/>
              <p className="text-sm font-medium text-gray-400">have an account? 
                <Link to="/login" className="text-yellow-500 hover:text-yellow-300">
                 Sign In
                </Link>
                </p>
        </AuthLayouts>
    )
}
export default RegisterPage