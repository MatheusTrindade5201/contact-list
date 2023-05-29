const getCurrentUser = (req: any, res: { send: (arg0: string) => void }) => {
  res.send("Current User");
};

const createUser = (req: any, res: { send: (arg0: string) => void }) => {
  res.send("Create User");
};

export { getCurrentUser, createUser };
