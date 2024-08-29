import { getBaseTemplates } from "./lib/generate-base-templates";
import { getGdprTemplates } from "./lib/generate-gdpr-templates";
import { getMobileTemplates } from "./lib/generate-mobile-templates";

getBaseTemplates();
getMobileTemplates();
getGdprTemplates();