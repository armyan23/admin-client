import AuthMiddleware from "middleware/AuthMiddleware";

const Dashboard: ({ children }: { children: any }) => JSX.Element = ({
  children,
}) => {
  return <AuthMiddleware>I am a Dashboard {children}</AuthMiddleware>;
};
export default Dashboard;
