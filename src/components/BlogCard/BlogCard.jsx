import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {Avatar, CardActionArea, CardHeader} from '@mui/material';
import {red} from "@mui/material/colors";

export default function ActionAreaCard({title, author, body, date}) {
  return (
    <Card sx={{
      width: "80%",
      margin: '12px auto 12px auto'
    }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }

        title={title}
        subheader="September 14, 2022"
      />
      <CardActionArea>
        <CardMedia sx={{
          display: "block",
          maxWidth: "100%",
          maxHeight: 200
        }}
          component="img"
          image="/images/blog.jpg"
          alt="blog image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {body}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
