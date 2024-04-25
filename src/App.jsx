import { useSelector, useDispatch } from "react-redux";
import { useRef } from "react";
import { add, deleteUser, update } from "./redux/usersSlice";
import "./App.css";
function App() {
  const dispatch = useDispatch();
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const users = useSelector((state) => state.user.value);
  function handleClick(e) {
    e.preventDefault();
    const user = {
      id: Date.now(),
      name: nameRef.current.value,
      email: emailRef.current.value,
    };
    dispatch(add(user));
    nameRef.current.value = null;
    emailRef.current.valu = null;
  }
  function handleUpdate(user) {
    const name = prompt("Ismingizni kiriting", user.name);
    const email = prompt("Emailingizni kiriting", user.email);
    const userObj = {
      id: user.id,
      name: name,
      email: email,
    };
    dispatch(update(userObj));
  }
  function handleDelete(id) {
    dispatch(deleteUser(id));
  }
  return (
    <div className="container">
      <form className="form">
        <input
          className="input"
          ref={nameRef}
          type="text"
          placeholder="Enter Name"
        />
        <input
          className="input"
          ref={emailRef}
          type="text"
          placeholder="Enter Email"
        />
        <button className="saver" onClick={handleClick}>
          SAVE
        </button>
      </form>
      <div className="userFather">
        <p className="title">User Ma'lumotlar</p>
        <div className="map">
          {users.length > 0 &&
            users.map((user, index) => {
              return (
                <div className="father" key={index}>
                  <p className="text">{index + 1}</p>
                  <p className="text">{user.name}</p>
                  <p className="text">{user.email}</p>
                  <div className="action">
                    <span
                      className="edit"
                      onClick={() => {
                        handleUpdate(user);
                      }}
                    >
                      update
                    </span>
                    <span
                      className="delete"
                      onClick={() => {
                        handleDelete(user.id);
                      }}
                    >
                      delete
                    </span>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default App;
