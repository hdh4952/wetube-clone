const trending = (req, res) => {
  const videos = [
    {
      title: "Video #1",
      rating: 5,
      comments: 2,
      createdAt: "2 minutes ago",
      views: 59,
      id: 1,
    },
    {
      title: "Video #2",
      rating: 5,
      comments: 2,
      createdAt: "2 minutes ago",
      views: 59,
      id: 2,
    },
    {
      title: "Video #3",
      rating: 5,
      comments: 2,
      createdAt: "2 minutes ago",
      views: 59,
      id: 3,
    },
  ];
  return res.render("home", { pageTitle: "Home", videos });
};
const see = (req, res) => res.render("watch", { pageTitle: "Watch" });
const edit = (req, res) => res.render("edit", { pageTitle: "Edit" });
const search = (req, res) => res.send("Search Video");
const upload = (req, res) => res.send("Upload Video");
const remove = (req, res) => res.send("Remove Video");

export { trending, see, edit, search, remove, upload };
