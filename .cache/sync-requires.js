const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-index-jsx": hot(preferDefault(require("/home/sefere/Belgeler/projects/seferergun.github.io/src/pages/index.jsx")))
}

