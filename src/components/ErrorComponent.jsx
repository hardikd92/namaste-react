import { useRouteError } from "react-router-dom";
const ErrorComponent = () => {
  const error = useRouteError();
  return (
    <div className="error-component">
      <div className="alert alert-success" role="alert">
        <h4 className="alert-heading">Ooops!</h4>
        <hr />
        <p className="mb-0">{error.statusText || error.message}</p>
      </div>
    </div>
  );
};

export default ErrorComponent;
