import React from "react";
import { Button } from "@mui/material";

const EditImage = ({ imageUrl, onDelete }) => {
  return (
    <div className="d-block j-center">
      <img src={imageUrl} className="d-block" alt="user-image" height={100} />
      <Button color={"error"} onClick={onDelete}>
        Delete
      </Button>
    </div>
  );
};

export default EditImage;
