import React from "react";

function ProfilePic() {
  const style = {
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    borderRadius: "30%",
    padding: "4px",
  };

  return (
    <div class="row justify-content-center">
      <div class="col-lg-8 col-md-10">
        <img
          src={require("../../Files/imgs/NazmulTakbir.jpeg")}
          class="img-fluid"
          alt="Nazmul Takbir"
          style={style}
        ></img>
      </div>
    </div>
  );
}

export default ProfilePic;
