import React, { useState } from 'react'
import { useFormik } from 'formik'
import *as yup from 'yup'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { signUpUserAction } from '../store/actions/userAction'

function Register() {
    const dispatch = useDispatch()
    const [image, setimage] = useState()
    const [preview, setpreview] = useState()

    const formik = useFormik({
        initialValues: {
            userName: "altaf",
            email: "altaf@gmail.com",
            mobile: "7020989622",
            password: "123",
            cpassword: "123",

        },
        validationSchema: yup.object({
            userName:
                yup
                    .string()
                    .required("name can not be empty"),
            email:
                yup
                    .string()
                    .email("this is not valid email address")
                    .required("email can not be empty"),
            mobile:
                yup
                    .string()
                    .required("mobile can not be empty")
                    .min(10, "enter valid mobile number").max(10, "enter valid mobile number"),
            password:
                yup
                    .string()
                    .required("password can not be empty")
                    .min(3, "password can not be less than 3 charactors"),
            cpassword:
                yup.string()
                    .required("confirm password can not be empty")
                    .oneOf(
                        [yup.ref("password"), null],
                        "password and confirm password do not matched"
                    ),
        }),

        onSubmit: async ({ userName, email, mobile, password, cpassword }) => {
            // console.log(name);
            const fd = new FormData();
            fd.append("userName", userName)
            fd.append("email", email)
            fd.append("mobile", mobile)
            fd.append("password", password)
            fd.append("cpassword", cpassword)
            fd.append("image", image)

            dispatch(signUpUserAction(fd))


        }



    })


    const handleImage = e => {
        setpreview(URL.createObjectURL(e.target.files[0]))
        setimage(e.target.files[0])
    }

    return (
        <>
            <div class="container">
                {JSON.stringify(formik.errors)}
                {JSON.stringify(formik.values)}
                <div class="row">
                    <div class="col-sm-6 offset-sm-3">
                        <div class="card mt-3">
                            <div class="card-header">Signup</div>


                            <div class="card-body">
                                <form onSubmit={formik.handleSubmit} >
                                    <div>
                                        <label for="userName" class="form-label">First name</label>
                                        <input
                                            value={formik.values.userName}
                                            onChange={formik.handleChange}
                                            type="text"
                                            class="form-control"
                                            id="userName"
                                            placeholder="Enter your name"
                                        />
                                        <div class="valid-feedback">Looks good!</div>
                                        <div class="invalid-feedback">Please choose a username.</div>
                                    </div>
                                    <div class="mt-2">
                                        <label for="email" class="form-label">First Email</label>
                                        <input
                                            value={formik.values.email}
                                            onChange={formik.handleChange}
                                            type="text"
                                            class="form-control"
                                            id="email"
                                            placeholder="Enter Your Email"
                                        />
                                        <div class="valid-feedback">Looks good!</div>
                                        <div class="invalid-feedback">Please choose a username.</div>
                                    </div>
                                    <div class="mt-2">
                                        <label for="mobile" class="form-label">mobile</label>
                                        <input
                                            value={formik.values.mobile}
                                            onChange={formik.handleChange}
                                            type="text"
                                            class="form-control"
                                            id="mobile"
                                            placeholder="Enter Your mobile number"
                                        />
                                        <div class="valid-feedback">Looks good!</div>
                                        <div class="invalid-feedback">Please choose a username.</div>
                                    </div>

                                    <div class="mt-2">
                                        <label for="password" class="form-label">Password</label>
                                        <input
                                            value={formik.values.password}
                                            onChange={formik.handleChange}
                                            type="text"
                                            class="form-control"
                                            id="password"
                                            placeholder="Enter Your Password"
                                        />
                                        <div class="valid-feedback">Looks good!</div>
                                        <div class="invalid-feedback">Please choose a password.</div>
                                    </div>
                                    <div class="mt-2">
                                        <label for="cpassword" class="form-label"
                                        >Confirm Password</label
                                        >
                                        <input
                                            value={formik.values.cpassword}
                                            onChange={formik.handleChange}
                                            type="text"
                                            class="form-control"
                                            id="cpassword"
                                            placeholder="Confirm Your Password"
                                        />
                                        <div class="valid-feedback">Looks good!</div>
                                        <div class="invalid-feedback">
                                            Please Recheck Your Password.
                                        </div>
                                    </div>

                                    <div className='mt-2' >
                                        <label htmlFor="image" className='form-label' >chose file</label>
                                        <input

                                            onChange={handleImage}
                                            type="file"
                                            id="image"
                                            className='form-control'

                                        />

                                    </div>
                                    <div>
                                        <img
                                            src={preview}
                                            className="img-fluid"
                                            alt=""
                                            height={100}
                                        />

                                    </div>
                                    <button type="submit" class="btn btn-primary w-100 mt-3">
                                        Signup
                                    </button>
                                    <p class="text-center mt-3">
                                        Already Have Account? <Link to={'/login'}  >Login</Link>
                                    </p>
                                </form>
                            </div>


                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Register
