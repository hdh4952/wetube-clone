const trending = (req, res) => res.send("Home Page Videos");
const search = (req, res) => res.send("Search Video");
const see = (req, res) => {
  return res.send(`Watch Video ${req.params.id}`);
};
const edit = (req, res) => res.send("Edit Video");
const remove = (req, res) => res.send("Remove Video");
const upload = (req, res) => res.send("Upload Video");

export { trending, see, edit, search, remove, upload };
