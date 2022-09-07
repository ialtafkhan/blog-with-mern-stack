import React, { useState } from 'react'
import { format } from 'date-fns'
import { Link } from 'react-router-dom'

function BlogCart({ item }) {
    const [isHovering, setisHovering] = useState("#000")
    const [isReadMoreShown, setisReadMoreShown] = useState(false)

    // const toggle = () => {
    //     setisReadMoreShown(pre => !pre)

    // }



    return (
        <>
            <div key={item._id} className="row mt-5 ">
                {/* <Link style={{ color: isHovering, textDecoration: "none" }}
                    onMouseOver={() => setisHovering("red")}
                    onMouseLeave={() => setisHovering("#000")}
                    to={`/single-blog/Details/${item._id}`} >
                    <h1> {item?.heading} </h1>
                </Link> */}

                <div className='col-sm-6'>

                    <img
                        src={`http://localhost:5000/${item?.image}`}
                        className="img-fluid"

                        alt={item.heading} />

                </div>
                <div className='col-sm-6' >
                    <button className=' text-capitalize btn btn-danger' > {item.blogType} </button>
                    <h1> {item?.heading} </h1>

                    <p className=''> <i className='bi bi-watch'></i> {format(new Date(item.date), "MM-dd-yyyy")} </p>



                    {/* <h4> {item.subHeading} </h4> */}
                    <p className='mt-2' > {isReadMoreShown ? item.desc : item.desc.substr(0, 200)}
                        <Link
                            className='text-capitalize  text-decoration-none text-primary '
                            // onClick={toggle}
                            to={`/single-blog/Details/${item._id}`}
                        >
                            ...Read more
                        </Link>

                    </p>


                </div>
            </div>

        </>
    )
}

export default BlogCart
