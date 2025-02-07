// Skills icons - https://icon-sets.iconify.design/
import { Icon } from "@iconify/react";

// Navbar Logo image (add your image to the src/images directory and uncomment the line below to import your image)
// import newLogo from "./images/yourFileName"

// Hero Images (add your images to the /images directory with the same names)
import HeroDark from "./images/hero-dark.jpg";
import HeroLight from "./images/hero-light.jpg";

// Projects Images (add your images to the images directory and import below)
import Logo from "./images/logo.svg";

/* START HERE
 **************************************************************
  Add your GitHub username (string - "YourUsername") below.
*/
export const githubUsername = "a-almaleeh";

// Navbar Logo image
export const navLogo = null;

/* Main
 ************************************************************** 
  Add a custom blog icon or update the hero images for the Main section.
*/
export const Blog = null;

// Hero images (imported above - lines 8-9)
export { HeroDark as Dark, HeroLight as Light };

/* About Me
 **************************************************************
  Add a second paragraph for the about me section.
*/
export const moreInfo =
  "Passionate software engineer skilled in Python, Django, APIs, and automation. Thrives on challenges, learns quickly, and solves problems creatively.";

/* Skills
 ************************************************************** 
  Add or remove skills in the SAME format below, choose icons here - https://icon-sets.iconify.design/
*/
export const skillData = [
  {
    id: 1,
    skill: <Icon icon="akar-icons:python-fill" className="display-4" />,
    name: "Python",
  },
  {
    id: 2,
    skill: <Icon icon="akar-icons:django-fill" className="display-4" />,
    name: "Django",
  },
  {
    id: 3,
    skill: <Icon icon="simple-icons:flask" className="display-4" />,
    name: "Flask",
  },
  {
    id: 4,
    skill: <Icon icon="mdi:docker" className="display-4" />,
    name: "Docker",
  },
  {
    id: 5,
    skill: <Icon icon="tabler:api" className="display-4" />,
    name: "RESTful APIs",
  },
  {
    id: 6,
    skill: <Icon icon="akar-icons:postgresql-fill" className="display-4" />,
    name: "PostgreSQL",
  },
  {
    id: 7,
    skill: <Icon icon="bi:git" className="display-4" />,
    name: "Git",
  },
  {
    id: 8,
    skill: <Icon icon="fa6-brands:square-github" className="display-4" />,
    name: "GitHub",
  },
  {
    id: 9,
    skill: <Icon icon="mdi:linux" className="display-4" />,
    name: "Linux",
  },
  {
    id: 10,
    skill: <Icon icon="cib:nginx" className="display-4" />,
    name: "Nginx",
  },
  {
    id: 11,
    skill: <Icon icon="devicon-plain:azure" className="display-4" />,
    name: "Azure",
  },

  {
    id: 12,
    skill: <Icon icon="iconoir:agile" className="display-4" />,
    name: "Agile & Scrum Methodologies",
  },
];

// Resume link (string - "https://YourResumeUrl") - I am using CloudFront to share my resume (https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html)
export const resume = null;

/* Projects
 ************************************************************** 
  List the repo names (string - "your-repo-name") you want to include (they will be sorted alphabetically). If empty, only the first 3 will be included.
*/
export const filteredProjects = ["example-1", "example-2", "example-3"];

// Replace the defualt GitHub image for matching repos below (images imported above - lines 7-8)
export const projectCardImages = [
  {
    name: "example-1",
    image: Logo,
  },
];

/* Contact Info
 ************************************************************** 
  Add your formspree endpoint below.
  https://formspree.io/
*/
export const formspreeUrl = "https://formspree.io/f/YourEndpoint";

// Footer icons theme (light or dark)
export const footerTheme = "dark";
