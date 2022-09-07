import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { signleBlogAction } from '../store/actions/blogAction'
import { useParams } from 'react-router-dom'
import { format } from 'date-fns'
function BlogDtails() {
    const dispatch = useDispatch()
    const [isReadMoreShow, setisReadMoreShow] = useState(false)
    const { singleblog: blogs } = useSelector(state => state.allBlogs)
    const { id } = useParams();

    const handleShow = () => setisReadMoreShow(pre => !pre)
    // console.log(blogs);
    // console.log(id);


    useEffect(() => {
        dispatch(signleBlogAction(id))

    }, [])
    return (

        <div className="container">
            <div className="row">
                <div className=" col-xl-8 offset-xl-2 col-md-8 offset-md-1  col-sm-8 offset-sm-2">
                    <div className="card mt-5">
                        {/* <p className='text-cpaitalize text-end ' > {blogs.blogType} </p> */}
                        <button className='btn  btn-danger mt-3 ' style={{ maxWidth: "150px", padding: '7px' }} >{blogs.blogType} </button>
                        <h1 className='mt-2' > {blogs.heading} </h1>
                        <p > <i className='bi bi-watch'></i> {format(new Date(blogs.createdAt), "MM/dd/yyyy")} </p>


                        {/* <p className='text-end'> posted At: {(new Date(blogs.Date).toLocaleString(), "MM/dd/yyyy")} </p> */}

                        <img
                            src={`http://localhost:5000/${blogs?.image}`}
                            className="img-fluid mt-3"
                            height={500}
                            width={600}
                            alt={blogs.heading} />
                        <h4 className='mt-3' > {blogs.subHeading} </h4>
                        <p className='mt-2' >
                            {isReadMoreShow ? blogs.desc : blogs.desc.substr(0, 200)}
                            <a style={{ color: "blue", cursor: "pointer" }} onClick={handleShow} >{!isReadMoreShow ? "....Read More" : "Read Less"} </a>
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default BlogDtails