function ErrorPage({ errormsg: error }) {
    return (
      <div>
        <h1>Error: {error}</h1>
      </div>
    );
  }

  export default ErrorPage;
