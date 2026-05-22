import GitHubPreview from "./GitHubPreview";
import TwitterPreview from "./TwitterPreview";
import LinkedInPreview from "./LinkedInPreview";
import EmailPreview from "./EmailPreview";
import ResumePreview from "./ResumePreview";

export const PREVIEW_COMPONENTS = {
  email: EmailPreview,
  linkedin: LinkedInPreview,
  resume: ResumePreview,
  github: GitHubPreview,
  twitter: TwitterPreview,
};
