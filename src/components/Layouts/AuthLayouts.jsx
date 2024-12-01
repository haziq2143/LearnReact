import FormLogin from "../Fragments/FormLogin"

FormLogin

const AuthLayouts = (props) => {
    const {title, children} = props
    return (
        <div className="w-full flex justify-center">
        <div className="max-w-full mx-auto mt-5">
            <h1 className='text-3xl font-bold text-yellow-500 text-center'>{title}</h1>
            <p className='text-center font-medium text-sm text-slate-400'>Welcome, Please Input Your Account</p>
          {children}
        </div>
        </div>
        
    )
}

export default AuthLayouts