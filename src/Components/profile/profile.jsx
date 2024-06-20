import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import Slide from "@mui/material/Slide";
import { Avatar, Box, Tooltip, Typography } from "@mui/material";
import manish from "../profile/manish.JPG";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide({ open, handleClose }) {
  return (
    <React.Fragment>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        maxWidth="sm"
        PaperProps={{
          sx: {
            width: "25%",
            borderRadius: "5%",
            minHeight: "fit-content",
          },
        }}
      >
        <DialogActions>
          {/* <Button onClick={handleClose}>Close</Button> */}
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </DialogActions>
        <DialogContent
          sx={{
            margin: "0",
            padding: "10px 10px",
            lineHeight: "-5rem",
          }}
        >
          <center style={{ margin: "1rem 1rem" }}>
            <Avatar
              alt="Manish Gaikwad"
              src={manish}
              sx={{ width: 150, height: 150 }}
            />
          </center>
          <Typography
            sx={{
              textAlign: "center",
              fontSize: "1.5rem",
              fontWeight: "bold",
            }}
          >
            Manish Gaikwad
          </Typography>
          <Box
            component="div"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
              marginBlock: "15px",
            }}
          >
            <Button variant="contained" endIcon={<EmailIcon />}>
              Message
            </Button>
            &nbsp; &nbsp;
            <Button variant="outlined" endIcon={<CallIcon />}>
              Call
            </Button>
          </Box>
          <DialogContentText
            id="alert-dialog-slide-description"
            sx={{ textAlign: "center" }}
          >
            Let Google help apps determine location. This means sending
            anonymous location data to Google, even when no apps are running.
          </DialogContentText>
          <Box
            component="div"
            sx={{
              display: "flex",
              justifyContent: "space-around",
              padding: "0px 80px",
            }}
          >
            <Tooltip title="Instagram">
              <IconButton>
                <InstagramIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Twitter">
              <IconButton>
                <TwitterIcon />
              </IconButton>
            </Tooltip>
          </Box>
          {/* <Box
            component="div"
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
              flexWrap: "wrap",
              backgroundColor: "whitesmoke",
              height: "4rem",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                padding: "2px",
                border: "1px solid red",
              }}
            >
              Graphics Designer
            </Typography>
            <Typography
              variant="h6"
              sx={{
                padding: "2px",
                border: "1px solid red",
              }}
            >
              Poster Creator
            </Typography>
            <Typography
              variant="h6"
              sx={{
                padding: "2px",
                border: "1px solid red",
              }}
            >
              Fashon Designer
            </Typography>
            <Typography
              variant="h6"
              sx={{
                padding: "2px",

                border: "1px solid red",
              }}
            >
              Game Designer
            </Typography>
          </Box> */}
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
