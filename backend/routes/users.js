const router  = require("express").Router();
const { userRegister }= require("../utils/Auth");


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
router.post("/reader-login",async(req,res) => {});

// Writers Login Route
router.post("/writer-login",async(req,res) => {});

// Admin Login Route
router.post("/admin-login",async(req,res) => {});

//Profile Route

router.get("/profile", async(req,res) => {});

// Readers Protected Route
router.post("/reader-protected",async(req,res) => {});

// Writers Protected Route
router.post("/writer-protected",async(req,res) => {});

// Admin Protected Route
router.post("/admin-protected",async(req,res) => {});

module.exports = router;