import type {Config} from '@jest/types';

export default async (): Promise<Config.InitialOptions> => {
  return {
    testEnvironment: "jsdom",
    setupFilesAfterEnv: [
      "<rootDir>/jest-setup.ts"
    ],
    moduleNameMapper: {
      "\\.(css|less)$": "identity-obj-proxy"
    },
    collectCoverage: true,
    coverageReporters: ["json", "html"],
    collectCoverageFrom: [
      "src/**/*.{ts,tsx}",
      "!src/**/*.d.ts"
    ]
  };
};
