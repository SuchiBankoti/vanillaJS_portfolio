const data = [
  {
    id: 1,
    name: "Ecommerce-Website",
    imageSrc: "ecommerce.png",
    git: "https://github.com/SuchiBankoti/3hrreactproject",
    io: "https://suchibankoti.github.io/3hrreactproject/",
  },
  {
    id: 2,
    name: "Expense-Tracker",
    imageSrc: "expense1.png",
    git: "https://github.com/SuchiBankoti/new-expense-tracker",
    io: "https://suchibankoti.github.io/new-expense-tracker/",
  },
  {
    id: 3,
    name: "Restaurant-Webpage",
    imageSrc: "rest1.png",
    git: "https://github.com/SuchiBankoti/restaurant-websit",
    io: "https://suchibankoti.github.io/restaurant-websit/",
  },
  {
    id: 4,
    name: "Todo-List",
    imageSrc: "tenzies1.png",
    git: "https://github.com/SuchiBankoti/todo-list",
    io: "https://todo-list-delta-neon-28.vercel.app/",
  },
  {
    id: 5,
    name: "Quizzical",
    imageSrc: "quiz1.png",
    git: "https://github.com/SuchiBankoti/react-quiz",
    io: "https://suchibankoti.github.io/react-quiz/",
  },
  
  {
    id: 6,
    name: "Mail-Box",
    imageSrc: "mail1.png",
    git: "https://github.com/SuchiBankoti/flask_mailbox",
  },
  {
    id: 7,
    name: "Todo-nextjs",
    imageSrc: "tenzies1.png",
    git:"https://github.com/SuchiBankoti/todo_nextjs"
  }

];
const skills = [
  {
    name: "ReactJs",
    iconClass: "fab fa-react",
  },
  { name: "JavaScript", iconClass: "fa-brands fa-js" },
  { name: "Html", iconClass: "fa fa-html5" },
  { name: "CSS", iconClass: "fa fa-css3" },
  { name: "Git", iconClass: "fa-brands fa-github" },
  { name: "NodeJs", iconClass: "fab fa-node-js" },
];

const projects_container = document.getElementById("projects");
const body = document.querySelector("body");
const skills_set = document.querySelector(".skill-set");
const scrollerContainer = document.getElementById("scrollerContainer");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");

const scrollAmount = 160;
prevButton.addEventListener("click", scrollLeft);
nextButton.addEventListener("click", scrollRight);

function scrollLeft() {
  scrollerContainer.scrollBy({
    left: -scrollAmount,
    behavior: "smooth", // Use 'auto' for instant scrolling
  });
}

function scrollRight() {
  scrollerContainer.scrollBy({
    left: scrollAmount,
    behavior: "smooth", // Use 'auto' for instant scrolling
  });
}

data.forEach((p) => showProject(p));
function showProject(obj) {
  const { name, imageSrc, git, io, id } = obj;
  const project = document.createElement("div");
  project.classList.add("project-item");
  const projectContent = document.createElement("div")
  projectContent.classList.add("project-content")
  const image_div = document.createElement("div");
  image_div.classList.add("project-image");
  const name_div = document.createElement("div");
  name_div.classList.add("project-name");
  const links_div = document.createElement("div");
  links_div.classList.add("project-links");
  const image = document.createElement("img");
  const a1 = document.createElement("a");
  a1.className = "fa fa-github";

  const a2 = document.createElement("a");
  a2.className = "fa fa-external-link";

  image.src = `images/${imageSrc}`;
  image.alt = "project";
  name_div.textContent = name;
  a1.href = git;
  a2.href = io;
  if (!io) {
    a2.style.visibility="hidden"
  }
  image_div.appendChild(image);
  links_div.appendChild(a1);
  links_div.appendChild(a2);
  projectContent.appendChild(image_div);
  projectContent.appendChild(links_div);
  projectContent.appendChild(name_div);
  project.appendChild(projectContent)
  scrollerContainer.appendChild(project);
}

function getColor() {
  var hue = Math.floor(Math.random() * 360);
  var pastel = "hsl(" + hue + ", 100%, 80%)";
  return pastel;
}
function addSkill() {
  skills.forEach((s) => {
    const ski = document.createElement("div");
    const p = document.createElement("p");
    const icon = document.createElement("i");
    p.textContent = `${s.name}`;
    ski.className = "skill";
    icon.className = `${s.iconClass}`;
    icon.style.background = getColor();
    ski.appendChild(p);
    ski.appendChild(icon);
    skills_set.appendChild(ski);
  });
}
addSkill();
