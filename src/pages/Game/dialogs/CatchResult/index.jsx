import * as React from "react";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import Dialog from "@mui/material/Dialog";

export default function CatchResultDialog(props) {
  const { onClose, desc, open } = props;

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Good Job!</DialogTitle>
      <DialogContent>{desc}</DialogContent>
    </Dialog>
  );
}
