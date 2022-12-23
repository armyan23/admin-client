import React, { useEffect, useState } from "react";
import { Box, Button } from "@mui/material";

const Thumb = ({ file }) => {
  const [loading, setLoading] = useState(false);
  const [thumb, setThumb] = useState(undefined);

  useEffect(() => {
    if (!file) {
      return;
    }

    let reader = new FileReader(file);

    reader.onloadend = () => {
      setLoading(false);
      setThumb(reader.result);
    };

    reader?.readAsDataURL(file);
  }, [file]);

  if (!file) {
    return null;
  }
  if (loading) {
    return <p>loading...</p>;
  }

  return <img src={thumb} alt={file?.name} height={100} />;
};

const ImageCustomField = ({ photoData, setPhotoData }) => {
  return (
    <Box className="d-flex a-center g-1 h-7">
      <Button variant="contained" component="label">
        Upload photo
        <input
          hidden
          name="image"
          multiple
          type="file"
          onChange={(event) => {
            setPhotoData(event.currentTarget.files[0]);
          }}
        />
      </Button>
      <Thumb file={photoData} />
    </Box>
  );
};

export default ImageCustomField;
