import { Header } from "../components/Header.js";
import { Footer } from "../components/Footer.js";

export function Home() {
  return `
    ${Header()}

    <main>
      <h1>Home</h1>
    </main>

    ${Footer()}
  `;
}
