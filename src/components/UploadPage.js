import { useState } from "react";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css"
import { SERVER_HOST, SERVER_PORT, EMAIL, TITLE, TAG1, TAG2, TAG3, DESCRIPTION } from "../settings"
import { displaySuccess, displayWarning, displayError } from "../util/util.js"


function UploadPage() {
  const [formData, setFormData] = useState({
    emailValue: '',
    titleValue: '',
    tag1Value: '',
    tag2Value: '',
    tag3Value: '',
    descriptionValue: ''
  })

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handlePost = () => {
    if (formData.emailValue === "") {
      displayWarning("Email field can't be empty");
      return;
    } else if (formData.titleValue === "") {
      displayWarning("Title field can't be empty");
      return;
    } else if (formData.descriptionValue === "") {
      displayWarning("Description field can't be empty");
      return;
    }

    postRecipe();
  };

  const handleDelete = () => {
    if (formData.emailValue === "") {
      displayWarning("Email field can't be empty");
      return;
    }

    deleteRecipies();
  }

  const postRecipe = async () => {
    let status = 0;
    const uri = SERVER_HOST + ':' + SERVER_PORT + "/recipe"
    await fetch(uri, {
      method: 'POST',
      body: JSON.stringify({
        [EMAIL]: formData.emailValue,
        [TITLE]: formData.titleValue,
        [TAG1]: formData.tag1Value,
        [TAG2]: formData.tag2Value,
        [TAG3]: formData.tag3Value,
        [DESCRIPTION]: formData.descriptionValue
      }),
      headers: {
        'Content-Type': 'application/json; charset=UTF-8'
      }
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

  const deleteRecipies = async () => {
    let status = 0;
    const uri = SERVER_HOST + ':' + SERVER_PORT + "/recipe?" + new URLSearchParams({[EMAIL]: formData.emailValue});
    await fetch(uri, {
      method: 'DELETE'
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
  }

  return (
    <div className="page">
      <div>
        <div class="row g-3 align-items-center">
          <div class="col-auto">
            <label for="emailInput" class="col-form-label">Email</label>
          </div>
          <div class="col-auto">
            <input type="text" id="emailInput" name="emailValue" value={formData.emailValue} onChange={handleChange} class="form-control" aria-describedby="emailHelpInline" placeholder="baker123@gmail.com" />
          </div>
        </div>
        <div class="row g-3 align-items-center">
          <div class="col-auto">
            <label for="titleInput" class="col-form-label">Recipe Title</label>
          </div>
          <div class="col-auto">
            <input type="text" id="titleInput" name="titleValue" value={formData.titleValue} onChange={handleChange} class="form-control" aria-describedby="titleHelpInline" placeholder="Brownies" />
          </div>
        </div>
        <div class="row g-3 align-items-center">
          <div class="col-auto">
            <label for="tagOneInput" class="col-form-label">Tag 1</label>
          </div>
          <div class="col-auto">
            <input type="text" id="tagOneInput" name="tag1Value" value={formData.tag1Value} onChange={handleChange} class="form-control" aria-describedby="tagOneHelpInline" placeholder="Chocolate" />
          </div>
          <div class="col-auto">
            <span id="tagOneHelpInline" class="form-text" style={{color: 'white'}}>
              (Optional)
            </span>
          </div>
        </div>
        <div class="row g-3 align-items-center">
          <div class="col-auto">
            <label for="tagTwoInput" class="col-form-label">Tag 2</label>
          </div>
          <div class="col-auto">
            <input type="text" id="tagTwoInput" name="tag2Value" value={formData.tag2Value} onChange={handleChange} class="form-control" aria-describedby="tagTwoHelpInline" placeholder="Fudge" />
          </div>
          <div class="col-auto">
            <span id="tagTwoHelpInline" class="form-text" style={{color: 'white'}}>
              (Optional)
            </span>
          </div>
        </div>
        <div class="row g-3 align-items-center">
          <div class="col-auto">
            <label for="tagThreeInput" class="col-form-label">Tag 3</label>
          </div>
          <div class="col-auto">
            <input type="text" id="tagThreeInput" name="tag3Value" value={formData.tag3Value} onChange={handleChange} class="form-control" aria-describedby="tagThreeHelpInline" placeholder="Gooey" />
          </div>
          <div class="col-auto">
            <span id="tagThreeHelpInline" class="form-text" style={{color: 'white'}}>
              (Optional)
            </span>
          </div>
        </div>
        <div className="mb-3">
          <label for="descriptionTextarea" className="form-label">Description and Instructions</label>
          <textarea className="form-control" id="descriptionTextarea" name="descriptionValue" value={formData.descriptionValue} onChange={handleChange} style={{height: 'auto'}} rows="3"  placeholder="Ingredients..."></textarea>
        </div>
        <div className="col-auto">
          <button className="btn btn-primary mb-3" onClick={handlePost}>Post</button>
        </div>
        <div className="col-auto">
          <button className="btn btn-primary mb-3" onClick={handleDelete}>Delete User's Posts</button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default UploadPage;
