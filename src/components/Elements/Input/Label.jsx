const Label = (props) => {
    const {htmlFor, children} =  props
    return (
        <label htmlFor={htmlFor}className="block text-md font-semibold text-slate-700 ">{children}</label>
    )
}

export default Label