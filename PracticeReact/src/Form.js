import React, { useState } from "react";
import "./Form.css";

const Form = () => {
  const initialState = {
    fullName: "",
    email: "",
    concern: "",
    notes: "",
  };
  const [formData, setFormData] = useState(initialState);

  const [submittedData, setSubmittedData] = useState([]);
  const [errors, setErrors] = useState();
  const [showTooltip, setShowTooltip] = useState(false);
  const [isUserExist, setIsUserExist] = useState(false);
  const onChangeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateData = (data) => {
    let errorObj = {};
    Object.keys(data).map((key) => {
      if (data[key] === "") {
        errorObj[key] = `Please enter the ${key}*`;
      }
    });
    setErrors(errorObj);
    return errorObj;
  };

  const isExistingUser = (email, data) => {
    const isUserPresent = data.some((user)=> {
      return email === user.email
    })
    return isUserPresent;
  }

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const objData = {
      fullName: e.target[0].value,
      email: e.target[1].value,
      concern: e.target[2].value,
      notes: e.target[3].value,
    };
    const errorFields = validateData(objData);
    if (Object.keys(errorFields).length > 0) return;

    setShowTooltip(true);
    setTimeout(() => {
      setShowTooltip(false);
    }, 5000);

    if(isExistingUser(e.target[1].value, submittedData)){
      setIsUserExist(true);
      return;
    } 

    setFormData({
      fullName: "",
      email: "",
      concern: "",
      notes: "",
    });
   
    setSubmittedData([...submittedData, objData]);
  };

  function showError(listItem) {
    if (errors?.[listItem])
      return <p className="displayError">{errors[listItem]}</p>;
  }
  return (
    <div className="mainContainer">
      <form onSubmit={onSubmitHandler}>
        <div className="container">
          <div className="containerElement">
            <p className="formLabel">
              <label htmlFor="fullName">Full Name:</label>
            </p>
            <input
              id="fullName"
              type="text"
              name="fullName"
              onChange={onChangeHandler}
              value={formData.fullName}
              className="listItem"
            />
            {showError("fullName")}
          </div>

          <div className="containerElement">
            <p className="formLabel">
              <label htmlFor="email">Email:</label>
            </p>
            <input
              id="email"
              type="email"
              name="email"
              onChange={onChangeHandler}
              value={formData.email}
              className="listItem"
            />
            {showError("email")}
          </div>

          <div className="containerElement">
            <p className="formLabel">
              <label htmlFor="education">Concern: </label>
            </p>
            <select
              onChange={onChangeHandler}
              name="concern"
              className="listItem"
              id="concern"
              value={formData.concern}
            >
              <option value="" hidden>
                Select your concern
              </option>
              <option value="Facing Network Issue">Facing Network Issue</option>
              <option value="Facing Performance Issue">
                Facing Performance Issue
              </option>
              <option value="Functionality Not Working">
                Functionality Not Working
              </option>
            </select>
            {showError("concern")}
          </div>

          <div className="containerElement">
            <p className="formLabel">
              <label htmlFor="notes">Add Notes:</label>
            </p>
            <textarea
              id="notes"
              type="text-area"
              name="notes"
              onChange={onChangeHandler}
              value={formData.notes}
              className="listItem"
              style={{ verticalAlign: "bottom" }}
            ></textarea>
            {showError("notes")}
          </div>
          <div>
            <input
              id="button"
              type="submit"
              name="button"
              value={"Submit Data"}
              className="listItem"
            />
          </div>
          {showTooltip && (
            <div className="tooltip">
              {isUserExist ? "User already present" : "Your Request has been successfully submitted"}
            </div>
          )}
          {submittedData && submittedData.length > 0 && (
            <h1 className="concernHeading">List of Submitted Concern are:</h1>
          )}
        </div>
      </form>

      <div style={{ position: "relative" }}>
        {submittedData && submittedData.length > 0 && (
          <div>
            <div className="dataHeader">
              <span className="rowElement">
                <b>Name</b>
              </span>
              <span className="rowElement">
                <b>Email</b>
              </span>
              <span className="rowElement">
                <b>Concern</b>
              </span>
              <span className="rowElement">
                <b>Notes</b>
              </span>
            </div>
          </div>
        )}

        {submittedData &&
          submittedData.length > 0 &&
          submittedData.map((item) => {
            return (
              <div className="dataHeader">
                <span className="rowElement">{item.fullName}</span>
                <span className="rowElement">{item.email}</span>
                <span className="rowElement">{item.concern}</span>
                <span className="rowElement">{item.notes}</span>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Form;
