import React, { FC } from "react";
import Image from "next/image";
import Male from "public/assets/image/profile/male.jpg";
import Female from "public/assets/image/profile/female.jpg";
import Company from "public/assets/image/profile/company.png";

type Props = {
  url: string | undefined;
  type?: string;
  width?: number;
  height?: number;
};

const ProfileImage: FC<Props> = ({
  url,
  type = "Male",
  width = 250,
  height = 320,
}) => {
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
      src={type === "Female" ? Female : type === "Male" ? Male : Company}
      alt="ProfileImg"
      width={width}
      height={height}
    />
  );
};

export default ProfileImage;
