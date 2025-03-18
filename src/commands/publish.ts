import { Command, Flags } from '@oclif/core';
import chalk from 'chalk';
import ZpCLI from '../utils/zpCli.js';


export class Publish extends Command {
    static description = 'Publish the current version after validations';

    static flags = {
        minor: Flags.boolean({ description: 'Bump minor version' }),
        major: Flags.boolean({ description: 'Bump major version' }),
    }
  
    async run() {
      const { flags } = await this.parse(Publish);
  
      const currentBranch = ZpCLI.runCommand('git branch --show-current', {errorMessage: 'Failed to get current branch'});
      if (currentBranch !== 'develop' && !currentBranch.startsWith('hotfix')) {
        this.log(chalk.red('You must be on develop, or hotfix branch to publish.'));
        return;
      }
  
      const status = ZpCLI.runCommand('git status --porcelain');
      if (status) {
        this.log(chalk.red('There are uncommitted changes. Please commit or stash them before publishing.'));
        return;
      }

      this.log(chalk.greenBright(`Bumping version...`));
  
      const versionType = flags.minor ? 'minor' : flags.major ? 'major' : 'patch';
      const newVersion = ZpCLI.runCommand(`npm version ${versionType} --no-git-tag-version`, {errorMessage: 'Failed to bump version'}).replace('v', '');
      const branchName = `release/${newVersion}`;
      const existingBranches = ZpCLI.runCommand('git branch --list');
      
      if (existingBranches.includes(branchName)) {
        this.log(chalk.red(`Branch ${branchName} already exists. Cannot create a duplicate release branch.`));
  
        this.log(chalk.yellowBright('Reverting version change...'));
        ['package.json', 'package-lock.json'].forEach(file => {
            if (ZpCLI.checkFileExists(file)) {
                ZpCLI.runCommand(`git checkout -- ${file}`);
            }
        });
        return;
      }
      
      if(currentBranch === 'develop') {
        this.log(chalk.greenBright(`Creating release branch: ${branchName}`));
        ZpCLI.runCommand(`git checkout -b ${branchName}`);
      }
  
      
  
      this.log(chalk.greenBright('Staging changes...'));
      ZpCLI.runCommand('git add .');
  
      this.log(chalk.greenBright('Committing changes...'));
      ZpCLI.runCommand(`git commit -m "build: bump version to \\\`${newVersion}\\\`"`);
  
      this.log(chalk.greenBright(`Version bumped and branch created: ${branchName}`));
    }
  }
  