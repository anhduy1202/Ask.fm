import React from "react";

interface IProps {
  type: String
}

const AuthLayout: React.FC<IProps> = ({ children, type }) => {
  return (
    <>
      <div className="login-title">{type}</div>
      <section className="auth-layout">{children}</section>
    </>
  );
};

export default AuthLayout;
