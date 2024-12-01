const Input = (props) => {
    const {type, placeholder, name} = props
    return (
        <input type={type} name={name} className='font-medium text-slate-700 px-3 py-2 border rounded-md w-full placeholder:opacity-50 placeholder:font-medium' placeholder={placeholder} />
    )
}

export default Input