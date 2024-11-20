import express from "express";
import bcrypt from "bcrypt";
import { createUser, findUser } from "../models/user/userModel.js";
import { loginValidator,signupValidator } from "../middlewares/joiValidation.js";

const router = express.Router();
//**Sign UP  */
router.post("/signup", signupValidator, async (req,res) => {
try {
  console.log(req.body)
    const {fName,lName,email,password,phone} = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashedpassword = await bcrypt.hash(password, salt);
    const userData = await createUser({
        fName,
        lName,
        phone,
        email,
        password: hashedpassword,
      });
      const respObj = {
        status: "success",
        message: "User created successfully!",
      };
      res.status(200).send(respObj);
} catch (error) {
    let errObj = {
      status: "error",
      message: "Error Creating",
      error: {
        code: 500,
        details: error.message || "Error creating user",
      },
    };

    res.status(500).send(errObj);
  }

    
})


//**Login  */

router.post("/login", loginValidator, async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await findUser({ email }, true);
    if (!user) {
      return res.status(401).send({
        status: "error",
        message: "Unauthenticated",
        error: {
          code: 401,
          details: "Invalid email or password",
        },
      });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    console.log(isMatch)
    if (isMatch) {
      const respObj = {
        status: "success",
        message: "Login Successful",
        data: {user:user.fName},
      };
      console.log(respObj)
      res.status(200).send(respObj);
    } else {
      return res.status(401).send({
        status: "error",
        message: "Unauthenticated",
        error: {
          code: 401,
          details: "Invalid email or password",
        },
      });
    }
  } catch (error) {
    let errObj = {
      status: "error",
      message: "Error Login",
      error: {
        code: 500,
        details: error.message || "Error Login user",
      },
    };

    res.status(500).send(errObj);
  }
});
export default router;