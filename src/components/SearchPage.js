import WaitingPage from "./results/WaitingPage"
import FoundPage from "./results/FoundPage"
import ErrorPage from "./results/ErrorPage"
import { RESULTDISPLAY, QUERY, SERVER_HOST, SERVER_PORT } from "../settings";
import { ToastContainer, toast, Bounce } from "react-toastify";
import { useState } from "react";

const defaultError = "Unknown Error"


function SearchPage() {
  function ResultDisplay() {
    if (resultDisplay === RESULTDISPLAY.WAITING)
      return <WaitingPage />
    else if (resultDisplay === RESULTDISPLAY.FOUND)
      return <FoundPage />
    return <ErrorPage errormsg={error} />
  }

  const [error, setError] = useState(defaultError);
  const [resultDisplay, setResultDisplay] = useState(RESULTDISPLAY.WAITING);
  const [query, setQuery] = useState("");

  const handleChange = (event) => {
    setQuery(event.target.value);
  }

  const handleSearch = () => {
    if (query === "") {
      displayWarning("Search field can't be empty");
      return;
    }
    if (query.indexOf(' ') >= 0)  {
      displayWarning("Search value must be one word");
      return;
    }

    getRecipe();
  }

  const getRecipe = async () => {
    let status = 0;
    const uri = SERVER_HOST + ':' + SERVER_PORT + "/recipe?" + new URLSearchParams({[QUERY]: query});
    await fetch(uri, {
      method: 'GET'
    })
    .then((response) => {
      status = response.status;
      return response.json()
    })
    .then((data) => {
      if (status === 200)
        displaySuccess(data.message);
      else
        displayError(data.message);
    })
    .catch((err) => displayError(err.message));
  };

  const displaySuccess = (message="empty message") => {
    toast.success(message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
      });
  };

  const displayWarning = (message="empty message") => {
    toast.warn(message, {
      position: "top-right",
      autoClose: 10000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
      });
  };

  const displayError = (message="empty message") => {
    toast.error(message, {
      position: "top-right",
      autoClose: 10000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
      });
  };

  return (
    <div className="page ">
      <div className="flex-row">
        <div className="little-padding-right">
          <input type="text" id="titleInput" value={query} onChange={handleChange}  class="form-control" aria-describedby="titleHelpInline" placeholder="e.g. Pizza" />
        </div>
        <div className="little-padding-right">
          <button for="titleInput" onClick={handleSearch} className="btn btn-primary mb-3">Search</button>
        </div>
        <div>
          <p>(Must be a single word)</p>
        </div>
      </div>
      <div>
        <h2 >Results</h2>
      </div>
      <ResultDisplay />
      <ToastContainer />
    </div>
  );
}

export default SearchPage;
