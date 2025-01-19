import { Command } from '@oclif/core';
import ZpCLI from '../utils/zpCli.js';
import chalk from 'chalk';

export class Reset extends Command {
    static description = 'Reset the last commit and delete the release branch';
  
    async run() {
      const currentBranch = ZpCLI.runCommand('git branch --show-current', {errorMessage: 'Failed to get current branch'});
  
      if (!currentBranch || !currentBranch.startsWith('release/')) {
        this.log(chalk.red('Current branch is not a release branch. Cannot reset.'));
        return;
      }
  
      this.log(chalk.greenBright('Resetting last commit...'));
      ZpCLI.runCommand('git reset --hard HEAD~1');

      const branches = ZpCLI.runCommand('git branch');
      const targetBranch = branches.includes('develop') ? 'develop' : 'main';

      this.log(chalk.greenBright(`Switching to branch: ${targetBranch}`));
      ZpCLI.runCommand(`git checkout ${targetBranch}`);
  
      this.log(chalk.greenBright(`Deleting branch: ${currentBranch}`));
      ZpCLI.runCommand(`git branch -D ${currentBranch}`);
  
  
      this.log(chalk.greenBright(`Reset complete. Now on branch: ${targetBranch}`));
    }
  }