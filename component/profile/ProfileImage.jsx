import React from "react";
import Image from "next/image";
import Male from "resources/image/profile/male.jpg";
import Female from "resources/image/profile/female.jpg";

const ProfileImage = ({ url, type, width = 250, height = 250 }) => {
  return (
    <Image
      src={url ? url : type === "male" ? Male : Female}
      alt="ProfileImg"
      width={width}
      height={height}
    />
  );
};

export default ProfileImage;
