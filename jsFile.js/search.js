const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("input", function () {
  const query = searchInput.value.toLowerCase().trim();

  const filtered = allUsers.filter((user) => {
    const fullName = (user.name.first + " " + user.name.last).toLowerCase();
    return fullName.includes(query);
  });

  renderUsers(filtered); // თავიდან ვაგენერირებ ბარათებს
});
