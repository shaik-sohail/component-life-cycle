import React, { useState } from "react";
import ManOutlinedIcon from "@mui/icons-material/ManOutlined";
import WomanOutlinedIcon from "@mui/icons-material/WomanOutlined";
const UserForm = () => {
  const [name, setName] = useState();
  const [valid, setValid] = useState(false);
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState();
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
                  setName(e.target.value);
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
                <input
                  type="number"
                  name="Age"
                  onChange={(e) => setAge(e.target.value)}
                />
              </label>
            </div>
            <div>
              <label>
                Gender
                <select
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
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
        {age > 0 && age < 20 && (
          <img
            src="https://images.pexels.com/photos/247502/pexels-photo-247502.jpeg?cs=srgb&dl=pexels-pixabay-247502.jpg&fm=jpg"
            alt="age<20"
            style={{ width: "500px" }}
          />
        )}
        {age >= 20 && age < 40 && (
          <img
            src="https://nationalzoo.si.edu/sites/default/files/styles/1400_scale/public/animals/sumatrantiger-002.jpg?itok=0LqptSTF"
            alt="20<age<40"
            style={{ width: "500px" }}
          />
        )}
        {age >= 40 && (
          <img
            src="https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_5/IMAGE_1663404877.webp"
            alt="age>40"
            style={{ width: "500px" }}
          />
        )}
      </div>
      <div data-testid="gender">
        {gender &&
          (gender === "male" ? (
            <ManOutlinedIcon sx={{ fontSize: 100 }} />
          ) : (
            <WomanOutlinedIcon sx={{ fontSize: 100 }} />
          ))}
      </div>
    </div>
  );
};

export default UserForm;
