import React from 'react';
import {
    Container,
    Paper,
    Typography
} from "@mui/material";
import BlogCard from'../BlogCard/BlogCard';

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
    return (
        <Container maxWidth={"xl"} component={Paper} sx={theme => ({
            background: theme.palette.background
        })}>
            <Typography variant={"h4"}
                        align={"center"}
                        gutterBottom
            >
                Blogs
            </Typography>
            {
                blogs.map((blog, index) => (
                    <BlogCard title={blog.title} body={blog.body} author={blog.author} date={blog.date} />
                ))
            }
        </Container>
    )
}
