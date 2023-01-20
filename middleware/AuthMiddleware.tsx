import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Router from "next/router";
import usePreviousList from "useHooks/usePreviousList";
import { RootState } from "types/iReducer";
import { putHeadersCompany, putHeadersToken } from "config/instance";
import { postIsAuthenticatedRequest } from "store/auth/action";
import LoadingPage from "component/ui/loading/LoadingPage";

const AuthMiddleware: ({ children }: { children: any }) => JSX.Element = ({
  children,
}) => {
  const dispatch = useDispatch();
  const {
    isAuthenticatedFailure,
    isAuthenticatedSuccess,
    loginSuccess,
    isAuthenticated,
  } = useSelector((state: RootState) => state.auth);

  const [
    prevLoginSuccess,
    prevIsAuthenticatedSuccess,
    prevIsAuthenticatedFailure,
  ] = usePreviousList<boolean>([
    loginSuccess,
    isAuthenticatedSuccess,
    isAuthenticatedFailure,
  ]);

  const [pageLoading, setPageLoading] = useState(true);

  useEffect(() => {
    const user: any = JSON.parse(localStorage.getItem("user") || "null");
    if (user && !isAuthenticated) {
      putHeadersToken(user.token);
      putHeadersCompany(user.company);
      dispatch(postIsAuthenticatedRequest());
    } else if (!user) {
      setTimeout(() => {
        Router.push("/login");
      }, 1000);
    }
  }, [dispatch, isAuthenticated]);

  useEffect(() => {
    if (isAuthenticatedFailure && prevIsAuthenticatedFailure === false) {
      setTimeout(() => {
        Router.push("/login");
        localStorage.removeItem("user");
      }, 1000);
      setPageLoading(false);
    }
  }, [isAuthenticatedFailure, prevIsAuthenticatedFailure]);

  useEffect(() => {
    if (
      (isAuthenticatedSuccess && !prevIsAuthenticatedSuccess) ||
      (loginSuccess && !prevLoginSuccess)
    ) {
      setPageLoading(false);
    }
  }, [
    isAuthenticatedSuccess,
    prevIsAuthenticatedSuccess,
    loginSuccess,
    prevLoginSuccess,
  ]);

  if (pageLoading) {
    return <LoadingPage />;
  }

  return children;
};

export default AuthMiddleware;
