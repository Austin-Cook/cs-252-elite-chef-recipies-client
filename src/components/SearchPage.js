import { useState } from "react";
import { ToastContainer } from "react-toastify";

import WaitingPage from "./results/WaitingPage"
import FoundPage from "./results/FoundPage"
import { displaySuccess, displayWarning, displayError } from "../util/util.js"
import { RESULTDISPLAY, QUERY, SERVER_HOST, SERVER_PORT, EMAIL, TITLE, DESCRIPTION } from "../settings";


function SearchPage() {
  function ResultDisplay() {
    if (resultDisplay === RESULTDISPLAY.FOUND)
      return <FoundPage queryResult={queryResult} />
    return <WaitingPage text={waitingPageText} />
  }

  const [resultDisplay, setResultDisplay] = useState(RESULTDISPLAY.WAITING);
  const [query, setQuery] = useState("");
  const [waitingPageText, setWaitingPageText] = useState("Type in a word, and press 'Search'")
  const [queryResult, setQueryResult] = useState(null)

  const handleQueryChange = (event) => {
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
      if (status === 200) {
        displaySuccess(data.message);
        if (!data[EMAIL]) {
          displayError("Response missing field: " + EMAIL);
          return;
        }
        if (!data[TITLE]) {
          displayError("Response missing field: " + TITLE);
          return;
        }
        if (!data[DESCRIPTION]) {
          displayError("Response missing field: " + DESCRIPTION);
          return;
        }
        setQueryResult(data)
        setResultDisplay(RESULTDISPLAY.FOUND);
      }
      else {
        displayWarning(data.message);
        setWaitingPageText("No matches");
        setResultDisplay(RESULTDISPLAY.WAITING);
      }
    })
    .catch((err) => {
      displayError(err.message)
      setResultDisplay(RESULTDISPLAY.WAITING);
    });
  };

  return (
    <div className="page ">
      <div className="flex-row">
        <div className="little-padding-right">
          <input type="text" id="titleInput" value={query} onChange={handleQueryChange}  class="form-control" aria-describedby="titleHelpInline" placeholder="e.g. Pizza" />
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
