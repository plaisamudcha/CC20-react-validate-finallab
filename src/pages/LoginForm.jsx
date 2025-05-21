import { useState } from "react";
import { loginSchema } from "../schemas/loginSchema";
import { useNavigate } from "react-router";
import { yupToFormError } from "../utils/yuptoFormError";

export default function LoginForm() {
  const navigate = useNavigate();
  const texterror = {
    style: "text-red-500 font-medium",
  };
  const [form, setForm] = useState({
    herocode: "",
    email: "",
    password: "",
    confirmpassword: "",
    age: "",
    heroClass: "",
    terms: false,
  });
  const hdlChange = (e) => {
    if (e.target.type === "checkbox") {
      setForm({ ...form, [e.target.name]: e.target.checked });
    } else {
      setForm({ ...form, [e.target.name]: e.target.value });
    }
  };
  const [error, setError] = useState({});
  const hdlSubmit = async (e) => {
    e.preventDefault();
    try {
      await loginSchema.validate(form, { abortEarly: false });
      setError({});
      navigate(`hero/${form.heroClass}`, { state: { age: form.age } });
    } catch (err) {
      const errObj = yupToFormError(err);
      setError(errObj);
    }
  };

  return (
    <form
      onSubmit={hdlSubmit}
      className="fieldset bg-base-200 border-base-300 rounded-box w-sm border p-4"
    >
      <legend className="fieldset-legend">Register to my guild</legend>

      <label className="label">Hero Code</label>
      <input
        type="text"
        className="input"
        placeholder="your code..."
        name="herocode"
        value={form.herocode}
        onChange={hdlChange}
      />
      <p className={texterror.style}>{error.herocode}</p>

      <label className="label">Email</label>
      <input
        type="email"
        className="input"
        placeholder="your email..."
        name="email"
        value={form.email}
        onChange={hdlChange}
      />
      <p className={texterror.style}>{error.email}</p>

      <label className="label">Password</label>
      <input
        type="password"
        className="input"
        placeholder="your password..."
        name="password"
        value={form.password}
        onChange={hdlChange}
      />
      <p className={texterror.style}>{error.password}</p>

      <label className="label">Confirm Password</label>
      <input
        type="password"
        className="input"
        placeholder="confirm your password..."
        name="confirmpassword"
        value={form.confirmpassword}
        onChange={hdlChange}
      />
      <p className={texterror.style}>{error.confirmpassword}</p>

      <label className="label">Age</label>
      <input
        type="number"
        className="input"
        placeholder="your age..."
        name="age"
        value={form.age}
        onChange={hdlChange}
      />
      <p className={texterror.style}>{error.age}</p>

      <label className="label">Hero Class</label>
      <label className="select">
        <span className="label">Class</span>
        <select name="heroClass" value={form.heroClass} onChange={hdlChange}>
          <option value="" disabled>
            Select your class...
          </option>
          <option>Warrior</option>
          <option>Mage</option>
          <option>Thief</option>
        </select>
      </label>
      <p className={texterror.style}>{error.heroclass}</p>

      <fieldset className="fieldset bg-base-100 border-base-300 rounded-box w-64 border p-4">
        <legend className="fieldset-legend">Terms</legend>
        <label className="label">
          <input
            type="checkbox"
            className="toggle"
            name="terms"
            checked={form.terms}
            onChange={hdlChange}
          />
          <span className="ml-2">Swear Allegiance to the Guild Codecamp20</span>
        </label>
        <p className={texterror.style}>{error.terms}</p>
      </fieldset>

      <button type="submit" className="btn btn-neutral mt-4">
        Hero Register
      </button>
    </form>
  );
}
