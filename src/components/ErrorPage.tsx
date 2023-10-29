// https://reactrouter.com/en/main/start/tutorial
import React from 'react';
import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  const errorInfo = (error: unknown) => {
    if (isRouteErrorResponse(error)) {
      return (
        <p>
          <i>{error.statusText || error.data.message}</i>
        </p>
      );
    }
    return undefined;
  };

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      {errorInfo(error)}
    </div>
  );
};

export default ErrorPage;
