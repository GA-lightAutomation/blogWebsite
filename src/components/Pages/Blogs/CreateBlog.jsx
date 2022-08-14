import React, {useState} from 'react';
import Container from '@mui/material/Container';
import Paper from "@mui/material/Paper";
import MDEditor from "@uiw/react-md-editor";
import {styled} from "@mui/material/styles";

const mkdStr = `
# Markdown Editor

---

**Hello world!!!**

[![](https://avatars.githubusercontent.com/u/1680273?s=80&v=4)](https://avatars.githubusercontent.com/u/1680273?v=4)

\`\`\`javascript
import React from "react";
import ReactDOM from "react-dom";
import MEDitor from '@uiw/react-md-editor';

\`\`\`
`;

const styling = {
    padding: "12px",
}

export default function CreateBlog() {
    const [blog, setBlog] = useState(mkdStr);
    return(
        <Container maxWidth={"xl"} sx={styling}>
            <Paper>
                <MDEditor height={"80vh"} value={blog} onChange={setBlog} />
            </Paper>
        </Container>
    )
}