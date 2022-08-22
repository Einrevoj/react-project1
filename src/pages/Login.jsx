import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="py-5">
      <div class="page-content d-flex align-items-center">
        <div class="container d-flex justify-content-center">
          <div class="col-12 col-sm-10 col-md-8 col-lg-7 col-xl-6 col-xxl-5">
            <div class="auth-card">
              <div class="p-3 mt-3 d-flex justify-content-center">
                <Link to="/">
                  {" "}
                  <img src="img1.png" alt="My pic" />
                </Link>
                <span id="brand-name" class="fw-bold fs-1 pt-3">
                  J.Cano
                </span>
              </div>
              <h5 class="text-center fst-italic">Hire Me</h5>
              <button class="btn mt-5 mb-3 service-btn">
                <i class="fab fa-facebook me-2"></i>
                Login with Facebook
              </button>
              <button class="btn mb-3 service-btn">
                <i class="fab fa-google me-2"></i>
                Login with Google
              </button>
              <hr />
              <form>
                <div class="mb-2 mt-5">
                  <input
                    type="email"
                    class="form-control auth-input"
                    placeholder="Email Address"
                  />
                </div>
                <div class="mb-3">
                  <input
                    type="password"
                    class="form-control auth-input"
                    placeholder="Password"
                  />
                </div>
                <button
                  class="btn auth-btn mt-2 mb-4 bg-secondary w-100 text-white"
                  type="submit"
                >
                  Login
                </button>
              </form>
              <p class="text-center mb-1">
                <a href="index.html" class="text-muted">
                  Forgot Password?
                </a>
              </p>
              <p class="text-center mb-4">
                Don't have an account?
                <Link to="/Signup" class="text-muted">
                  Register here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
