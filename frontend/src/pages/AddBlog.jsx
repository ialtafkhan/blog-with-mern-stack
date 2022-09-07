import React, { useState } from 'react'
import { useFormik } from 'formik'
import *as yup from 'yup'
import { useDispatch } from 'react-redux'
import { addBlogAction } from '../store/actions/blogAction'

function AddBlog() {
    const dispatch = useDispatch()
    const [image, setimage] = useState()
    const [preview, setpreview] = useState()

    const formik = useFormik({
        initialValues: {
            heading: "React is awosome",
            subHeading: "react",
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, sequi?",
            date: "",
            blogType: ""
        },
        validationSchema: yup.object({
            heading: yup.string().required("please entre something"),
            subHeading: yup.string().required("please entre something"),
            desc: yup.string().required("please entre something"),
            date: yup.string().required("please entre something"),
            blogType: yup.string().required("plz"),

        }),
        onSubmit: ({ heading, subHeading, desc, date, blogType }) => {

            const fd = new FormData()
            fd.append("heading", heading)
            fd.append("subHeading", subHeading)
            fd.append("desc", desc)
            fd.append("date", date)
            fd.append("blogType", blogType)
            fd.append("image", image)

            dispatch(addBlogAction(fd))


        }
        // onSubmit: (fd, event) => {
        //     console.log(fd);
        //     event.preventDefault();
        // }

    })

    const handleImage = (e) => {
        setpreview(URL.createObjectURL(e.target.files[0]))
        setimage(e.target.files[0])

    }
    console.log(preview);
    console.log(image);

    return (
        <>

            <div class="container mt-5">

                {JSON.stringify(formik.errors)}
                {JSON.stringify(formik.values, null, 2)}
                <div class="row">
                    <div class="col-sm-6 offset-sm-3">
                        <div class="card">
                            <div class="card-header text-center">Blog</div>
                            <div class="card-body">
                                <form onSubmit={formik.handleSubmit}  >
                                    <div>
                                        <label for="heading" class="form-label"> blog heading</label>
                                        <input
                                            value={formik.values.heading}
                                            onChange={formik.handleChange}
                                            type="text"
                                            class="form-control"
                                            id="heading"
                                            placeholder="Enter Your task"
                                        />
                                        <div class="valid-feedback">Looks good!</div>
                                        <div class="invalid-feedback">Please add task.</div>
                                    </div>
                                    <div class="mt-2">
                                        <label for="subHeading" class="form-label">subHeading</label>
                                        <input
                                            value={formik.values.subHeading}
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
                                            value={formik.values.desc}
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
                                            value={formik.values.date}
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
                                            value={formik.values.blogType}
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
                                    {/* <div className='mt-2' >
                                        <label htmlFor="blogType">blogType</label>
                                        <select
                                            id='blogType'
                                            name='blogType'
                                            className='form-select'
                                            value={formik.values.blogType}
                                            onChange={formik.handleChange}
                                        >
                                            <option selected >type </option>
                                            <option value="education">education</option>
                                            <option value="science">science</option>
                                            <option value="nature">nature</option>

                                        </select>

                                    </div> */}

                                    <div className="mt-2" >
                                        <label for="img" className="form-label">Choose File</label>
                                        <input
                                            onChange={handleImage}
                                            type="file"
                                            className='form-control'
                                            height={100}
                                            width={100}
                                        />
                                    </div>
                                    <div>
                                        <img
                                            src={preview}
                                            className="img-fulid"
                                            height={100}
                                            width={100}
                                            alt=""
                                        />
                                    </div>

                                    <button type="submit" class="btn btn-primary w-100 mt-3">
                                        Add blog
                                    </button>
                                </form>
                            </div>
                        </div>



                    </div>
                </div>
            </div>


        </>
    )
}

export default AddBlog