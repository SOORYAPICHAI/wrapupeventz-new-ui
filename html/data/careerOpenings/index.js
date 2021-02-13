const careersOpenings = async() => {
  const endPoint =
    window.location.host === "127.0.0.1:5500"
      ? "http://localhost:8000"
      : "https://wrapupeventz.com";
  let _openings = [];

  const json = async(response) => {
    let res = await response
    return res.json();
  };

  return new Promise((resolve,reject)=>{
    fetch(`${endPoint}/api/get-careeropenings`, {
      method: "GET",
    })
      // .then((status)=>status)
      .then(async(data) => {
        debugger;
        let datajson = json(await data);
        if (datajson?.data?.length > 0) {
          _openings = data.data.map((openings) => {
            return {
              label: openings.service_name,
              value: openings.service_id,
              description:
                "Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor consequat",
              image: "#",
              url: `/register.html?role=${openings.service_name}`,
            };
          });
        } else {
          _openings = [];
        }
        debugger;
        resolve(data)  
      })
      .catch((error) => {
        console.error("Error:", error);
      });
      
  })
  
  // return [
  //   { label: "Photographer", value:1, description:"Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor consequat", image:"#", url:"/register.html?role=photographer" },
  //   { label: "Catering", value:2, description:"Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor consequat", image:"#", url:"/register.html?role=photographer" },
  //   { label: "Makeup", value:3, description:"Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor consequat", image:"#", url:"/register.html?role=photographer" },
  //   { label: "Music & Dance", value:4, description:"Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor consequat", image:"#", url:"/register.html?role=photographer" },
  //   { label: "Venues", value:5, description:"Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor consequat", image:"#", url:"/register.html?role=photographer" },
  //   { label: "Decorators", value:6, description:"Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor consequat", image:"#", url:"/register.html?role=photographer" },
  // ];
};
