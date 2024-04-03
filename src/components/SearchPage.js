import WaitingPage from "./results/WaitingPage"
import FoundPage from "./results/FoundPage"
import ErrorPage from "./results/ErrorPage"
import { RESULTSTATUS } from "../settings";
import { useState } from "react";

const defaultError = "Unknown Error"


function SearchPage() {
  function Results({ resultStatus }) {
    if (resultStatus === RESULTSTATUS.WAITING)
      return <WaitingPage />
    else if (resultStatus === RESULTSTATUS.FOUND)
      return <FoundPage />
    return <ErrorPage errormsg={error} />
  }

  const [error, setError] = useState(defaultError);
  const [result, setResults] = useState(null);

  return (
    <div className="page ">
      <div className="flex-row">
        <div className="little-padding-right">
          <input type="text" id="titleInput" class="form-control" aria-describedby="titleHelpInline" placeholder="e.g. Pizza" />
        </div>
        <div className="little-padding-right">
          <button for="titleInput" type="submit" className="btn btn-primary mb-3">Search</button>
        </div>
        <div>
          <p>Must be a single word.</p>
        </div>
      </div>
      <div>
        <h2 >Results</h2>
      </div>
      <Results resultStatus={RESULTSTATUS.WAITING}/>
    </div>
  );
}

export default SearchPage;
