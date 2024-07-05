import { error } from "console";
import { useState } from "react";
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom";

export interface MyFormData {
    email : string,
    password : string
}
export function FormValidator() {

    let {register, handleSubmit, formState:{errors}} = useForm<MyFormData>();
    let [status, setStatus] = useState('Correct form errors');
    let navigateTo = useNavigate();

    function onMyFormSubmit(data:any) {
        console.log(data);
        setStatus("Form Submitted successfully");
        localStorage.setItem('user','agejywgfuyg')
        //Navigate to promises component
        navigateTo('/stickynotes')
    }

    return(
        <>
        <form onSubmit={handleSubmit(onMyFormSubmit)}>
            <div>
                <input id="email" {...register("email", {required : {value: true, message: 'Email is mandatory'}})}/>
                {errors.email ? <span className="error">{errors.email.message}</span> : ''}
            </div>
            <div>
                <input id='password' {...register('password', {required:{value: true, message: "Password is required"}})}/>
                {errors.password ? <span className="error">{errors.password.message}</span> : ''}
            </div>
            <button type="submit">Submit</button>
        </form>
        <h3 className="success">{status}</h3>
        </>
    )

}