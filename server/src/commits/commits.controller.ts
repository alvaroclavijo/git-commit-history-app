import { Controller, Get, Query } from '@nestjs/common';
import { CommitsService } from './commits.service';

@Controller('commits')
export class CommitsController {
  constructor(private readonly commitsService: CommitsService) {}

  @Get()
  async getCommits(
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 10,
  ) {
    const { GITHUB_OWNER, GITHUB_REPO, GITHUB_TOKEN } = process.env;

    const normalizedPage = Math.max(1, page); // Ensure that page is at least 1
    return this.commitsService.getGitHubCommits(
      GITHUB_OWNER,
      GITHUB_REPO,
      GITHUB_TOKEN,
      normalizedPage,
      limit,
    );
  }
}
