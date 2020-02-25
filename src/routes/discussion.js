import express from "express";
import React from "react";
import {renderToString} from "react-dom/server"
import Discussion from "../components/pages/discussion/discussion"


const router = express.Router();

router.get('/', async (req, res) => {
    const reactComp = renderToString(<Discussion/>);
    res.status(200).render('pages/discussion', {reactApp: reactComp});
})
;

export default router;