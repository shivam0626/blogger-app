const router  = require("express").Router();
const { userRegister, userLogin } = require("../utils/Auth");


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

router.get("/profile", async(req,res) => {});

// Readers Protected Route
router.post("/reader-protected",async(req,res) => {});

// Writers Protected Route
router.post("/writer-protected",async(req,res) => {});

// Admin Protected Route
router.post("/admin-protected",async(req,res) => {});

module.exports = router;