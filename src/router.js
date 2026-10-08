import { Home } from "./pages/Home.js";

const routes = {
  "/": Home,
};

function renderRoute() {
  const app = document.querySelector("#app");

  const path = window.location.pathname;

  const Page = routes[path];

  if (!Page) {
    app.innerHTML = `
      <main class="not-found">
        <h1>Page Not Found</h1>
        <a href="/" data-link>Return Home</a>
      </main>
    `;

    return;
  }

  app.innerHTML = Page();

  window.scrollTo({
    top: 0,
    behavior: "instant",
  });
}

function navigate(event) {
  const link = event.target.closest("[data-link]");

  if (!link) return;

  const href = link.getAttribute("href");

  if (
    !href ||
    href.startsWith("http") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:")
  ) {
    return;
  }

  event.preventDefault();

  history.pushState({}, "", href);

  renderRoute();
}

export function initRouter() {
  renderRoute();

  document.addEventListener("click", navigate);

  window.addEventListener("popstate", renderRoute);
}
