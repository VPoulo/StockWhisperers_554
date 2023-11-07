import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

/* Pop out modal telling sender that their message was not sent
 */
function SubmitError({ onClose }: { onClose: () => void }) {
  return (
    <Dialog
      open={true}
      onClose={onClose}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogTitle id="responsive-dialog-title">Error</DialogTitle>
      <DialogContent>
        <DialogContentText>
          There was an error submitting your request. Please try again later.
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
}

export default SubmitError;
