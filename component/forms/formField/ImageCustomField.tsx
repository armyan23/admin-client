import React, { useEffect, useState, FC } from "react";
import { Box, Button, InputLabel } from "@mui/material";

type PropsImage = {
  children?: JSX.Element | null;
  label: string;
  photoData: File | undefined;
  setPhotoData: (value: File) => void;
};

type PropsThumb = {
  file: File;
};

const Thumb: FC<PropsThumb> = ({ file }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [thumb, setThumb] = useState<string | ArrayBuffer | null>("");

  useEffect(() => {
    if (!file) {
      return;
    }

    const reader = new FileReader();
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

  return (
    <img
      src={typeof thumb === "string" ? thumb : undefined}
      alt={file?.name}
      height={100}
    />
  );
};

const ImageCustomField: FC<PropsImage> = ({
  children,
  label,
  photoData,
  setPhotoData,
}) => {
  return (
    <Box className="mt-1">
      <InputLabel>{label}</InputLabel>
      <Box
        className={`d-flex a-center g-1 mb-2 mt-1 ${
          children || photoData ? "h-9" : "h-3"
        }`}
      >
        <Button variant="contained" component="label">
          Upload
          <input
            hidden
            name="image"
            multiple
            type="file"
            onChange={(event) => {
              if (event.currentTarget.files) {
                setPhotoData(event?.currentTarget?.files[0]);
              }
            }}
          />
        </Button>
        {photoData ? <Thumb file={photoData} /> : null}
        {children}
      </Box>
    </Box>
  );
};

export default ImageCustomField;
