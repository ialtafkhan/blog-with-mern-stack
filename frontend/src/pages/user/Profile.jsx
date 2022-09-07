import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteBlogAction, myBlogAction, updateBlogAction } from '../../store/actions/blogAction'
import { format } from 'date-fns'
import { useFormik } from 'formik'
import './style.scss'
import *as yup from 'yup'
function Profile() {
    const [eheading, seteheading] = useState()
    const [esubHeading, setesubHeading] = useState()
    const [edate, setedate] = useState()
    const [edesc, setedesc] = useState()
    const [image, setimage] = useState()
    const [eblogType, seteblogType] = useState()
    const [editId, seteditId] = useState()
    const [deleteId, setdeleteId] = useState()
    const [preview, setpreview] = useState()
    const [isReadMoreShow, setisReadMoreShow] = useState(false)
    const [selectedBlog, setselectedBlog] = useState({})
    const dispatch = useDispatch()
    const { myBlog: blogs, isUpdated, isDeleted } = useSelector(state => state.allBlogs)
    const { login } = useSelector(state => state.allUsers)

    const populateBlog = (id) => {
        const blog = blogs.find(item => item._id === id)
        setselectedBlog(blog)

    }

    useEffect(() => {

        dispatch(myBlogAction())

    }, [isUpdated, isDeleted])


    const formik = useFormik({
        enableReinitialize: true,

        initialValues: {
            heading: eheading,
            subHeading: esubHeading,
            desc: edesc,
            date: edate,
            blogType: eblogType
        },
        validationSchema: yup.object({
            heading: yup.string().required("please entre something"),
            subHeading: yup.string().required("please entre something"),
            desc: yup.string().required("please entre something"),
            date: yup.string().required("please entre something"),
            blogType: yup.string().required("plz"),

        }),
        onSubmit: ({ heading, subHeading, desc, date, blogType }) => {
            console.log(heading, subHeading, desc, date, blogType);

            const fd = new FormData()
            fd.append("heading", heading)
            fd.append("subHeading", subHeading)
            fd.append("desc", desc)
            fd.append("date", date)
            fd.append("blogType", blogType)
            fd.append("image", image)

            dispatch(updateBlogAction(editId, fd))


        }


    })

    const handleImage = (e) => {
        setpreview(URL.createObjectURL(e.target.files[0]))
        setimage(e.target.files[0])

    }

    const handleShow = () => setisReadMoreShow(pre => !pre)

    const styles = {
        border: "1px solid black",
        padding: "3px",
        borderRadius: "5px",
        backgroundColor: "yellow",
        color: "#000",
        fontWeight: "500"


    }
    return (<>
        <div className="container-fluid">
            <div className="row mt-3 profile">
                <div className="col">
                    <div className='body' >
                        {/* <p> user Profile </p> */}
                        <h3>profile</h3>
                        <img
                            src={`http://localhost:5000/${login.profile}`}
                            className="img-fluid"

                            alt="" />
                        <h5 className="user-name"> {login.userName} </h5>
                    </div>

                </div>

            </div >

            <div className="row mt-3 ">
                <div className="col-sm-4">
                    <ul class="list-group">
                        {
                            blogs.map(item => (<div key={item._id}>

                                <li
                                    style={{ cursor: "pointer", }}
                                    onClick={() => populateBlog(item._id)}
                                    class={
                                        item._id === selectedBlog._id
                                            ? "list-group-item bg-dark text-white "
                                            : "list-group-item"
                                    }
                                >
                                    {item.heading}
                                </li>
                            </div>
                            ))
                        }
                    </ul>
                </div>

                <div className="col-sm-4">
                    {
                        selectedBlog.heading && (<>
                            <div className="card">
                                <h1 className='mt-2'  > {selectedBlog.heading} </h1>
                                <div className='d-flex justify-content-between mt-2 '  >
                                    <p>
                                        <i className='bi bi-watch' ></i>
                                        {format(new Date(selectedBlog.date), "MM/dd/yyyy")}
                                    </p>
                                    <p className='text-capitalize'
                                        style={styles} > {selectedBlog.blogType} </p>
                                </div>



                                <img src={`http://localhost:5000/${selectedBlog.image}`} alt={selectedBlog.heading} />
                            </div>
                            <div className="card-body">

                                <p className='mt-2'>{selectedBlog.subHeading}</p>
                                <p className='mt-2'>
                                    {isReadMoreShow ? selectedBlog.desc : selectedBlog.desc.substr(0, 250)}

                                    <a style={{ color: "blue", cursor: "pointer" }} onClick={handleShow} >{!isReadMoreShow ? "... Read more " : " Read Less"}</a>
                                </p>


                                <div className='d-flex justify-content-end gap-3 ' >
                                    {
                                        !selectedBlog.show && <button
                                            onClick={() => {
                                                seteheading(selectedBlog.heading)
                                                setesubHeading(selectedBlog.subHeading)
                                                setedate(selectedBlog.date)
                                                setedesc(selectedBlog.desc)
                                                seteblogType(selectedBlog.blogType)
                                                seteditId(selectedBlog._id)
                                                setselectedBlog({ ...selectedBlog, show: true })
                                            }}

                                            className='btn btn-outline-primary'
                                        >
                                            <i className='bi bi-arrow-right'> </i>
                                        </button>
                                    }


                                    <button
                                        onClick={() => setdeleteId(selectedBlog._id)}
                                        className='btn btn-outline-danger '
                                        data-bs-toggle="modal"
                                        data-bs-target="#deleteModal"
                                    > <i className='bi bi-trash'></i>
                                    </button>
                                </div>

                            </div>

                        </>

                        )
                    }



                </div>


                <div className="col-sm-4">

                    {
                        selectedBlog.show && (<div class="card">
                            <div class="card-header text-center">Blog</div>
                            <div class="card-body">
                                <form onSubmit={formik.handleSubmit}  >
                                    <div>
                                        <label for="heading" class="form-label"> heading</label>
                                        <input
                                            value={formik.values.heading ? formik.values.heading : ""}
                                            onChange={formik.handleChange}
                                            type="text"
                                            class="form-control"
                                            id="heading"
                                            name='heading'
                                            placeholder="Enter Your task"
                                        />
                                        <div class="valid-feedback">Looks good!</div>
                                        <div class="invalid-feedback">Please add task.</div>
                                    </div>
                                    <div class="mt-2">
                                        <label for="subHeading" class="form-label">subHeading</label>
                                        <input
                                            value={formik.values.subHeading ? formik.values.subHeading : ""}
                                            onChange={formik.handleChange}
                                            type="text"
                                            class="form-control"
                                            id="subHeading"
                                            name='subHeading'
                                            placeholder="Enter task description"
                                        />
                                        <div class="valid-feedback">Looks good!</div>
                                        <div class="invalid-feedback">Please add description</div>
                                    </div>
                                    <div class="mt-2">
                                        <label for="desc" class="form-label">Description</label>
                                        <textarea
                                            onChange={formik.handleChange}
                                            value={formik.values.desc ? formik.values.desc : ""}
                                            id="desc"
                                            class="form-control"
                                        >


                                        </textarea>
                                        <div class="valid-feedback">Looks good!</div>
                                        <div class="invalid-feedback">Please add description</div>
                                    </div>
                                    <div className='mt-2' >
                                        <label className='form-label' htmlFor="date">date</label>
                                        <input
                                            value={formik.values.date ? formik.values.date : ""}
                                            onChange={formik.handleChange}
                                            className='form-control'
                                            type="date"
                                            id='date'

                                        />
                                    </div>

                                    <div class="mt-2">
                                        <label for="blogType"> blogtype</label>
                                        <select
                                            onChange={formik.handleChange}
                                            value={formik.values.blogType ? formik.values.blogType : ""}
                                            class="form-select"
                                            name="blogType"
                                            id="blogType"
                                        >
                                            <option selected>Select Type </option>
                                            <option value="education">education</option>
                                            <option value="science">science</option>
                                            <option value="nature">nature</option>
                                            <option value="fitness">fitness</option>
                                            <option value="sports">sports</option>
                                            <option value="nature">nature</option>
                                            <option value="animals">animals</option>
                                            <option value="agriculture">agriculture</option>
                                        </select>
                                    </div>


                                    <div className="mt-2" >
                                        <label for="img" className="form-label">Choose File</label>
                                        <input
                                            onChange={handleImage}
                                            type="file"
                                            className='form-control'
                                        />
                                    </div>
                                    <div>
                                        <img src={preview} className="img-fulid" alt="" />
                                    </div>

                                    <button onClick={() => setselectedBlog({ ...selectedBlog, show: false })} type="submit" class=" text-capitalize btn btn-outline-dark w-50 mt-3">
                                        cancel
                                    </button>
                                    <button type="submit" class=" text-capitalize btn btn-outline-warning w-50 mt-3">
                                        update blog
                                    </button>

                                </form>
                            </div>
                        </div>
                        )
                    }


                </div>
            </div>
        </div >




        <div class="modal fade" id="deleteModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <h4> are you sure you want to delete this modal after this your are not abel to see this blog anymore...
                        </h4>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class=" text-capitalize btn btn-secondary" data-bs-dismiss="modal">no</button>


                        <button onClick={() => dispatch(deleteBlogAction(deleteId))} type="button" class=" text-capitalize btn btn-primary" data-bs-dismiss="modal"  >yes</button>
                    </div>
                </div>
            </div>
        </div>

    </>

    )
}

export default Profile
