import {
  siBurpsuite,
  siClaude,
  siDocker,
  siExpress,
  siGit,
  siGnubash,
  siGo,
  siGooglegemini,
  siJavascript,
  siLaravel,
  siLinux,
  siMetasploit,
  siMysql,
  siN8n,
  siNgrok,
  siNextdotjs,
  siNodedotjs,
  siPhp,
  siPostman,
  siPostgresql,
  siPython,
  siRedis,
  siReact,
  siRust,
  siSpring,
  siTypescript,
  siVite,
} from "simple-icons";

export type StackIcon = {
  title: string;
  path: string;
  stroke?: boolean;
};

const javaIcon = {
  title: "Java",
  path: "M8.851 18.56s-.917.534.653.714c1.902.218 2.874.187 4.969-.211 0 0 .552.346 1.321.646-4.699 2.013-10.633-.118-6.943-1.149M8.276 15.933s-1.028.761.542.924c2.032.209 3.636.227 6.413-.308 0 0 .384.389.987.602-5.679 1.661-12.007.13-7.942-1.218M13.116 11.475c1.158 1.333-.304 2.533-.304 2.533s2.939-1.518 1.589-3.418c-1.261-1.772-2.228-2.652 3.007-5.688 0-.001-8.216 2.051-4.292 6.573M19.33 20.504s.679.559-.747.991c-2.712.822-11.288 1.069-13.669.033-.856-.373.75-.89 1.254-.998.527-.114.828-.093.828-.093-.953-.671-6.156 1.317-2.644 1.887 9.578 1.553 17.462-.7 14.978-1.82M9.292 13.21s-4.362 1.036-1.545 1.412c1.19.159 3.561.123 5.77-.062 1.806-.152 3.618-.477 3.618-.477s-.637.273-1.098.589c-4.429 1.165-12.986.623-10.522-.568 2.082-1.006 3.777-.894 3.777-.894M17.116 17.584c4.503-2.34 2.421-4.589.968-4.285-.356.074-.515.138-.515.138s.132-.207.385-.297c2.875-1.011 5.086 2.981-.928 4.562 0-.001.07-.062.09-.118M14.401 0s2.494 2.494-2.365 6.33c-3.896 3.077-.888 4.832-.001 6.836-2.274-2.053-3.941-3.858-2.824-5.539C10.85 5.163 15.388 3.97 14.401 0",
} satisfies StackIcon;

const databaseIcon = {
  title: "ChromaDB",
  path: "M12 2C7.03 2 3 3.79 3 6v12c0 2.21 4.03 4 9 4s9-1.79 9-4V6c0-2.21-4.03-4-9-4Zm0 2c4.42 0 7 1.38 7 2s-2.58 2-7 2-7-1.38-7-2 2.58-2 7-2Zm0 16c-4.42 0-7-1.38-7-2v-2.56C6.58 16.4 9.18 17 12 17s5.42-.6 7-1.56V18c0 .62-2.58 2-7 2Zm0-5c-4.42 0-7-1.38-7-2v-2.56C6.58 11.4 9.18 12 12 12s5.42-.6 7-1.56V13c0 .62-2.58 2-7 2Z",
} satisfies StackIcon;

const networkScanIcon = {
  title: "Nmap",
  path: "M12 5C7 5 2.73 8.11 1 12c1.73 3.89 6 7 11 7s9.27-3.11 11-7c-1.73-3.89-6-7-11-7Zm0 12c-3.74 0-7.17-2.05-8.77-5C4.83 9.05 8.26 7 12 7s7.17 2.05 8.77 5c-1.6 2.95-5.03 5-8.77 5Zm0-8a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm0 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z",
} satisfies StackIcon;

const terminalIcon = {
  title: "sqlmap",
  path: "M3 4h18a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm0 2v12h18V6H3Zm3.3 2.7 3.6 3.3-3.6 3.3-1.35-1.48L6.93 12 4.95 10.18 6.3 8.7ZM10 15h6v2h-6v-2Z",
} satisfies StackIcon;

const msfvenomIcon = {
  title: "msfvenom",
  path: "M12 2 3 6v6c0 5.05 3.84 8.74 9 10 5.16-1.26 9-4.95 9-10V6l-9-4Zm0 2.2L19 7.3V12c0 3.87-2.86 6.7-7 7.9-4.14-1.2-7-4.03-7-7.9V7.3l7-3.1Zm-3.5 5.3 2.2 2.5-2.2 2.5L7 13.15 8.02 12 7 10.85l1.5-1.35Zm7 0 1.5 1.35L15.98 12 17 13.15l-1.5 1.35-2.2-2.5 2.2-2.5Z",
} satisfies StackIcon;

const powershellIcon = {
  title: "PowerShell",
  path: "M2 5.5A2.5 2.5 0 0 1 4.5 3h15A2.5 2.5 0 0 1 22 5.5v13a2.5 2.5 0 0 1-2.5 2.5h-15A2.5 2.5 0 0 1 2 18.5v-13Zm2.5-.5a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 .5.5h15a.5.5 0 0 0 .5-.5v-13a.5.5 0 0 0-.5-.5h-15Zm2.18 3.64L12 12l-5.32 3.36-1.07-1.69L8.26 12 5.61 10.33l1.07-1.69ZM12 15h6v2h-6v-2Z",
} satisfies StackIcon;

const codeXmlIconPath = "m18 16 4-4-4-4m-12 0-4 4 4 4m8.5-12-5 16";

const antigravityIcon = {
  title: "Antigravity",
  path: codeXmlIconPath,
  stroke: true,
} satisfies StackIcon;

const codexIcon = {
  title: "Codex",
  path: codeXmlIconPath,
  stroke: true,
} satisfies StackIcon;

const abacusIcon = {
  title: "Abacus",
  path: "M4 3h16v2H4V3Zm0 16h16v2H4v-2Zm1-12h2v10H5V7Zm12 0h2v10h-2V7ZM8 8h3v2H8V8Zm5 0h3v2h-3V8Zm-5 3h5v2H8v-2Zm7 0h1v2h-1v-2Zm-7 3h2v2H8v-2Zm4 0h4v2h-4v-2Z",
} satisfies StackIcon;

export const stacks = [
  siTypescript,
  siJavascript,
  siPython,
  siRust,
  siGo,
  javaIcon,
  siPhp,
  siNodedotjs,
  siReact,
  siNextdotjs,
  siExpress,
  siSpring,
  siLaravel,
  siVite,
  siLinux,
  siDocker,
  siRedis,
  siGit,
  siPostgresql,
  siMysql,
  databaseIcon,
  networkScanIcon,
  terminalIcon,
  msfvenomIcon,
  siMetasploit,
  siBurpsuite,
  siNgrok,
  siPostman,
  siN8n,
  antigravityIcon,
  codexIcon,
  { title: "Gemini CLI", path: siGooglegemini.path },
  siClaude,
  abacusIcon,
  { title: "Bash", path: siGnubash.path },
  powershellIcon,
] satisfies StackIcon[];
