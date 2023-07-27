import { useState } from "react"
import { useNavigate } from "react-router-dom"


export const Login = () => {

  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  const [error, setError] = useState(false);

  const onchangeUser = (e: any) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  const submitUser = () => {
    console.log(user);

    const url = "http://localhost:8080/login";

    fetch(url, {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "content-type": "application/json",
      }
    })
      .then((res) => res.json())
      .catch((error) => console.error("Error:", error))
      .then((response) => {
        if (response.user.role === "waiter") {
          navigate('/mesero');
        }
        else if (response.user.role === "admin") {
          navigate('/administrador');
        }
        else {
          console.log("error")
        }
      }
      )
  }

  return (
    <>
      <div>
        <label className="form_email" id="email">Email</label>
        <input
          type="email"
          name="email"
          placeholder="email"
          value={user.email}
          onChange={onchangeUser}
        />

        <label className="form_password" id="password">Password</label>
        <input
          type="password"
          name="password"
          placeholder="password"
          value={user.password}
          onChange={onchangeUser}
        />
        <button type="submit" onClick={submitUser}>Ingresar</button>
      </div>
      {
        error && (
          <p>complete ambos apartados</p>
        )
      }
    </>
  )
}