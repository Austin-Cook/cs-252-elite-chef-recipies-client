
function SearchPage() {
  return (
    <div className="page ">
      <div className="flex-row">
        <div className="search-input">
          <input type="text" id="titleInput" class="form-control" aria-describedby="titleHelpInline" placeholder="e.g. Pizza" />
        </div>
        <div>
          <button for="titleInput" type="submit" className="btn btn-primary mb-3">Search</button>
        </div>
      </div>
      <div>
        <h2>Results</h2>
      </div>



    </div>
  );
}

export default SearchPage;
