const questions = () => {
  return {
    photographer: [
      {
        label: "Please select your type",
        value: "1",
        type: "Radio",
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
        isRequiried: true,
        placeholder: "Enter here...",
      },
      {
        label: "Describe about yourself in not more than 200 words",
        value: "3",
        type: "TextField",
        isRequiried: true,
        placeholder: "Enter here...",
      },
      {
        label: "Can we contact you for more details",
        value: "3",
        type: "Radio",
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
        isRequiried: true,
        options: [
          { label: "Candid", value: "Candid" },
          { label: "Traditional", value: "traditional" },
        ],
      },
      {
        label: "Upload your photographs here",
        value: "3",
        type: "FileUpload",
        isRequiried: true,
        placeholder: "Enter here...",
      },
    ],
  };
};
