import { useEffect, useState } from "react";
import Router from "next/router";
import LoadingPage from "component/loading/LoadingPage";
import { handleHeadersToken } from "config/instance";

const AuthMiddleware: ({ children }: { children: any }) => JSX.Element = ({
  children,
}) => {
  const [pageLoading, setPageLoading] = useState(true);

  useEffect(() => {
    const user: any = JSON.parse(localStorage.getItem("user") || "null");

    if (user) {
      setPageLoading(false);
      handleHeadersToken(user.token);
    } else {
      setTimeout(() => {
        Router.push("/login");
      }, 1000);
    }
  }, []);

  if (pageLoading) {
    return <LoadingPage />;
  }

  return children;
};

export default AuthMiddleware;
