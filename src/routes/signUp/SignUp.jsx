import "./signUp.scss";

function SignUp() {
  return (
    <div className="signUp">
      <div className="textContainer">
        <h1>Sign Up</h1>

        <div className="email">
          <form action="">
            <input
              className="emailIn"
              type="email"
              placeholder="Enter email"
              required
            />


            <input
              type="password"
              placeholder="Create your password"
              required
            />
            <button>
              <h4>Submit</h4>
            </button>
          </form>
        </div>
        <p>Sign Up with...</p>
        <div className="icons">
        <a href="">
            <img src="./public/apple.png" alt="" />
          </a>
          <a href="">
            <img src="./public/google.png" alt="" />
          </a>
          <a href=""><img src="./public/facebook.png" alt="" /></a>
          <a href=""><img src="./public/github.png" alt="" /></a>
        </div>
      </div>
      <div className="imgContainer">
        <img src="./public/user.png" alt="" />
      </div>
    </div>
  );
}

export default SignUp;
