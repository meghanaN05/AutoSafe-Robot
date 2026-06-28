import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../services/api";

function Signup() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
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
      await API.post("/auth/signup", form);

      alert("Signup Successful");
      navigate("/");
    } catch {
      setError("Signup Failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="signup-container">
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

          --shadow-card:
            0 20px 45px -20px rgba(0, 0, 0, 0.8),
            0 4px 12px -4px rgba(0, 0, 0, 0.5);

          --radius-card: 16px;
          --radius-field: 10px;
        }

        .signup-container {
          min-height: 100vh;
          width: 100%;
          display: flex;
          flex-direction: column;
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
        }

        .signup-card {
          position: relative;
          width: 100%;
          max-width: 420px;
          background: var(--color-surface);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-card);
          padding: 40px 36px;
          box-shadow: var(--shadow-card);
          overflow: hidden;
        }

        .signup-card::before {
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
          from {
            background-position: 0% 0%;
          }
          to {
            background-position: 200% 0%;
          }
        }

        h2 {
          margin: 0 0 6px;
          font-family: 'Sora', sans-serif;
          font-size: 28px;
          color: var(--color-text);
        }

        .subtitle {
          color: var(--color-text-muted);
          font-size: 14px;
          margin-bottom: 24px;
        }

        form {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        input {
          width: 100%;
          padding: 12px 14px;
          background: #262626;
          color: white;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-field);
          font-size: 14px;
          outline: none;
          transition: all 0.2s ease;
        }

        input::placeholder {
          color: #888;
        }

        input:focus {
          background: #2d2d2d;
          border-color: var(--color-accent);
          box-shadow: 0 0 0 3px var(--color-accent-light);
        }

        button {
          margin-top: 8px;
          padding: 12px;
          border: none;
          border-radius: var(--radius-field);
          background: linear-gradient(
            180deg,
            var(--color-accent),
            var(--color-accent-hover)
          );
          color: white;
          font-weight: 600;
          font-size: 14px;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        button:hover {
          transform: translateY(-1px);
          box-shadow: 0 10px 24px -8px rgba(99,102,241,.7);
        }

        button:disabled {
          opacity: .6;
          cursor: not-allowed;
        }

        .error {
          color: var(--color-danger);
          font-size: 13px;
          margin-top: -4px;
        }

        .link {
          margin-top: 20px;
          text-align: center;
          color: var(--color-text-muted);
          font-size: 14px;
        }

        .link a {
          color: var(--color-accent);
          text-decoration: none;
          font-weight: 600;
        }

        .link a:hover {
          text-decoration: underline;
        }

        @media (max-width: 480px) {
          .signup-card {
            padding: 30px 24px;
          }
        }
      `}</style>

      <div className="signup-card">
        <h2>Create Account</h2>
        <p className="subtitle">
          Sign up to access your dashboard
        </p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Full Name"
            value={form.name}
            onChange={(e) =>
              setForm({
                ...form,
                name: e.target.value
              })
            }
            required
          />

          <input
            type="email"
            placeholder="Email Address"
            value={form.email}
            onChange={(e) =>
              setForm({
                ...form,
                email: e.target.value
              })
            }
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={(e) =>
              setForm({
                ...form,
                password: e.target.value
              })
            }
            required
          />

          {error && (
            <div className="error">{error}</div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting
              ? "Creating Account..."
              : "Sign Up"}
          </button>
        </form>

        <div className="link">
          Already have an account?{" "}
          <Link to="/">Login</Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;