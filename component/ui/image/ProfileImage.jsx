import React from "react";
import Image from "next/image";
import Male from "public/assets/image/profile/male.jpg";
import Female from "public/assets/image/profile/female.jpg";

const ProfileImage = ({ url, type = "Male", width = 250, height = 320 }) => {
  return url ? (
    <div
      style={{
        backgroundImage: `url('${url}')`,
        width: `${width}px`,
        height: `${height}px`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
      }}
    />
  ) : (
    <Image
      src={type === "Female" ? Female : Male}
      alt="ProfileImg"
      width={width}
      height={height}
    />
  );
};

export default ProfileImage;
