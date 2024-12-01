import InputForm from "../Elements/Input/Index"
import Button from "../Elements/Buttons/Index"

const FormRegister = (props) => {
    return(
        <form action="">
        <InputForm
            label="name" 
            name="Name" 
            type="text" 
            placeholder="Your Name..."
        ></InputForm>

        <InputForm
            label="email" 
            name="Email" 
            type="text" 
            placeholder="Example@gmail.com"
        ></InputForm>

        <InputForm 
            label="Password" 
            name="password" 
            type="password" 
            placeholder="Enter Your Pasword">
        </InputForm>
         <Button isi="Sign-In"></Button>
       </form>
    )
}

export default FormRegister