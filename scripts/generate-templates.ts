import { getAsvsTemplates } from "./lib/generate-asvs-templates";
import { getBaseTemplates } from "./lib/generate-base-templates";
import { getGdprTemplates } from "./lib/generate-gdpr-templates";
import { getMobileTemplates } from "./lib/generate-mobile-templates";

getAsvsTemplates();
getBaseTemplates();
getMobileTemplates();
getGdprTemplates();
