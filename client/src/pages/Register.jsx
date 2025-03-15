import HeaderMarketing from "../components/layout/HeaderMarketing";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { useState } from "react";
import Main from "../components/layout/Main";

export default function Register() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <>
      <HeaderMarketing />
      <Main>
        <div className="flex flex-col items-center mt-10">
          <h1 className="text-3xl font-bold mb-5">Register</h1>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-md">
            <div>
              <label htmlFor="username" className="block text-sm font-medium">
                Username
              </label>
              <Input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium">
                Email
              </label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium">
                Password
              </label>
              <Input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <Button type="submit">Register</Button>
          </form>
        </div>
      </Main>
    </>
  );
}
