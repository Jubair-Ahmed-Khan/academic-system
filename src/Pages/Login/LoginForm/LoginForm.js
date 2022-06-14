import React, { useState } from 'react';
import { Form, InputGroup } from 'react-bootstrap';
import { BiShow, BiHide } from "react-icons/bi";
import './LoginForm.css';

const LoginForm = () => {
    const [visible, setVisible] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    function handlePasswordVisibility() {
        setVisible(!visible);
    }
    function setValue(e) {
        e.target.id === 'mail' ? setEmail(e.target.value) : setPassword(e.target.value);
    }

    const logoSrc = "https://i.ibb.co/fFWMnnd/login-logo.png";

    return (
        <div className='form-width mx-auto my-4 p-3 shadow-lg'>
            <div className='pb-4 text-center'>
                <img src={logoSrc} className="img-fluid rounded mx-auto img-width" alt="" />
            </div>
            {/* enter email */}
            <InputGroup className="mb-2">
                <Form.Control size="lg" id="mail" placeholder="Email" onBlur={setValue} />
            </InputGroup>
            {/* enter password */}
            <InputGroup className="mb-2">
                <Form.Control size="lg" className='input-design' type={visible ? 'text' : 'password'} id="pass" placeholder="Password" onBlur={setValue} />
                <InputGroup.Text className='bg-white' onClick={handlePasswordVisibility} > {visible ? <BiShow className='fs-4' /> : <BiHide className='fs-4' />}</InputGroup.Text>
            </InputGroup>
            {/* enter login */}
            <Form.Group className="my-3 " controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Keep Me logged in" />
            </Form.Group>
            <button className='w-100 my-3 btn btn-outline-info fw-bold '>
                Log In
            </button>
        </div>
    );
}

export default LoginForm;


// import React from 'react';
// import { useForm } from "react-hook-form";


// const Login = () => {
//     const { register, handleSubmit, watch, formState: { errors } } = useForm();
//     const onSubmit = data => console.log(data);

//     console.log(watch("example"));

//     const logoSrc = "https://i.ibb.co/fFWMnnd/login-logo.png";

//     return (

//         <div className='border border-sm border-danger w-25 my-5 mx-auto' >
//             <form onSubmit={handleSubmit(onSubmit)}>
//                 <div>
//                     <img src={logoSrc} className="img-fluid rounded" style={{ "width": "10%" }} alt="" />
//                 </div>
//                 <div>
//                     <input defaultValue="test" {...register("example")} />
//                     <input {...register("exampleRequired", { required: true })} />
//                     {errors.exampleRequired && <span>This field is required</span>}
//                     <input type="submit" />
//                 </div>

//             </form>
//         </div>
//     );
// };

// export default Login;

