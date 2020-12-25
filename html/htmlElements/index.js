const radioButtonOptions = (options) => {
  debugger;
  let optionsArray = [];
  options.map((opt) => {
    return optionsArray.push(`
    <div class=col-${Math.round(12/options.length)}>
    <input id=${opt.value} name="radio" type="radio" value="3" />
        <label for=${opt.value} class="brk-form-radio-label">
          ${opt.label}
        </label>
        </div>
        `);
  });
  return optionsArray.join("");
};
const htmlElements = (data) => {
  debugger;
  let htmlComponent = null;
  switch (data.type) {
    case 'TextField':
      htmlComponent = {
        element: `
      <label
          class="brk-form-label font__family-montserrat font__weight-bold"
          for=${data.value}>${data.label}</label>
      <input id=${data.value} name="name"
          type="text" placeholder=${data.placeholder}>
  `,
        key: "",
        id: "",
        type: "",
        colSize: "",
      };
      break;
    case 'Select':
      htmlComponent = {
        element: `<label
      class="brk-form-label font__family-montserrat font__weight-bold">City/State</label>
  <select name="select">
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
  </select>`,
        key: "",
        id: "",
        type: "",
        colSize: "",
      };
      break;
    case 'Radio':
      htmlComponent = {
        element: `
      <label class="brk-form-label font__family-montserrat font__weight-bold">${
        data.label
      }</label>
									<div class="row">
         
         ${radioButtonOptions(data.options)}
         
         
      </div>
      `,
        key: "",
        id: "",
        type: "",
        colSize: "",
      };
      break;
    case 'Checkbox':
      htmlComponent = {
        element: `<input id="checkbox-round-1" name="checkbox" type="checkbox" value="1" checked="checked">
      <label class="brk-form-checkbox-label" for="checkbox-round-1">Checked Option</label>`,
        key: "",
        id: "",
        type: "",
        colSize: "",
      };
      break;
    case 'date':
      htmlComponent = {
        element: `<label class="brk-form-label font__family-montserrat font__weight-bold">Datepicker</label>
      <input id="date-id-round" class="brk-form-date" name="date-round" type="date">`,
        key: "",
        id: "",
        type: "",
        colSize: "",
      };
      break;
    case 'Email':
      htmlComponent = {
        element: `  <label
      class="brk-form-label font__family-montserrat font__weight-bold"
      for="brk-name-form">Name</label>
  <input id="brk-name-form" name="name"
      type="text" placeholder="Syed">`,
        key: "",
        id: "",
        type: "",
        colSize: "",
      };
      break;
    case 'number':
      htmlComponent = {
        element: `  <label
      class="brk-form-label font__family-montserrat font__weight-bold"
      for="brk-name-form">Name</label>
  <input id="brk-name-form" name="name"
      type="tel" placeholder="Syed">`,
        key: "",
        id: "",
        type: "",
        colSize: "",
      };
      break;
    case 'FileUpload':
      htmlComponent = {
        element:`<form id="uploadFile" method="post" action="upload.php" enctype="multipart/form-data">
        <input type="file" name="uploadctl" multiple />
        <ul id="fileList">
          <!-- The file list will be shown here -->
        </ul>
      </form>`,
        key: "",
        id: "fileupload",
        type: "",
        colSize: "",
      };
      break;
    case 'TextArea':
      htmlComponent = {
        element: `<label class="brk-form-label font__family-montserrat font__weight-bold" for="brk-textarea-form">Text area</label>
      <textarea id="brk-textarea-form" name="textarea" placeholder="Type your text"></textarea>`,
        key: "",
        id: "",
        type: "",
        colSize: "",
      };
      break;
    default:
      htmlComponent = null;
  }
  return htmlComponent
};
