export const signup = (req, res) => {
  const { fullName, email, password } = req.body;
  try {
    // hash passwords using bcryptjs for better security
  } catch (error) {}
};

export const login = (req, res) => {
  res.send("login route");
};

export const logout = (req, res) => {
  res.send("logout route");
};
