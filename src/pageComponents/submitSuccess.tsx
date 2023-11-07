import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

function SubmitSuccess({ onClose }: { onClose: () => void }) {
  const handleCloseWithReload = () => {
    onClose();
    // window.location.reload();
  };
  return (
    <Dialog
      aria-labelledby="responsive-dialog-title"
      open={true}
      onClose={handleCloseWithReload}
    >
      <DialogTitle id="responsive-dialog-title">Success!</DialogTitle>
      <DialogContent>
        <DialogContentText>
          <p>Your notification has been set! </p>
          <p>You may click anywhere to finish your submission.</p>
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
}

export default SubmitSuccess;
