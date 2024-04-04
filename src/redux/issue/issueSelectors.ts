import { appSelector } from "../store";

export const issues = appSelector((state) => state.issues.issues);
