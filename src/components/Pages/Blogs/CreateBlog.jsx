import React, {useState} from 'react';
import Container from '@mui/material/Container';
import Paper from "@mui/material/Paper";
import MDEditor from "@uiw/react-md-editor";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid"
import {styled} from "@mui/material/styles";
import {ButtonGroup, InputBase} from "@mui/material";

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

const ContStyling = {
    padding: "12px",
}

const BlogCover = styled("div")(({theme}) => ({
    margin: "12px auto 0px auto",
    padding: "12px"
}))

export default function CreateBlog() {
    const [title, setTitle] = useState('')
    const [blog, setBlog] = useState(mkdStr);
    const [coverImg, setCoverImg] = useState(null);

    const imageChange = (event) => {
        if(event.target.files && event.target.files[0]){
            setCoverImg(URL.createObjectURL(event.target.files[0]))
        }
    }

    const saveDraft = () => {

    }

    const publish = () => {

    }

    return(
        <Container maxWidth={"xl"} sx={ContStyling}>
            <Paper>
                <BlogCover>
                    {coverImg? (
                        <div style={ContStyling}>
                            <img src={coverImg} alt={"cover"} width={"100%"} style={{
                                maxHeight: "20vh"
                            }}/>
                            <Grid sx={{
                                marginTop: "8px"
                            }} container spacing={2}>
                                <Grid item xs={12} md={6}>
                                    <Button sx={{
                                        width: "100%"
                                        }} size={"small"} variant="contained" component="label">
                                          Change Image
                                      <input hidden accept="image/*" onChange={imageChange} type="file" />
                                    </Button>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Button sx={{
                                        width: "100%"
                                        }} size={"small"} variant="contained" color={"error"} component="label" onClick={() => setCoverImg('')}>
                                          Remove Image
                                    </Button>
                                </Grid>
                            </Grid>
                        </div>
                    ):(
                        <Button size={"small"} variant="contained" component="label">
                          Add A Cover Image
                          <input hidden accept="image/*" onChange={imageChange} type="file" />
                        </Button>
                    )}
                    <div style={{
                        marginTop: "8px",
                        padding: "4px"
                        }}>
                        <InputBase
                            placeholder={"blog title"}
                            onChange={(event => setTitle(event.target.value))}
                            sx={{
                            fontSize: "2rem",
                            width: "100%",
                            minHeight: "60px",
                            maxHeight: "60px"
                        }}/>
                    </div>
                </BlogCover>
                <MDEditor height={"60vh"} value={blog} onChange={setBlog} />
                <div style={ContStyling}>
                    <Button
                        size={"small"}
                        variant={"outlined"}
                        onClick={saveDraft}>
                        save draft
                    </Button>{"    "}
                    <Button
                        size={"small"}
                        variant={"contained"}
                        onClick={publish}
                    > publish</Button>
                </div>
            </Paper>
        </Container>
    )
}