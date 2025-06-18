const person = {
  firstName: "Anesu",
  lastName: "Chimbi",
  get name() {
    return "...";
  },
  role: "Design Engineer",
  avatar: "/images/avatar.jpg",
  location: "Europe/Enschede", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Bahasa"], // optional: Leave the array empty if you don't want to display languages
};
