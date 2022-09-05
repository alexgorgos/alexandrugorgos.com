const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const homepageTemplate = path.resolve(`src/templates/homepage.js`);

  await createPage({
    path: `/`,
    component: homepageTemplate,
  });
};
