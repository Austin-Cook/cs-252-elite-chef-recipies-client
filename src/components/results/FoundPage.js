function FoundPage({queryResult}) {
    return (
      <div>
        <div class="jumbotron">
          <hr class="my-4" />
          <h1 class="display-4">{queryResult.title}</h1>
          <p>Author: {queryResult.email}</p>
          <p>Tags: {queryResult.tag1 && <span>{queryResult.tag1}</span>}{queryResult.tag2 && <span>, {queryResult.tag2}</span>}{queryResult.tag3 && <span>, {queryResult.tag3}</span>}</p>
          <p class="lead">{queryResult.description}</p>
          <hr class="my-4" />
        </div>
      </div>
    );
  }

  export default FoundPage;
