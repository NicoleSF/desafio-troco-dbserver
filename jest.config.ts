
import type { Config } from '@jest/types';

const {defaults} = require('jest-config');


module.exports = {
    moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
    "transform": {
        "^.+\\.(js|ts|tsx)$": "ts-jest"
      },
      collectCoverage: true,
        collectCoverageFrom: [
          "**/*.{js,jsx}",
          "!**/node_modules/**",
          "!**/vendor/**",
          "!**/coverage/**"
        ],
        
}

const config:Config.InitialOptions = {
   
        preset: "ts-jest",
        watchAll: true,
        verbose: true,
    
}

export default config;