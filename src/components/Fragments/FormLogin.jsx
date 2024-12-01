import InputForm from "../Elements/Input/Index"
import Button from "../Elements/Buttons/Index"

const FormLogin = (props) => {
    return(
        <form action="">
        <InputForm
            label="email" 
            name="email" 
            type="text" 
            id="email"
            placeholder="Example@gmail.com"
        ></InputForm>

        <InputForm 
            label="Password" 
            name="password" 
            type="password" 
            id="password"
            placeholder="Enter Your Pasword">
        </InputForm>
         <Button isi="Sign-Up"></Button>
       </form>
    )
}

export default FormLogin