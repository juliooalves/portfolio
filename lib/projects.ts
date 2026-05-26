import type { StaticImageData } from "next/image";

import oidcManagementImage from "@/images/oidc-managenament.png";
import sastDastImage from "@/images/sast-dast.png";

export type Project = {
  title: string;
  description: string;
  image: string | StaticImageData | null;
  repoUrl?: string;
  projectUrl?: string;
  path?: string;
  highlights?: string[];
  status?: string;
};

export const projects = [
  {
    title: "OIDC Identity Provider",
    description:
      "Vault-based IdP for service auth, OIDC tokens, JWKS validation, and safe signing-key rotation.",
    image: oidcManagementImage,
    repoUrl: "https://github.com/juliooalves/oidc-secrets-manager-system",
    path: "vault/node/typescript/docker",
    status: "Security architecture",
    highlights: [
      "AppRole service authentication",
      "Dynamic JWT and JWKS lifecycle",
      "Zero-downtime signing key rotation",
    ],
  },
  {
    title: "SAST-DAST Pipeline",
    description:
      "Security pipeline that scans code and dependencies with Snyk, then tests the running app with OWASP ZAP.",
    image: sastDastImage,
    repoUrl: "https://github.com/juliooalves/sast-dast-pipeline",
    path: "snyk/owasp-zap/ci-cd",
    status: "DevSecOps pipeline",
    highlights: [
      "SAST and SCA with Snyk",
      "DAST against running environments",
      "CI/CD security feedback loop",
    ],
  },
  {
    title: "CircuitNode",
    description:
      "Virtual electronics lab for wiring visual circuits, simulating logic live, and generating Arduino code.",
    image: null,
    repoUrl: "https://github.com/juliooalves/CircuitNode",
    path: "react-flow/vite/node/arduino",
    status: "Interactive prototype",
    highlights: [
      "Real-time circuit simulation",
      "Visual nodes and virtual wires",
      "Arduino C++ code generation",
    ],
  },
] satisfies Project[];
