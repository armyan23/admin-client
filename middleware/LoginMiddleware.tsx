import { useEffect, useState } from "react";
import Router from "next/router";
import LoadingPage from "component/loading/LoadingPage";

const LoginMiddleware: ({ children }: { children: any }) => JSX.Element = ({
  children,
}) => {
  const [pageLoading, setPageLoading] = useState(true);

  useEffect(() => {
    const user: any = JSON.parse(localStorage.getItem("user") || "null");

    if (!user) {
      setPageLoading(false);
    } else {
      Router.push("/dashboard/home");
    }
  }, []);

  if (pageLoading) {
    return <LoadingPage />;
  }

  return children;
};

export default LoginMiddleware;
