import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import PostForum from "../components/pages/post-forum/post-forum";

const router = express.Router();

router.get("/", async (req, res) => {
  const reactComp = renderToString(<PostForum />);
  res.status(200).render("pages/post-forum", {
    reactApp: reactComp,
    url: req.app.locals.url,
  });
});

module.exports = router;
