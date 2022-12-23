import React from "react";
import Image from "next/image";
import Male from "public/assets/image/profile/male.jpg";
import Female from "public/assets/image/profile/female.jpg";

const ProfileImage = ({ url, type = "male", width = 250, height = 250 }) => {
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
