var index = 0;
const generateIdForElement = (role, type) => {
  index = index + 25;
  return role.concat("-").concat(type).concat("-").concat(index);
};
const questions = () => {
  return {
    basic: [
      {
        label: "Name",
        value: "1",
        type: "TextField",
        id: generateIdForElement("basic", "TextField"),
        isRequiried: true,
        placeholder: "Enter here...",
      },
      {
        label: "Email",
        value: "2",
        type: "Email",
        id: generateIdForElement("basic", "TextField"),
        isRequiried: true,
        placeholder: "Enter here...",
      },
      {
        label: "Gender",
        value: "3",
        type: "Radio",
        id: generateIdForElement("basic", "Radio"),
        isRequiried: true,
        options: [
          { label: "Male", value: "Male" },
          { label: "Female", value: "Female" },
        ],
      },
      {
        label: "DOB",
        value: "3",
        type: "date",
        id: generateIdForElement("basic", "date"),
        isRequiried: true,
        placeholder: "Enter here...",
      },
      {
        label: "Mobile Number",
        value: "3",
        type: "tel",
        id: generateIdForElement("basic", "tel"),
        isRequiried: true,
        placeholder: "Enter here...",
      },
      {
        label: "City/State",
        value: "3",
        id: generateIdForElement("photographer", "Select"),
        type: "Select",
        isRequiried: true,
        placeholder: "Enter here...",
      },
      {
        label: "Pincode",
        value: "3",
        type: "tel",
        id: generateIdForElement("basic", "tel"),
        isRequiried: true,
        placeholder: "Enter here...",
      },
    ],
    photographer: [
      {
        label: "Please select your type",
        value: "1",
        type: "Radio",
        id: generateIdForElement("photographer", "Radio"),
        isRequiried: true,
        placeholder: "Enter here...",
        options: [
          { label: "Candid", value: "Candid" },
          { label: "Traditional", value: "traditional" },
        ],
      },
      {
        label:
          "How many years of experience do you have in wedding photographer ?",
        value: "2",
        type: "TextField",
        id: generateIdForElement("photographer", "TextField"),
        isRequiried: true,
        placeholder: "Enter here...",
      },
      {
        label: "Describe about yourself in not more than 200 words",
        value: "3",
        type: "TextField",
        id: generateIdForElement("photographer", "TextField"),
        isRequiried: true,
        placeholder: "Enter here...",
      },
      {
        label: "Can we contact you for more details",
        value: "3",
        type: "Radio",
        id: generateIdForElement("photographer", "Radio"),
        isRequiried: true,
        options: [
          { label: "Candid", value: "Candid" },
          { label: "Traditional", value: "traditional" },
        ],
      },
      {
        label:
          "Are you willing to provide your photographs for promotion purpose ?",
        value: "3",
        type: "Radio",
        id: generateIdForElement("photographer", "Radio"),
        isRequiried: true,
        options: [
          { label: "Candid", value: "Candid" },
          { label: "Traditional", value: "traditional" },
        ],
      },
      {
        label: "Upload your photographs here",
        value: "3",
        id: generateIdForElement("photographer", "FileUpload"),
        type: "FileUpload",
        isRequiried: true,
        placeholder: "Enter here...",
      },
    ],
  };
};
