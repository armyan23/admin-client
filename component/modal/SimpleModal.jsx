import {
  Dialog,
  DialogTitle,
  Button,
  DialogContentText,
  DialogActions,
  DialogContent,
} from "@mui/material";

const SimpleModal = ({ open, setOpen, agree }) => {
  const onAgree = () => {
    agree();
    setOpen(false);
  };

  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        Do you agree to remove the employee from this job?
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Removal of Employees. All employees assigned to this contract shall
          have such knowledge and experience as will enable them to perform the
          assigned duties to them.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setOpen(false)}>Disagree</Button>
        <Button onClick={onAgree} autoFocus>
          Agree
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default SimpleModal;
