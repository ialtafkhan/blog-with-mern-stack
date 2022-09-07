import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import { deletSingleUserAction, getAllUserAction, userISAction } from '../../store/actions/userAction'

function User() {
    const [adminId, setadminId] = useState();
    const [userisAdmin, setuserisAdmin] = useState(true);
    const [deleteID, setdeleteID] = useState()
    const dispatch = useDispatch()
    const { users, isAdmin } = useSelector(state => state.allUsers)
    useEffect(() => {
        dispatch(getAllUserAction())
    }, [isAdmin])
    return (<>
        <div className="container-fluid mt-3">
            <div className="row">
                <table class="table  table-hover table-light ">
                    <thead>
                        <tr className='text-capitalize'>
                            <th scope="col">name</th>
                            <th scope="col">email</th>
                            <th scope="col">mobile</th>
                            <th scope="col">admin</th>
                            <th scope="col">action</th>
                            {/* <th scope="col">user Details</th> */}
                        </tr>
                    </thead>
                    <tbody>

                        {
                            users?.map((item) => (<tr key={item._id}>
                                <th >{item.userName}</th>
                                <th >{item.email}</th>
                                <th >{item.mobile}</th>
                                <th><button
                                    className='
                                  text-capitalize
                                   btn btn-outline-none'
                                    data-bs-toggle="modal"
                                    data-bs-target="#editModal"
                                    onClick={() => {
                                        setadminId(item._id)
                                        setuserisAdmin(item.isAdmin)
                                    }}

                                >edit</button>  </th>

                                <th> <button
                                    onClick={() => setdeleteID(item._id)}
                                    className='
                                 text-capitalize
                                  btn btn-outline-none'
                                    data-bs-toggle="modal"
                                    data-bs-target="#deleteModal"
                                >delete
                                </button> </th>

                                {/* <th> <Link to={'/user/profile'} >check-profile</Link> </th> */}

                            </tr>


                            ))
                        }


                    </tbody>
                </table>
            </div>
        </div>

        {/* edit modal */}

        <div class="modal fade" id="editModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        {
                            userisAdmin
                                ? "Are you sure you want to remove this user admin"
                                : "Are you sure you want to make this user as admin?"

                        }
                    </div>
                    <div className='d-flex justify-content-center gap-3' >
                        {
                            userisAdmin
                                ? <> <button onClick={() => {
                                    dispatch(userISAction(adminId, false))
                                }} className=' text-capitalize  btn btn-danger' data-bs-dismiss="modal" >remove</button> </>
                                : <> <button onClick={() => {
                                    dispatch(userISAction(adminId, true))
                                }} className=' text-capitalize  btn btn-danger' data-bs-dismiss="modal" >yes</button> </>
                        }
                        <button type="button" class=" text-capitalize btn btn-secondary" data-bs-dismiss="modal">no</button>
                    </div>


                    {/* <button type="button" class=" text-capitalize btn btn-primary" data-bs-dismiss="modal" >yes</button> */}

                </div>
            </div>
        </div>
        {/* edit modal */}

        {/* delet modal */}

        <div class="modal fade" id="deleteModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <h4> are you sure you want to delete this user.. </h4>
                    </div>

                    <div className="modal-footer">
                        <button onClick={() => dispatch(deletSingleUserAction(deleteID))} type="button" class=" text-capitalize btn btn-primary" data-bs-dismiss="modal" >yes</button>
                        <button type="button" class=" text-capitalize btn btn-primary" data-bs-dismiss="modal" >no</button>

                    </div>
                </div>
            </div>
        </div>
        {/* delet modal */}


    </>
    )
}




export default User
