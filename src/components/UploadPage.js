
function UploadPage() {
  return (
    <div className="page">
      <div>
        <div class="row g-3 align-items-center">
          <div class="col-auto">
            <label for="titleInput" class="col-form-label">Recipe Title</label>
          </div>
          <div class="col-auto">
            <input type="text" id="titleInput" class="form-control" aria-describedby="titleHelpInline" placeholder="e.g. Brownies" />
          </div>
          <div class="col-auto">
            <span id="titleHelpInline" class="form-text" style={{color: 'white'}}>
              Must not be empty.
            </span>
          </div>
        </div>
        <div class="row g-3 align-items-center">
          <div class="col-auto">
            <label for="emailInput" class="col-form-label">Email</label>
          </div>
          <div class="col-auto">
            <input type="text" id="emailInput" class="form-control" aria-describedby="emailHelpInline" placeholder="e.g. ibake@gmail.com" />
          </div>
          <div class="col-auto">
            <span id="emailHelpInline" class="form-text" style={{color: 'white'}}>

            </span>
          </div>
        </div>
        <div class="row g-3 align-items-center">
          <div class="col-auto">
            <label for="tagOneInput" class="col-form-label">Tag 1</label>
          </div>
          <div class="col-auto">
            <input type="text" id="tagOneInput" class="form-control" aria-describedby="tagOneHelpInline" placeholder="e.g. Chocolate" />
          </div>
          <div class="col-auto">
            <span id="tagOneHelpInline" class="form-text" style={{color: 'white'}}>

            </span>
          </div>
        </div>
        <div class="row g-3 align-items-center">
          <div class="col-auto">
            <label for="tagTwoInput" class="col-form-label">Tag 2</label>
          </div>
          <div class="col-auto">
            <input type="text" id="tagTwoInput" class="form-control" aria-describedby="tagTwoHelpInline" placeholder="e.g. Fudge" />
          </div>
          <div class="col-auto">
            <span id="tagTwoHelpInline" class="form-text" style={{color: 'white'}}>

            </span>
          </div>
        </div>
        <div class="row g-3 align-items-center">
          <div class="col-auto">
            <label for="tagThreeInput" class="col-form-label">Tag 3</label>
          </div>
          <div class="col-auto">
            <input type="text" id="tagThreeInput" class="form-control" aria-describedby="tagThreeHelpInline" placeholder="e.g. Gooey" />
          </div>
          <div class="col-auto">
            <span id="tagThreeHelpInline" class="form-text" style={{color: 'white'}}>

            </span>
          </div>
        </div>
        <div className="mb-3">
          <label for="descriptionTextarea" className="form-label">Description and Instructions (Must not be empty)</label>
          <textarea className="form-control" id="descriptionTextarea" style={{height: 'auto'}} rows="3"  placeholder="e.g. Ingredients
1 cup warm milk (110 degrees F/45 degrees C)
2 eggs, room temperature
⅓ cup margarine, melted"></textarea>
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-primary mb-3">Post</button>
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-primary mb-3">Clear User's Posts</button>
        </div>
      </div>
    </div>
  );
}

export default UploadPage;
