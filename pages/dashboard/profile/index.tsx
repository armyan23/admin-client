import { NextPage } from "next";
import Dashboard from "component/layout/Dashboard";

const MyProfile = () => {
  return <div>My profile</div>;
};

MyProfile.getLayout = function getLayout(page: NextPage) {
  return <Dashboard>{page}</Dashboard>;
};

export default MyProfile;
