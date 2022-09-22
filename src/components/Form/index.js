import React, { useState } from "react";
import ManOutlinedIcon from "@mui/icons-material/ManOutlined";
import WomanOutlinedIcon from "@mui/icons-material/WomanOutlined";
const UserForm = () => {
  const [userData, setUserData] = useState({
    name: "",
    age: 0,
    gender: "",
  });

  const changeHandler = (e) => {
    setUserData((prevValues) => {
      return { ...prevValues, [e.target.name]: e.target.value };
    });
  };
  const [valid, setValid] = useState(false);
  return (
    <div>
      <form>
        <div>
          <label>
            Name:
            <input
              type="text"
              name="name"
              onChange={(e) => {
                if (/^[a-zA-Z]/.test(e.target.value)) {
                  setValid(true);
                  changeHandler(e);
                } else {
                  setValid(false);
                }
              }}
            />
          </label>
        </div>
        {valid ? (
          <>
            <div>
              <label>
                Age:
                <input type="number" name="age" onChange={changeHandler} />
              </label>
            </div>
            <div>
              <label>
                Gender
                <select
                  name="gender"
                  value={userData.gender}
                  onChange={changeHandler}
                >
                  <option>Pick a choice!</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </label>
            </div>
          </>
        ) : null}
      </form>
      <div style={{ paddingTop: "50px" }}>
        {userData.age > 0 && userData.age < 20 && (
          <img
            src="https://images.pexels.com/photos/247502/pexels-photo-247502.jpeg?cs=srgb&dl=pexels-pixabay-247502.jpg&fm=jpg"
            alt="age<20"
            style={{ width: "500px" }}
          />
        )}
        {userData.age >= 20 && userData.age < 40 && (
          <img
            src="https://nationalzoo.si.edu/sites/default/files/styles/1400_scale/public/animals/sumatrantiger-002.jpg?itok=0LqptSTF"
            alt="20<age<40"
            style={{ width: "500px" }}
          />
        )}
        {userData.age >= 40 && (
          <img
            src="https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_5/IMAGE_1663404877.webp"
            alt="age>40"
            style={{ width: "500px" }}
          />
        )}
      </div>
      <div data-testid="gender">
        {userData.gender &&
          (userData.gender === "male" ? (
            <ManOutlinedIcon sx={{ fontSize: 100 }} />
          ) : (
            <WomanOutlinedIcon sx={{ fontSize: 100 }} />
          ))}
      </div>
    </div>
  );
};

export default UserForm;
