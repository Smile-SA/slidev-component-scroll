import { defineAppSetup } from "@slidev/types";
import ScrollPlugin from "../src/index";

export default defineAppSetup(({ app }) => {
  app.use(ScrollPlugin);
});
