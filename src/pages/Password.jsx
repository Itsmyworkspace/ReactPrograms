import { useState } from "react";

function Password() {
  const [toggle, setToggle] = useState(false);

  const togglePassword = () => {
    setToggle((prev) => !prev);
  };

  return (
    <>
      <div>
        <input type={toggle ? "text" : "password"} placeholder="Password" />
        <button type="button" onClick={togglePassword}>
          {toggle ? "Hide" : "Show"}
        </button>
      </div>
    </>
  );
}

export default Password;
