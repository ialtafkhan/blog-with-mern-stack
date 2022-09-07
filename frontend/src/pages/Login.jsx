import React from 'react'
import { useFormik } from 'formik'
import *as yup from 'yup'
import { useDispatch, useSelector } from 'react-redux'
import { userLoginAction } from '../store/actions/userAction'
import { Link, useNavigate } from 'react-router-dom'
function Login() {
    const { login } = useSelector(state => state.allUsers)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues: {
            email: "altaf@gmail.com",
            password: "123",


        },
        validationSchema: yup.object({

            email:
                yup
                    .string()
                    .email("this is not valid email address")
                    .required("email can not be empty"),

            password:
                yup
                    .string()
                    .required("password can not be empty")
                    .min(3, "password can not be less than 3 charactors"),

        }),

        onSubmit: (fd) => {
            console.log(fd);
            dispatch(userLoginAction(fd))


        }
    })

    React.useEffect(() => {
        login && navigate('/')

    }, [login])


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

                                    <button type="submit" class="btn btn-primary w-100 mt-3">
                                        Login
                                    </button>
                                    <p class="text-center mt-3">
                                        Don't Have Account? <Link to={'/register'} >Register</Link>
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

export default Login