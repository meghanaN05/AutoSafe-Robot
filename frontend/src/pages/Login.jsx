import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../services/api";

function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);

    try {
      const res = await API.post("/auth/login", form);

      localStorage.setItem("token", res.data.token);

      navigate("/dashboard");
    } catch {
      setError("Invalid email or password. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="login-container">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@600;700&family=Inter:wght@400;500;600&display=swap');

        :root {
          --color-bg: #000000;
          --color-surface: #1a1a1a;
          --color-border: #333333;
          --color-text: #ffffff;
          --color-text-muted: #b0b0b0;
          --color-accent: #6366f1;
          --color-accent-hover: #4f46e5;
          --color-accent-light: rgba(99, 102, 241, 0.15);
          --color-danger: #ff6b6b;
          --shadow-card: 0 20px 45px -20px rgba(0, 0, 0, 0.8),
                         0 4px 12px -4px rgba(0, 0, 0, 0.5);
          --radius-card: 16px;
          --radius-field: 10px;
        }

        .login-container {
          min-height: 100vh;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          background: linear-gradient(
            135deg,
            #000000 0%,
            #111111 50%,
            #1a1a1a 100%
          );
          font-family: 'Inter', sans-serif;
          box-sizing: border-box;
        }

        .login-container * {
          box-sizing: border-box;
        }

        .login-card {
          position: relative;
          width: 100%;
          max-width: 400px;
          background: var(--color-surface);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-card);
          box-shadow: var(--shadow-card);
          padding: 40px 36px 32px;
          overflow: hidden;
        }

        .login-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(
            90deg,
            #6366f1,
            #818cf8,
            #38bdf8,
            #6366f1
          );
          background-size: 200% 100%;
          animation: drift 6s linear infinite;
        }

        @keyframes drift {
          0% {
            background-position: 0% 0%;
          }
          100% {
            background-position: 200% 0%;
          }
        }

        .login-header {
          margin-bottom: 28px;
          text-align: left;
        }

        .login-header h2 {
          margin: 0 0 4px;
          font-family: 'Sora', sans-serif;
          font-size: 28px;
          font-weight: 700;
          color: var(--color-text);
          letter-spacing: -0.01em;
        }

        .login-subtitle {
          margin: 0;
          font-size: 14px;
          color: var(--color-text-muted);
        }

        .login-form {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .form-group label {
          font-size: 13px;
          font-weight: 600;
          color: var(--color-text);
        }

        .form-group input {
          width: 100%;
          padding: 12px 14px;
          font-size: 14px;
          font-family: inherit;
          color: #ffffff;
          background: #262626;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-field);
          outline: none;
          transition: all 0.2s ease;
        }

        .form-group input::placeholder {
          color: #888888;
        }

        .form-group input:hover {
          border-color: #555555;
        }

        .form-group input:focus {
          background: #2d2d2d;
          border-color: var(--color-accent);
          box-shadow: 0 0 0 3px var(--color-accent-light);
        }

        .login-error {
          font-size: 13px;
          color: var(--color-danger);
          margin: -4px 0 0;
        }

        .btn-primary {
          margin-top: 6px;
          padding: 12px 16px;
          font-size: 14px;
          font-weight: 600;
          color: #ffffff;
          background: linear-gradient(
            180deg,
            var(--color-accent),
            var(--color-accent-hover)
          );
          border: none;
          border-radius: var(--radius-field);
          cursor: pointer;
          transition: all 0.2s ease;
          box-shadow: 0 6px 16px -6px rgba(99, 102, 241, 0.5);
        }

        .btn-primary:hover {
          transform: translateY(-1px);
          box-shadow: 0 10px 24px -8px rgba(99, 102, 241, 0.7);
        }

        .btn-primary:active {
          transform: translateY(1px);
        }

        .btn-primary:disabled {
          opacity: 0.65;
          cursor: not-allowed;
          box-shadow: none;
        }

        .login-footer {
          margin-top: 22px;
          text-align: center;
          font-size: 13px;
          color: var(--color-text-muted);
        }

        .login-footer a {
          color: var(--color-accent);
          font-weight: 600;
          text-decoration: none;
        }

        .login-footer a:hover {
          text-decoration: underline;
        }

        @media (max-width: 420px) {
          .login-card {
            padding: 32px 24px 28px;
          }
        }
      `}</style>

      <div className="login-card">
        <div className="login-header">
          <h2>Welcome Back</h2>
          <p className="login-subtitle">
            Sign in to continue to your account
          </p>
        </div>

        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={(e) =>
                setForm({
                  ...form,
                  email: e.target.value
                })
              }
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              value={form.password}
              onChange={(e) =>
                setForm({
                  ...form,
                  password: e.target.value
                })
              }
              required
            />
          </div>

          {error && <p className="login-error">{error}</p>}

          <button
            className="btn-primary"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Signing In..." : "Login"}
          </button>
        </form>

        <div className="login-footer">
          Don't have an account?{" "}
          <Link to="/signup">Create Account</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;