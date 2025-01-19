import { execSync } from 'child_process';
import * as fs from 'fs';
import chalk from 'chalk';

type Config = {
    errorMessage?: string;
};

export default class ZpCLI {
    static runCommand(command: string, config?: Config): string {
      try {
        return execSync(command, { encoding: 'utf8' }).trim();
      } catch (error) {
        if (config?.errorMessage) console.error(chalk.red(config.errorMessage));
        throw error;
      }
    }
  
    static checkFileExists(file: string): boolean {
      if (!fs.existsSync(file)) {
        console.log(chalk.yellow(`Warning: ${file} is missing. Skipping its changes.`));
        return false;
      }
      return true;
    }
  }