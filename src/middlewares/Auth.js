export const authMiddleware = (req, res, next) => {
  try {
    const { token } = req.headers;
    // verify token code

    // verfication successful
    //next();

    // verfication unsucessful
    // const error = {
    //     status:"error",
    //     message:"unauthorized token",

    // };
    // res.json(error);
  } catch (error) {
    return res.json(error);
  }
};

export const isAdmin = (req, res, next) => {
//   if (req.userdata.role == admin) {
//     next();
//   } else {
//     const error = { status: "error", message: "unauthorized action" };
//   }
//   return res.json(error);
};
