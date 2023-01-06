import React, { FC } from "react";
import { Button } from "@mui/material";

type Props = {
  imageUrl: string | undefined;
  onDelete: () => void;
};

const EditImage: FC<Props> = ({ imageUrl, onDelete }) => {
  return (
    <div className="d-block j-center">
      <img src={imageUrl} className="d-block" alt="user-image" height={100} />
      <Button color={"error"} onClick={onDelete}>
        Delete Image
      </Button>
    </div>
  );
};

export default EditImage;
