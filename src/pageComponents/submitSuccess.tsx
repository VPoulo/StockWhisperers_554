import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

/* Pop out modal telling sender that their message was sent
 */

function SubmitSuccess() {
  return (
    <Dialog aria-labelledby="responsive-dialog-title" open={false}>
      <DialogTitle id="responsive-dialog-title">Success!</DialogTitle>
      <DialogContent>
        <DialogContentText>Your notification has been set!</DialogContentText>
      </DialogContent>
    </Dialog>
  );
}

export default SubmitSuccess;
