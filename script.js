/*
 * EDIT PROJECTS HERE: Copy one project object per portfolio item.
 * Project photos live in assets/projects/. Update dates, tools, and your exact role before publishing.
 * Leave image or link fields blank when they are unavailable.
 */
const projects = [
  {
    id: "urban-threads-promo",
    title: "Urban Threads — Back-to-School Promo Graphics",
    category: "Digital Marketing",
    type: "Promotional graphics",
    description:
      "A back-to-school apparel promo set labeled Urban Threads, with new-term messaging, bold display type, bright accents, and shop calls to action.",
    year: "2026",
    technologies: [],
    image: "assets/projects/urban-threads-new-term-energy.png",
    imageAlt:
      "Urban Threads apparel promotion reading New Term, New Energy, with bold white lettering and bright yellow and orange accents",
    imageLabel: "UT",
    imageFit: "cover",
    gallery: [
      {
        src: "assets/projects/urban-threads-new-term-energy.png",
        alt: "Urban Threads promotion reading New Term, New Energy with bold white lettering and bright yellow and orange accents",
        caption: "New Term, New Energy — campaign graphic",
      },
      {
        src: "assets/projects/urban-threads-back-to-your-block.png",
        alt: "Square Urban Threads Back to Your Block promotional graphic",
        caption: "Back to Your Block — square promotion",
      },
      {
        src: "assets/projects/urban-threads-fresh-fits-new-term.png",
        alt: "Urban Threads Fresh Fits, New Term back-to-school promotion tile",
        caption: "Fresh Fits, New Term — promo tile",
      },
      {
        src: "assets/projects/urban-threads-new-school-year-banner.png",
        alt: "Urban Threads The New School Year Drop Is Here banner",
        caption: "The New School Year Drop — banner",
      },
    ],
    role: "Student coursework",
    status: "Graphics set",
    detailUrl: "",
    projectUrl: "",
    githubUrl: "",
    demoUrl: "",
    features: [
      "Apparel promotion",
      "Campaign graphics",
      "Shop calls to action",
    ],
  },
  {
    id: "forward-type-poster",
    title: "FORWARD — Performance Footwear Poster",
    category: "Graphic Design",
    type: "Typography poster",
    description:
      "A poster concept for FORWARD performance footwear, using oversized PUSH YOUR PACE lettering with orange and lime accents.",
    year: "2026",
    technologies: [],
    image: "assets/projects/forward-performance-footwear-poster.webp",
    imageAlt:
      "Tall FORWARD performance-footwear poster with large lime and gray PUSH YOUR PACE lettering on a deep blue background",
    imageLabel: "FW",
    imageFit: "contain",
    role: "Student coursework",
    status: "Poster concept",
    detailUrl: "",
    projectUrl: "",
    githubUrl: "",
    demoUrl: "",
    features: ["Display typography", "Poster layout", "Color contrast"],
  },
  {
    id: "sunset-shore-ui",
    title: "Sunset Shore Resort — Mobile UI Concept",
    category: "UI/UX Design",
    type: "Mobile interface concept",
    description:
      "A mobile resort interface concept with a beach landing screen and offers for huts and cottages. The supplied screenshots show design work in Figma; clickable interactions are not confirmed.",
    year: "2026",
    technologies: ["Figma"],
    image: "assets/projects/sunset-shore-resort-ui.jpg",
    imageAlt:
      "Mobile resort offers screen with a beach sunset background and hut listing",
    imageLabel: "SS",
    imageFit: "contain",
    role: "Student coursework",
    status: "Screen design",
    detailUrl: "",
    projectUrl: "https://www.figma.com/design/ZoJVRfgcCq2mTutmpBjnTa/Untitled?node-id=0-1&t=3IpuXcpX9GUJGVpo-1",
    githubUrl: "",
    demoUrl: "",
    features: [
      "Mobile screens",
      "Resort landing page",
      "Hut and cottage offers",
    ],
  },
  {
    id: "accommodation-maze-test",
    title: "Accommodation Prototype — Maze Test Setup",
    category: "Usability Testing",
    type: "Prototype test setup",
    description:
      "Maze task setup for visiting hut and cottage interior screens with an exact-path success criterion. The screenshots show configuration only, not participant results.",
    year: "2026",
    technologies: ["Maze"],
    image: "assets/projects/maze-prototype-test-setup.jpg",
    imageAlt:
      "Maze builder showing an exact-path prototype test task and a mobile preview of accommodation screens",
    imageLabel: "UX",
    imageFit: "cover",
    role: "Student coursework",
    status: "Test setup only",
    detailUrl: "",
    projectUrl: "",
    githubUrl: "",
    demoUrl: "https://app.maze.co/maze-preview/mazes/508170547",
    features: ["Goal-based task", "Exact-path criterion", "Mobile preview"],
  },
    {
    id: "navida-brand-design",
    title: "Navida Brand Design",
    category: "Graphic Design",
    type: "Logo identity design",
    description:
      "Logo design work for the Navida brand, presented in horizontal, vertical, icon, badge, and sketch versions.",
    year: "", // Add the actual project year
    technologies: [], // Add the tools you actually used, if you want to list them
    image: "assets/projects/vectorink-download.png",
    imageAlt: "Horizontal version of the Navida brand logo",
    imageLabel: "ND",
    imageFit: "contain",
    gallery: [
      {
        src: "assets/projects/vectorink-download (1).png",
        alt: "Horizontal version of the Navida brand logo",
        caption: "Horizontal logo",
        fit: "contain",
      },
      {
        src: "assets/projects/navida-brand-vertical.png",
        alt: "Vertical version of the Navida brand logo",
        caption: "Vertical logo",
        fit: "contain",
      },
      {
        src: "assets/projects/vectorink-download (2).png",
        alt: "Icon version of the Navida brand logo",
        caption: "Logo icon",
        fit: "contain",
      },
      {
        src: "assets/projects/vectorink-download.png",
        alt: "Badge version of the Navida brand logo",
        caption: "Logo badge",
        fit: "contain",
      },
      
    ],
    role: "Logo designer",
    status: "Logo design variations",
    detailUrl: "",
    projectUrl: "https://drive.google.com/drive/folders/1FDCpjercuH3V2XRoiTEmpi7LFjzIf0zQ",
    githubUrl: "",
    demoUrl: "",
    features: [
      "Horizontal logo",
      "Vertical logo",
      "Icon",
      "Badge",
    ],
  },
];

const projectGrid = document.querySelector("#project-grid");
const searchInput = document.querySelector("#project-search");
const categoryFilter = document.querySelector("#category-filter");
const yearFilter = document.querySelector("#year-filter");
const projectCount = document.querySelector("#project-count");
const emptyProjects = document.querySelector("#empty-projects");
const previousProjectButton = document.querySelector("#project-prev");
const nextProjectButton = document.querySelector("#project-next");
const projectDialog = document.querySelector("#project-dialog");
const projectDialogCloseButton = document.querySelector(
  "#project-dialog-close",
);
const projectDialogKicker = document.querySelector("#project-dialog-kicker");
const projectDialogTitle = document.querySelector("#project-dialog-title");
const projectDialogDescription = document.querySelector(
  "#project-dialog-description",
);
const projectDialogMedia = document.querySelector("#project-dialog-media");
const projectDialogTags = document.querySelector("#project-dialog-tags");
const projectDialogMeta = document.querySelector("#project-dialog-meta");
const projectDialogLinks = document.querySelector("#project-dialog-links");
const projectDialogGalleryControls = document.querySelector(
  "#project-dialog-gallery-controls",
);
const projectDialogPreviousImageButton = document.querySelector(
  "#project-dialog-previous-image",
);
const projectDialogNextImageButton = document.querySelector(
  "#project-dialog-next-image",
);
const projectDialogImageCount = document.querySelector(
  "#project-dialog-image-count",
);
const projectDialogThumbnails = document.querySelector(
  "#project-dialog-thumbnails",
);
let activeProjectGallery = [];
let activeProjectImageIndex = 0;

function updateProjectCarouselControls() {
  if (!projectGrid) return;

  const maxScroll = Math.max(
    0,
    projectGrid.scrollWidth - projectGrid.clientWidth,
  );
  if (previousProjectButton) {
    previousProjectButton.disabled = projectGrid.scrollLeft <= 1;
  }
  if (nextProjectButton) {
    nextProjectButton.disabled =
      maxScroll <= 1 || projectGrid.scrollLeft >= maxScroll - 1;
  }
}

function moveProjectCarousel(direction) {
  const firstCard = projectGrid?.querySelector(".project-card");
  if (!firstCard) return;

  const gap = Number.parseFloat(getComputedStyle(projectGrid).gap) || 0;
  const distance = firstCard.getBoundingClientRect().width + gap;
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  projectGrid.scrollBy({
    left: direction * distance,
    behavior: prefersReducedMotion ? "auto" : "smooth",
  });
}

function populateProjectFilters() {
  if (categoryFilter) {
    const categories = [
      ...new Set(projects.map((project) => project.category).filter(Boolean)),
    ].sort();
    categoryFilter.innerHTML =
      '<option value="all">All categories</option>' +
      categories
        .map((category) => `<option value="${category}">${category}</option>`)
        .join("");
  }

  if (yearFilter) {
    const years = [
      ...new Set(projects.map((project) => project.year).filter(Boolean)),
    ].sort((a, b) => b.localeCompare(a));
    yearFilter.innerHTML =
      '<option value="all">All years</option>' +
      years.map((year) => `<option value="${year}">${year}</option>`).join("");
  }
}

function renderProjectImage(project) {
  let imageMarkup;

  if (project.image?.trim()) {
    const altText = project.imageAlt || `Screenshot of ${project.title}`;
    const fitClass = project.imageFit === "contain" ? " image-fit-contain" : "";

    imageMarkup = `
      <div class="project-preview project-preview-image${fitClass}">
        <img src="${project.image}" alt="${altText}" loading="eager" decoding="sync">
      </div>
    `;
  } else {
    imageMarkup = `
      <div class="project-preview" role="img" aria-label="Image placeholder for ${project.title}">
        <strong>${project.imageLabel || "IMG"}</strong>
        <span>Add image path in script.js</span>
      </div>
    `;
  }

  return `
    <button
      class="project-photo-button project-view-button"
      type="button"
      data-project-id="${project.id}"
      aria-label="View project details: ${project.title}"
      aria-haspopup="dialog"
    >
      ${imageMarkup}
    </button>
  `;
}


function renderProjectLinks(project) {
  const links = [];

  if (project.detailUrl) {
    const label = project.detailUrl.startsWith("#")
      ? "Ask about project"
      : "Project details";
    links.push(
      `<a class="card-link" href="${project.detailUrl}">${label} ↗</a>`,
    );
  }
  if (project.projectUrl) {
    links.push(
      `<a class="card-link" href="${project.projectUrl}" target="_blank" rel="noopener noreferrer">Live project ↗</a>`,
    );
  }
  if (project.githubUrl) {
    links.push(
      `<a class="card-link" href="${project.githubUrl}" target="_blank" rel="noopener noreferrer">Source code ↗</a>`,
    );
  }
  if (project.demoUrl) {
    links.push(
      `<a class="card-link" href="${project.demoUrl}" target="_blank" rel="noopener noreferrer">Demo ↗</a>`,
    );
  }

  return links;
}

function renderProjectActions(project) {
  const actions = [
    `<button class="card-link project-view-button" type="button" data-project-id="${project.id}" aria-haspopup="dialog">View project <span aria-hidden="true">↗</span></button>`,
    ...renderProjectLinks(project),
  ];

  return `<div class="project-card-actions">${actions.join("")}</div>`;
}

function renderProjectDialogGallery() {
  const currentImage = activeProjectGallery[activeProjectImageIndex];
  const hasMultipleImages = activeProjectGallery.length > 1;

  projectDialogMedia.replaceChildren();
  projectDialogThumbnails.replaceChildren();
  projectDialogGalleryControls.hidden = !hasMultipleImages;
  projectDialogThumbnails.hidden = !hasMultipleImages;
  projectDialogImageCount.hidden = !hasMultipleImages;

  if (currentImage) {
    projectDialogMedia.classList.toggle(
      "image-fit-contain",
      currentImage.fit === "contain",
    );
    const image = document.createElement("img");
    image.src = currentImage.src;
    image.alt = currentImage.alt || "Project image";
    image.loading = "eager";
    image.decoding = "sync";
    projectDialogMedia.append(image);
  } else {
    const placeholder = document.createElement("p");
    placeholder.className = "project-dialog-placeholder";
    placeholder.textContent =
      "Add an image path in script.js to show a project visual.";
    projectDialogMedia.append(placeholder);
  }

  if (!hasMultipleImages) return;

  projectDialogImageCount.textContent = `${activeProjectImageIndex + 1} of ${activeProjectGallery.length} — ${currentImage.caption || "Project image"}`;
  projectDialogPreviousImageButton.disabled = activeProjectImageIndex === 0;
  projectDialogNextImageButton.disabled =
    activeProjectImageIndex === activeProjectGallery.length - 1;

  activeProjectGallery.forEach((item, index) => {
    const button = document.createElement("button");
    button.className = "project-dialog-thumbnail";
    button.type = "button";
    button.dataset.galleryIndex = String(index);
    button.setAttribute(
      "aria-pressed",
      String(index === activeProjectImageIndex),
    );
    button.setAttribute(
      "aria-label",
      `Show image ${index + 1} of ${activeProjectGallery.length}: ${item.caption || item.alt || "Project image"}`,
    );

    const thumbnail = document.createElement("img");
    thumbnail.src = item.src;
    thumbnail.alt = "";
    thumbnail.loading = "lazy";
    thumbnail.decoding = "async";
    button.append(thumbnail);
    projectDialogThumbnails.append(button);
  });
}

function selectProjectDialogImage(index) {
  if (index < 0 || index >= activeProjectGallery.length) return;
  activeProjectImageIndex = index;
  renderProjectDialogGallery();
}

function openProjectDialog(project) {
  if (!projectDialog) return;

  projectDialogKicker.textContent = `${project.category} / ${project.year}`;
  projectDialogTitle.textContent = project.title;
  projectDialogDescription.textContent = project.description;
  activeProjectGallery =
    Array.isArray(project.gallery) && project.gallery.length
      ? project.gallery
      : project.image?.trim()
        ? [
            {
              src: project.image,
              alt: project.imageAlt || `Full-size image for ${project.title}`,
              caption: project.title,
              fit: project.imageFit === "contain" ? "contain" : "cover",
            },
          ]
        : [];
  activeProjectImageIndex = 0;
  renderProjectDialogGallery();

  projectDialogTags.replaceChildren();
  project.technologies.forEach((technology) => {
    const tag = document.createElement("li");
    tag.textContent = technology;
    projectDialogTags.append(tag);
  });

  projectDialogMeta.replaceChildren();
  [
    ["Year", project.year],
    ["Context", project.role],
    ["Status", project.status],
    ["Type", project.type],
  ].forEach(([label, value]) => {
    const item = document.createElement("div");
    const term = document.createElement("dt");
    const description = document.createElement("dd");
    term.textContent = label;
    description.textContent = value;
    item.append(term, description);
    projectDialogMeta.append(item);
  });

  const links = renderProjectLinks(project);
  projectDialogLinks.replaceChildren();
  if (links.length) {
    const linkGroup = document.createElement("div");
    linkGroup.className = "project-card-actions";
    linkGroup.innerHTML = links.join("");
    projectDialogLinks.append(linkGroup);
  }

  if (typeof projectDialog.showModal === "function") {
    projectDialog.showModal();
  } else {
    projectDialog.setAttribute("open", "");
  }
}

function closeProjectDialog() {
  if (!projectDialog) return;
  if (typeof projectDialog.close === "function") {
    projectDialog.close();
  } else {
    projectDialog.removeAttribute("open");
  }
}

function renderProjects() {
  if (!projectGrid) return;

  const query = (searchInput?.value || "").trim().toLowerCase();
  const category = categoryFilter?.value || "all";
  const year = yearFilter?.value || "all";
  const filtered = projects.filter((project) => {
    const searchable = [
      project.title,
      project.category,
      project.type,
      project.year,
      project.role,
      ...project.technologies,
      ...project.features,
    ]
      .join(" ")
      .toLowerCase();

    return (
      (!query || searchable.includes(query)) &&
      (category === "all" || project.category === category) &&
      (year === "all" || project.year === year)
    );
  });

  projectGrid.innerHTML = filtered
    .map(
      (project, index) => `
        <article
          class="project-card"
          role="group"
          aria-roledescription="slide"
          aria-label="Slide ${index + 1} of ${filtered.length}: ${project.title}"
          aria-labelledby="project-${project.id}"
        >
          ${renderProjectImage(project)}
          <p class="card-kicker">${String(index + 1).padStart(2, "0")} / ${project.category}</p>
          <h3 id="project-${project.id}">${project.title}</h3>
          <p class="project-card-description">${project.description}</p>
          <ul class="project-tags">${project.technologies.map((technology) => `<li>${technology}</li>`).join("")}</ul>
          <div class="project-meta">
            <div><span>Year</span><strong>${project.year}</strong></div>
            <div><span>Context</span><strong>${project.role}</strong></div>
            <div><span>Status</span><strong>${project.status}</strong></div>
            <div><span>Type</span><strong>${project.type}</strong></div>
          </div>
          ${renderProjectActions(project)}
        </article>
      `,
    )
    .join("");

  if (projectCount) {
    projectCount.textContent = `${filtered.length} ${filtered.length === 1 ? "project" : "projects"} shown`;
  }
  if (emptyProjects) emptyProjects.hidden = filtered.length !== 0;
  projectGrid.scrollTo({ left: 0, behavior: "auto" });
  requestAnimationFrame(updateProjectCarouselControls);
}

populateProjectFilters();
[searchInput, categoryFilter, yearFilter].forEach((control) =>
  control?.addEventListener("input", renderProjects),
);
previousProjectButton?.addEventListener("click", () => moveProjectCarousel(-1));
nextProjectButton?.addEventListener("click", () => moveProjectCarousel(1));
projectGrid?.addEventListener("click", (event) => {
  const viewButton = event.target.closest(".project-view-button");
  if (!viewButton) return;

  const project = projects.find(
    (item) => item.id === viewButton.dataset.projectId,
  );
  if (project) openProjectDialog(project);
});
projectDialogCloseButton?.addEventListener("click", closeProjectDialog);
projectDialogPreviousImageButton?.addEventListener("click", () =>
  selectProjectDialogImage(activeProjectImageIndex - 1),
);
projectDialogNextImageButton?.addEventListener("click", () =>
  selectProjectDialogImage(activeProjectImageIndex + 1),
);
projectDialogThumbnails?.addEventListener("click", (event) => {
  const thumbnail = event.target.closest("[data-gallery-index]");
  if (thumbnail)
    selectProjectDialogImage(Number(thumbnail.dataset.galleryIndex));
});
projectDialog?.addEventListener("keydown", (event) => {
  if (activeProjectGallery.length <= 1) return;
  if (event.key === "ArrowLeft") {
    event.preventDefault();
    selectProjectDialogImage(activeProjectImageIndex - 1);
  }
  if (event.key === "ArrowRight") {
    event.preventDefault();
    selectProjectDialogImage(activeProjectImageIndex + 1);
  }
});
projectDialog?.addEventListener("click", (event) => {
  if (event.target === projectDialog) closeProjectDialog();
});
projectGrid?.addEventListener(
  "scroll",
  () => requestAnimationFrame(updateProjectCarouselControls),
  { passive: true },
);
projectGrid?.addEventListener("keydown", (event) => {
  if (event.target !== projectGrid) return;
  if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
    event.preventDefault();
    moveProjectCarousel(event.key === "ArrowRight" ? 1 : -1);
  }
});
window.addEventListener("resize", updateProjectCarouselControls);
renderProjects();

document.querySelector("#current-year").textContent = new Date().getFullYear();

const menuToggle = document.querySelector(".menu-toggle");
const primaryNav = document.querySelector("#primary-nav");
function setMenuOpen(isOpen) {
  if (!primaryNav || !menuToggle) return;
  primaryNav.classList.toggle("is-open", isOpen);
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.querySelector("span").textContent = isOpen ? "×" : "+";
  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Close navigation menu" : "Open navigation menu",
  );
}
menuToggle?.addEventListener("click", () => {
  setMenuOpen(menuToggle.getAttribute("aria-expanded") !== "true");
});
primaryNav?.querySelectorAll("a").forEach((link) =>
  link.addEventListener("click", () => {
    setMenuOpen(false);
  }),
);
document.addEventListener("click", (event) => {
  if (!primaryNav?.classList.contains("is-open")) return;
  if (
    event.target instanceof Element &&
    !primaryNav.contains(event.target) &&
    !menuToggle?.contains(event.target)
  ) {
    setMenuOpen(false);
  }
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && primaryNav?.classList.contains("is-open")) {
    setMenuOpen(false);
    menuToggle?.focus();
  }
});

const themeToggle = document.querySelector(".theme-toggle");
const savedTheme = localStorage.getItem("portfolio-theme");
if (savedTheme === "dark") document.documentElement.dataset.theme = "dark";
function updateThemeButton() {
  const dark = document.documentElement.dataset.theme === "dark";
  themeToggle.textContent = dark ? "Light mode" : "Dark mode";
  themeToggle.setAttribute("aria-pressed", String(dark));
  themeToggle.setAttribute(
    "aria-label",
    dark ? "Switch to light mode" : "Switch to dark mode",
  );
}
updateThemeButton();
themeToggle?.addEventListener("click", () => {
  const dark = document.documentElement.dataset.theme === "dark";
  if (dark) delete document.documentElement.dataset.theme;
  else document.documentElement.dataset.theme = "dark";
  localStorage.setItem("portfolio-theme", dark ? "light" : "dark");
  updateThemeButton();
});

const contactForm = document.querySelector("#contact-form");
const formStatus = document.querySelector("#form-status");
const backToTopButton = document.querySelector(".back-to-top");
const reducedMotionPreference = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
);

function updateBackToTopButton() {
  backToTopButton?.classList.toggle("is-visible", window.scrollY > 400);
}

window.addEventListener("scroll", updateBackToTopButton, { passive: true });
updateBackToTopButton();
backToTopButton?.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: reducedMotionPreference.matches ? "auto" : "smooth",
  });
});

contactForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(contactForm);
  const name = String(formData.get("name") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const subject = String(formData.get("subject") || "").trim();
  const message = String(formData.get("message") || "").trim();
  if (!name || !email || !subject || !message || !email.includes("@")) {
    formStatus.textContent =
      "Please complete all fields with a valid email address.";
    formStatus.classList.add("error");
    return;
  }
  const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
  window.location.href = `mailto:jenner.navida@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  formStatus.textContent =
    "Your email app should open with the message prepared.";
  formStatus.classList.remove("error");
});
