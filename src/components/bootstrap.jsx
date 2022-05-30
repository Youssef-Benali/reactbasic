import React from "react";

const Bootstrap = () => {
  const style = {
    border: "1px solid black",
  };
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div style={style} className="col-6">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus,
              eligendi!
            </p>
            
          </div>

          <div style={style} className="col-2">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus,
              eligendi!
            </p>
          </div>

          <div style={style} className="col-4">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus,
              eligendi!
            </p>
          </div>
        </div>

        <div className="container-fluid">

          <div className="row">

            <div style={style} className="col">
              sALUT 0 TOUS
            </div>

            <div style={style} className="col">
              <p>155165465465465</p>
            </div>

            <div style={style} className="col">
              <p>155165465465465</p>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Bootstrap;
