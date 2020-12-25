const radioButtonOptions = (options, data) => {
  let optionsArray = [];
  options.map((opt) => {
    return optionsArray.push(`
    <div class=col-${Math.round(12 / options.length)}>
    <input id=${data.id} name=${data.id}-name type="radio" value="3" />
        <label for=${data.id} class="brk-form-radio-label">
          ${opt.label}
        </label>
        </div>
        `);
  });
  return optionsArray.join("");
};
const htmlElements = (data) => {
  let htmlComponent = null;
  switch (data.type) {
    case "TextField":
      htmlComponent = {
        element: `
      <label
          class="brk-form-label font__family-montserrat font__weight-bold"
          for=${data.id}>${data.label}</label>
      <input id=${data.id} name="name"
          type="text" placeholder=${data.placeholder}>
          <label
          class="font__family-montserrat" style="color:red;padding-left:5px;padding-top:5px;display:none"
          id=${data.id}-error-label
          >''</label>
          
  `,
        key: "",
        id: "",
        type: "",
        colSize: "",
      };
      break;
    case "Select":
      htmlComponent = {
        element: `<label
      class="brk-form-label font__family-montserrat font__weight-bold">City/State</label>
  <select name="select" id=${data.id}>
  <option disabled selected value> -- select an option -- </option>
      <option value="Option 1">Option 1</option>
      <option value="Option 2">Option 2</option>
      <option value="Option 3">Option 3</option>
      <option value="Option 4">Option 4</option>
      <option value="Option 5">Option 5</option>
      <option value="Option 6">Option 6</option>
      <option value="Option 7">Option 7</option>
      <option value="Option 8">Option 8</option>
      <option value="Option 9">Option 9</option>
      <option value="Option 10">Option 10</option>
  </select>
  <label
          class="font__family-montserrat" style="color:red;padding-left:5px;padding-top:5px;display:none"
          id=${data.id}-error-label
          >''</label>
  `,
        key: "",
        id: "",
        type: "",
        colSize: "",
      };
      break;
    case "Radio":
      htmlComponent = {
        element: `
      <label class="brk-form-label font__family-montserrat font__weight-bold">${
        data.label
      }</label>
									<div class="row">
         
         ${radioButtonOptions(data.options, data)}
         
         
      </div>
      <label
          class="font__family-montserrat" style="color:red;padding-left:5px;padding-top:5px;display:none"
          id=${data.id}-error-label
          >''</label>
      `,
        key: "",
        id: "",
        type: "",
        colSize: "",
      };
      break;
    case "Checkbox":
      htmlComponent = {
        element: `<input id=${data.id} name="checkbox" type="checkbox" value="1" checked="checked">
      <label class="brk-form-checkbox-label" for=${data.id}>Checked Option</label>
      <label
          class="font__family-montserrat" style="color:red;padding-left:5px;padding-top:5px;display:none"
          id=${data.id}-error-label
          >''</label>
      `,
        key: "",
        id: "",
        type: "",
        colSize: "",
      };
      break;
    case "date":
      htmlComponent = {
        element: `<label class="brk-form-label font__family-montserrat font__weight-bold">${data.label}</label>
      <input id=${data.id} class="brk-form-date" name="date-round" type="date">
      <label
          class="font__family-montserrat" style="color:red;padding-left:5px;padding-top:5px;display:none"
          id=${data.id}-error-label
          >''</label>
      `,
        key: "",
        id: "",
        type: "",
        colSize: "",
      };
      break;
      case "tel":
      htmlComponent = {
        element: `<label class="brk-form-label font__family-montserrat font__weight-bold">${data.label}</label>
      <input id=${data.id} class="brk-form-date" name="date-round" type="text">
      <label
          class="font__family-montserrat" style="color:red;padding-left:5px;padding-top:5px;display:none"
          id=${data.id}-error-label
          >''</label>
      `,
        key: "",
        id: "",
        type: "",
        colSize: "",
      };
      break;
    case "Email":
      htmlComponent = {
        element: `  <label
      class="brk-form-label font__family-montserrat font__weight-bold"
      for=${data.id}>Name</label>
  <input id=${data.id} name="name"
      type="email" placeholder="example@domain.com">
      
          <label
          class="font__family-montserrat" style="color:red;padding-left:5px;padding-top:5px;display:none"
          id=${data.id}-error-label
          >''</label>
      `,
        key: "",
        id: "",
        type: "",
        colSize: "",
      };
      break;
    case "number":
      htmlComponent = {
        element: `  <label
      class="brk-form-label font__family-montserrat font__weight-bold"
      for=${data.id}>Name</label>
  <input id=${data.id} name="name"
      type="tel" placeholder="Syed">
      <label
          class="font__family-montserrat" style="color:red;padding-left:5px;padding-top:5px;display:none"
          id=${data.id}-error-label
          >''</label>
      `,
        key: "",
        id: "",
        type: "",
        colSize: "",
      };
      break;
    case "FileUpload":
      htmlComponent = {
        element: `<form id=${data.id} method="post" action="upload.php" enctype="multipart/form-data">
        <input type="file" name="uploadctl" multiple id=${data.id}/>
        <ul id="fileList">
          <!-- The file list will be shown here -->
        </ul>
      </form>
      <label
          class="font__family-montserrat" style="color:red;padding-left:5px;padding-top:5px;display:none"
          id=${data.id}-error-label
          >''</label>
      `,
        key: "",
        id: "fileupload",
        type: "",
        colSize: "",
      };
      break;
    case "TextArea":
      htmlComponent = {
        element: `<label class="brk-form-label font__family-montserrat font__weight-bold" for=${data.id}>Text area</label>
      <textarea id=${data.id} name="textarea" placeholder="Type your text"></textarea>
      <label
          class="font__family-montserrat" style="color:red;padding-left:5px;padding-top:5px;display:none"
          id=${data.id}-error-label
          >''</label>
      `,
        key: "",
        id: "",
        type: "",
        colSize: "",
      };
      break;
    default:
      htmlComponent = null;
  }
  return htmlComponent;
};
