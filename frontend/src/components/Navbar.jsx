import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import { userLogoutAction } from '../store/actions/userAction'




function Navbar() {
    const dispatch = useDispatch()
    const { login } = useSelector(state => state.allUsers)
    console.log(login);
    const [isHovering, setisHovering] = useState()
    const [color, setcolor] = useState('grey')
    const handelMouseOver = () => setcolor("white")
    const handelMouseLeave = () => setcolor("grey")
    return (
        <nav class="navbar navbar-expand-lg bg-dark navbar-dark ">
            <div class="container ">
                <Link class="navbar-brand" to={'/'}>BLOGEE</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <Link class="nav-link active" to={'/'}> <i class="bi bi-house-door"></i> Home</Link>

                        {
                            login?.isAdmin && (<Link class="nav-link" to={'/admin/users'}  > <i class="fa fa-users" aria-hidden="true"></i> users</Link>


                            )
                        }
                        {
                            login
                                ? <>
                                    <div className='d-flex gap-2' >
                                        <img src={`http://localhost:5000/${login.profile}`} className=" rounded-circle" height={50} width={50} />
                                        <a className=' text-capitalize nav-link'> {login.userName} </a>
                                    </div>
                                    <Link class="nav-link" to={'/user/profile'}> <i class="bi bi-person"></i> profile</Link>

                                    <a style={{ cursor: 'pointer' }} className="nav-link" onClick={() => {
                                        dispatch(userLogoutAction())
                                    }}   > <i class="fa fa-power-off" aria-hidden="true"></i> Logout </a>

                                </>
                                : <><Link class="text-capitalize nav-link" to={'/register'}><i class="bi bi-person-lines-fill"></i> register</Link>
                                    <Link class="text-capitalize nav-link" to={'/login'}> <i class="bi bi-box-arrow-in-right"></i> login</Link></>
                        }


                    </div>

                    {
                        login && <div className='ms-auto' >
                            <Link
                                onMouseOver={handelMouseOver}
                                onMouseLeave={handelMouseLeave}
                                class="text-capitalize text-decoration-none "
                                style={{ color: color }}
                                to={'/addblog'}>
                                <i class="bi bi-plus-lg"></i>
                                add blog
                            </Link>
                        </div>
                    }
                </div>
            </div>
        </nav >
    )
}

export default Navbar



// {
//     login && (<div class="dropdown">
//         <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" >
//             {login.userName}
//         </button>
//         <ul class="dropdown-menu">
//             <li><Link class="dropdown-item" to={'/user/profile'}  >profile</Link></li>
//             <li><Link class="dropdown-item" to={'/admin/dashboard'}  >dashboard</Link></li>
//             <li><Link class="dropdown-item" to={'/admin/users'}  >users</Link></li>

//             <li><a class="dropdown-item" onClick={() => {
//                 dispatch(userLogoutAction())
//             }}   > Logout </a></li>


//         </ul>
//     </div>

//     )
// }
