const express = require("express");
const Residants = require("../models/residants.model");

const router = express.Router();


router.post("/", async (req, res) => {
    try {
        const residant = await Residants.create(req.body);
        return res.status(200).send(residant)
    } catch (er) {
        return res.status(500).send(er.message)
    }
})

router.get("/", async (req, res) => {
    try {
        const residants = await Residants.find().populate({ path: "flat_id" }).lean().exec();
        return res.status(201).send(residants)
    } catch (er) {
        return res.status(500).send(er.message)
    }
})


router.get("/:id", async (req, res) => {
    try {
        const residants = await Residants.find({ flat_id: req.params.id }).populate({ path: "flat_id" }).lean().exec();
        return res.status(201).send(residants)
    } catch (er) {
        return res.status(500).send(er.message)
    }
})


router.delete("/:id", async (req, res) => {
    try {
        const residant = await Residants.findByIdAndDelete(req.params.id);
        return res.send(residant)
    } catch (er) {
        return res.status(500).send(er.message)
    }
})

module.exports = router;