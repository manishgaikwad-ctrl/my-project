import { Box, Typography } from "@mui/material";
import React from "react";
import Logo from "../atoms/logo";
import "./page.css";
import ImageSlider from "../atoms/Image-Carousel";
import image1 from "../images/OIP.jfif";
import image3 from "../images/hh.jfif";
import image2 from "../images/rt2.jpg";

const home = () => {
  const text = "GRAPHIXIA".split("");
  const images = [image1, image2, image3];
  return (
    <Box
      component="div"
      sx={{
        minHeight: "100%",
        display: "flex",
        backgroundImage: `url(
          "https://img.freepik.com/free-vector/abstract-white-shapes-background_79603-1359.jpg?size=626&ext=jpg"
        )`,
      }}
      // className="fancy-background"
    >
      <Box
        sx={{
          width: "50%",
          position: "relative",
        }}
      >
        <Logo height="600" width="600" />
        <Typography
          component="p"
          sx={{
            position: "absolute",
            zIndex: "2",
            fontSize: "1.8rem",
            bottom: "3rem",
            color: "lightcoral",
          }}
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, magnam
          nihil porro perferendis dolores accusamus laboriosam, placeat
          recusandae modi voluptatibus pariatur quis. Totam perspiciatis nemo
          vero enim commodi vel amet?
        </Typography>
      </Box>
      <Box
        sx={{
          width: "50%",
        }}
      >
        <Typography
          sx={{
            fontSize: "5rem",
            fontWeight: "bold",
            fontStyle: "oblique",
          }}
        >
          {text}
        </Typography>
        <Typography
          sx={{ marginTop: "-3.5rem", fontSize: "15px", marginBottom: "5rem" }}
          variant="body"
        >
          C R E A T E - I N S P I R E - D E S I G N
        </Typography>
        <ImageSlider images={images} />
      </Box>
    </Box>
  );
};

export default home;
