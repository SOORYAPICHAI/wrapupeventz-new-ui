const validationMessages = {
  required: "This field is required",
  emailError: "Enter a valid email-Id",
};
function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
// validations
let error = {};
const conditions = (inputType, id) => {
  debugger;
  switch (inputType) {
    case "input":
      if (document.getElementById(id).type === "text") {
        if (document.getElementById(id).value) {
          document.getElementById(`${id}-error-label`).style.display = "none";
          document.getElementById(`${id}-error-label`).innerHTML = "";
          error[`${id}-error-label`] = false;
        } else {
          document.getElementById(`${id}-error-label`).style.display = "block";
          document.getElementById(`${id}-error-label`).innerHTML =
            validationMessages.required;
          error[`${id}-error-label`] = true;
        }
      } else if (document.getElementById(id).type === "radio") {
        var radios = document.getElementsByName(`${id}-name`);
        var valid = false;

        var i = 0;
        while (!valid && i < radios.length) {
          if (radios[i].checked) valid = true;
          i++;
        }
        if (valid) {
          document.getElementById(`${id}-error-label`).style.display = "none";
          document.getElementById(`${id}-error-label`).innerHTML = "";
          error[`${id}-error-label`] = false;
        } else {
          document.getElementById(`${id}-error-label`).style.display = "block";
          document.getElementById(`${id}-error-label`).innerHTML =
            validationMessages.required;
          error[`${id}-error-label`] = true;
        }
      } else if (document.getElementById(id).type === "checkbox") {
        var checkbox = document.getElementsByName(`${id}-name`);
        var valid = false;

        var i = 0;
        while (!valid && i < checkbox.length) {
          if (checkbox[i].checked) valid = true;
          i++;
        }
        if (valid) {
          document.getElementById(`${id}-error-label`).style.display = "none";
          document.getElementById(`${id}-error-label`).innerHTML = "";
          error[`${id}-error-label`] = false;
        } else {
          document.getElementById(`${id}-error-label`).style.display = "block";
          document.getElementById(`${id}-error-label`).innerHTML =
            validationMessages.required;
          error[`${id}-error-label`] = true;
        }
      } else if (document.getElementById(id).type === "email") {
        debugger;
        if (document.getElementById(id).value) {
          if (validateEmail(document.getElementById(id).value)) {
            document.getElementById(`${id}-error-label`).style.display = "none";
            document.getElementById(`${id}-error-label`).innerHTML = "";
            error[`${id}-error-label`] = false;
          } else {
            document.getElementById(`${id}-error-label`).style.display =
              "block";
            document.getElementById(`${id}-error-label`).innerHTML =
              validationMessages.emailError;
            error[`${id}-error-label`] = true;
          }
        } else {
          document.getElementById(`${id}-error-label`).style.display = "block";
          document.getElementById(`${id}-error-label`).innerHTML =
            validationMessages.required;
          error[`${id}-error-label`] = true;
        }
      } else if (document.getElementById(id).type === "tel") {
        if (document.getElementById(id).value) {
          document.getElementById(`${id}-error-label`).style.display = "none";
          document.getElementById(`${id}-error-label`).innerHTML = "";
          error[`${id}-error-label`] = false;
        } else {
          document.getElementById(`${id}-error-label`).style.display = "block";
          document.getElementById(`${id}-error-label`).innerHTML =
            validationMessages.required;
          error[`${id}-error-label`] = true;
        }
      } else if (document.getElementById(id).type === "date") {
        if (new Date(document.getElementById(id).value).getFullYear()) {
          document.getElementById(`${id}-error-label`).style.display = "none";
          document.getElementById(`${id}-error-label`).innerHTML = "";
          error[`${id}-error-label`] = false;
        } else {
          document.getElementById(`${id}-error-label`).style.display = "block";
          document.getElementById(`${id}-error-label`).innerHTML =
            validationMessages.required;
          error[`${id}-error-label`] = true;
        }
      }
      break;
    case "select":
      if (document.getElementById(id).value.length > 0) {
        document.getElementById(`${id}-error-label`).style.display = "none";
        document.getElementById(`${id}-error-label`).innerHTML = "";
        error[`${id}-error-label`] = false;
      } else {
        document.getElementById(`${id}-error-label`).style.display = "block";
        document.getElementById(`${id}-error-label`).innerHTML =
          validationMessages.required;
        error[`${id}-error-label`] = true;
      }
      break;
    case "textArea":
      if (document.getElementById(id).value) {
        document.getElementById(`${id}-error-label`).style.display = "none";
        document.getElementById(`${id}-error-label`).innerHTML = "";
        error[`${id}-error-label`] = false;
      } else {
        document.getElementById(`${id}-error-label`).style.display = "block";
        document.getElementById(`${id}-error-label`).innerHTML =
          validationMessages.required;
        error[`${id}-error-label`] = true;
      }
      break;
  }
};
const validations = (parentDivIds, isUpload, isNext) => {
  // if uploads exists

  if (isUpload) {
    let urls = urls();
  } else {
    var IDs = [];
    parentDivIds.map((id) => {
      return ["input", "select", "radio", "checkbox", "file", "textArea"].map(
        (inputTypes) => {
          return $(`#${id}`)
            .find(inputTypes)
            .each(function () {
              conditions(inputTypes, $(this).attr("id"));
              IDs.push($(this).attr("id"));
            });
        }
      );
    });
  }

  if (!(Object.keys(error).filter(val=>error[val]===true).length > 0)) {
    if (isNext) {
      document.getElementById(isNext).click()
    } else {
        
      // API CALL
    }
  }
  else{
    document.getElementById("collapseOneHref").href = "javascript:void(0);"
      document.getElementById("collapseTwoHref").href = "javascript:void(0);"
  }
};


// NEED TO DO PANNEL BASED VALIDATIONS
// REGISTER API INTEGERATION IS PENDING
// OTP - MOBILE/EMAIL
// ADMIN
// PROFILE

// WEBSITE