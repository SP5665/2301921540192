export default function App() {
  return "Notifications App";
}
import { useEffect } from "react";
import { log } from "./middleware/logger";

export default function App() {
  useEffect(() => {
    log(
      "frontend",
      "info",
      "page",
      "Notifications App Loaded"
    );
  }, []);

  return (
    <div>
      Notifications App
    </div>
  );
}