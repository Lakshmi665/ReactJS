import { useState } from "react"
import { useForm } from "react-hook-form"
export interface FormData {
    name : string,
    age: string,
    email: string,
    password: string
}
export function RegistrationForm() {
    let [status, setStatus] = useState('');

    let onMyFormSubmit = (data:any) => {
        console.log(data)
        setStatus("Registration Form Submitted Successfully.......")
    }
    let {register,handleSubmit, formState: {errors}} = useForm<FormData>()
    return (
        <>
        <center>
            <h1>Registration form</h1>
         <form onSubmit={handleSubmit(onMyFormSubmit)}>
            <div>
            <label style={{marginRight: "25px"}}>Name:  </label>
            <input id="name" {...register("name", {required: {value: true, message:"Name is required."}})}/>
            {errors.name && <span style={{color: 'red'}}>{errors.name.message}</span>}
            </div>
            <div>
            <label style={{marginRight: "30px"}}>Age:  </label>
            <input id="age" {...register("age", {required: {value: true, message: "Age field required."}})}/>
            {errors.age && <span style={{color: 'red'}}>{errors.age.message}</span>}
            </div>
            <div>
            <label style={{marginRight: "20px"}}>Email:  </label>
            <input id="email" {...register("email", {required: {value: true, message:"Email field is required."}})}/>
            {errors.email && <span style={{color: 'red'}}>{errors.email.message}</span>}
            </div>
            <div>
            <label>Password:  </label>
            <input id="password" {...register("password", {required: {value: true, message: "Password field required."}})}/>
            {errors.password && <span style={{color: 'red'}}>{errors.password.message}</span>}
            </div>
            <button type="submit">Submit</button>
         </form>
         <h3 style = {{color: "green"}}>{status}</h3>
        </center>
        </>
    )
}