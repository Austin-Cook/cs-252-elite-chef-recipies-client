import { useState } from "react";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import { serverHost, serverPort, EMAIL, TITLE, TAG1, TAG2, TAG3, DESCRIPTION } from "../settings"

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

  const postRecipe = async () => {
    // let status = 0;
    const uri = serverHost + ':' + serverPort + "/recipe"
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
    .then((response) => response.json())
    .then((data) => {
      displaySuccess(data.message);
    })
    .catch((err) => displayError(err.message));
    // .then((response) => {
    //   displayError("hi");
    //   status = response.status;
    //   return response.json();
    // })
    // .then((data) => {
    //   displaySuccess("hi");
    //   if (status === 200)
    //     displaySuccess(data.message);
    //   else
    //     displayError(data.message);
    // })
    // .catch((err) => {
    //   displayError(err.message);
    // });
  };

  const handleSubmit = (event) => {
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
    <div className="page">
      <div>
        <div class="row g-3 align-items-center">
          <div class="col-auto">
            <label for="emailInput" class="col-form-label">Email</label>
          </div>
          <div class="col-auto">
            <input type="text" id="emailInput" name="emailValue" value={formData.emailValue} onChange={handleChange} class="form-control" aria-describedby="emailHelpInline" placeholder="baker123@gmail.com" />
          </div>
          <div class="col-auto">
            <span id="emailHelpInline" class="form-text" style={{color: 'white'}}>

            </span>
          </div>
        </div>
        <div class="row g-3 align-items-center">
          <div class="col-auto">
            <label for="titleInput" class="col-form-label">Recipe Title</label>
          </div>
          <div class="col-auto">
            <input type="text" id="titleInput" name="titleValue" value={formData.titleValue} onChange={handleChange} class="form-control" aria-describedby="titleHelpInline" placeholder="Brownies" />
          </div>
          <div class="col-auto">
            <span id="titleHelpInline" class="form-text" style={{color: 'white'}}>

            </span>
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
          <textarea className="form-control" id="descriptionTextarea" name="descriptionValue" value={formData.descriptionValue} onChange={handleChange} style={{height: 'auto'}} rows="3"  placeholder="Ingredients
1 cup warm milk (110 degrees F/45 degrees C)
2 eggs, room temperature
⅓ cup margarine, melted"></textarea>
        </div>
        <div className="col-auto">
          <button className="btn btn-primary mb-3" onClick={handleSubmit}>Post</button>
        </div>
        <div className="col-auto">
          <button className="btn btn-primary mb-3">Delete User's Posts</button>
        </div>
      </div>
      <ToastContainer theme="dark" />
    </div>
  );
}

export default UploadPage;
