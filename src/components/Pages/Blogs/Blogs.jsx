import React from 'react';
import {
    Container,
    Paper,
    Typography,
    Fab
} from "@mui/material";
import BlogCard from '../../BlogCard/BlogCard';
import AddIcon from "@mui/icons-material/Add";
import {useNavigate, useLocation} from "react-router-dom";


const blogs = [
    {
        title: 'Lorem ipsum',
        body:  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem eum nemo nihil optio voluptate! Cum dignissimos hic maxime quas voluptatem voluptatibus, voluptatum! Assumenda, et fugiat minus nemo quisquam rem temporibus?",
        author: "Lorem",
        date: new Date().now
    },
    {
        title: 'Lorem ipsum',
        body:  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem eum nemo nihil optio voluptate! Cum dignissimos hic maxime quas voluptatem voluptatibus, voluptatum! Assumenda, et fugiat minus nemo quisquam rem temporibus?",
        author: "Lorem",
        date: new Date().now
    },
    {
        title: 'Lorem ipsum',
        body:  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem eum nemo nihil optio voluptate! Cum dignissimos hic maxime quas voluptatem voluptatibus, voluptatum! Assumenda, et fugiat minus nemo quisquam rem temporibus?",
        author: "Lorem",
        date: new Date().now
    }
]

export default function Blogs(){
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <Container maxWidth={"xl"}>
            <Typography variant={"h4"}
                        align={"center"}
                        color={"text.primary"}
                        gutterBottom
            >
                Blogs
            </Typography>
            {
                blogs.map((blog, index) => (
                    <BlogCard title={blog.title} body={blog.body} author={blog.author} date={blog.date} />
                ))
            }
            <Fab
                variant={"extended"}
                color={"primary"} aria-label={"add"}
                sx={{
                    position: "sticky",
                    bottom: "10%",
                    float: "right",
                    color: "white",
                    margin: "12px"
                }}
                onClick={() => navigate(`${location.pathname}/new`)}
            >
                <AddIcon sx={{ mr: {xs: 0, md: 1} }}/>
                <Typography sx={{display: {xs: "none", md: "block"}}}>
                    New Blog
                </Typography>
            </Fab>
        </Container>
    )
}
