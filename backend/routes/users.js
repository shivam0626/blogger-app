const router  = require("express").Router();
const { 
    userRegister,
    userLogin,
    userAuth,
    serializeUser,
    checkRole
    } = require("../utils/Auth");


// Readers Registration Route
router.post("/register-reader",async(req,res) => {
    await userRegister(req.body, 'reader', res);
});

// Writers Registration Route
router.post("/register-writer",async(req,res) => {
    await userRegister(req.body, 'writer', res);
});

// Admin Registration Route
router.post("/register-admin",async(req,res) => {
    await userRegister(req.body, 'admin', res);
});

// Readers Login Route
router.post("/login-reader",async(req,res) => {
    await userLogin(req.body, "reader", res);
});

// Writers Login Route
router.post("/login-writer",async(req,res) => {
    await userLogin(req.body, "writer", res);
});

// Admin Login Route
router.post("/login-admin",async(req,res) => {
    await userLogin(req.body, "admin", res);
});

//Profile Route

router.get("/profile",userAuth, async(req,res) => {
   return res.send(serializeUser(req.user));
});

// Readers Protected Route
router.get(
    "/reader-protected",
    userAuth,
    checkRole(['reader']),
    async(req,res) => {
        return res.send("Hello Readers");
    }
    );

// Writers Protected Route
router.get(
    "/writer-protected",
    userAuth,
    checkRole(['writer']),
    async(req,res) => {
        return res.send("Hello Writers");
    }
    );

// Admin Protected Route
router.get(
    "/admin-protected",
    userAuth,
    checkRole(['admin']),
    async(req,res) => {
        return res.send("Hello Admin");
    }
    );

// Admin and writer both can access
router.get(
    "/admin-writer-protected",
    userAuth,
    checkRole(['admin','writer']),
    async(req,res) => {
        return res.send("Hello Writers and Admin");
    }
    );


module.exports = router;