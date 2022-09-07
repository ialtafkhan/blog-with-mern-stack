import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllBlogAction } from '../store/actions/blogAction'
import { format } from 'date-fns'
import BlogCart from './BlogCart'
import { getAllUserAction } from '../store/actions/userAction'
function Home() {
    const dispatch = useDispatch()
    const { blogs, isLoading } = useSelector(state => state.allBlogs)
    const { users } = useSelector(state => state.allUsers)
    // console.log(users);

    // console.log(blogs);
    useEffect(() => {
        dispatch(getAllBlogAction())
    }, [])

    useEffect(() => {
        dispatch(getAllUserAction())
    }, [])

    // const filter = blogs.find(blog => blog.userId === users._id)
    // const filtered = users.find(item => item._id === blogs.userId)
    //    console.log();

    // console.log(filtered);
    return (
        <div className="container">
            <div className="row">



                {/* <BlogCart blogs={blogs} =   /> */}
                {
                    blogs?.map((item, index) => (<BlogCart item={item} key={index} />
                    ))
                }
            </div>
        </div>
    )
}

export default Home