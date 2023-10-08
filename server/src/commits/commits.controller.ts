import { Controller, Get, Query } from '@nestjs/common';
import { CommitsService } from './commits.service';

@Controller('commits')
export class CommitsController {
  constructor(private readonly commitsService: CommitsService) {}

  @Get()
  async getCommits(
    @Query('owner') owner: string,
    @Query('repo') repo: string,
    @Query('token') token: string,
  ) {
    // Call the service to fetch commits from GitHub API
    return this.commitsService.getGitHubCommits(owner, repo, token);
  }
}
