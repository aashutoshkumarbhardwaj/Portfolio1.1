import "./lib/error-capture";
import { hydrateStart } from "@tanstack/react-start-client";

async function main() {
  try {
    await hydrateStart();
    // hydration complete
  } catch (err) {
    console.error("Client hydration failed:", err);
  }
}

void main();
