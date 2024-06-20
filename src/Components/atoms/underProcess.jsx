import * as React from "react";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import { useNavigate } from "react-router-dom";

export default function BasicModal() {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(true);
  return (
    <React.Fragment>
      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={open}
        onClose={() => {
          setOpen(false);
          navigate("/");
        }}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Sheet
          variant="outlined"
          sx={{
            maxWidth: 500,
            borderRadius: "md",
            p: 3,
            boxShadow: "lg",
          }}
        >
          <ModalClose variant="plain" sx={{ m: 1 }} />
          <Typography
            component="h2"
            id="modal-title"
            level="h4"
            textColor="inherit"
            fontWeight="lg"
            mb={1}
          >
            This page under maintenance
          </Typography>
          <Typography id="modal-desc" textColor="text.tertiary">
            We hope you can able to understand our concern and bear with us in the interims.
          </Typography>
        </Sheet>
      </Modal>
    </React.Fragment>
  );
}
