import { Controller, Get, Query } from '@nestjs/common';
import { CommitsService } from './commits.service';

@Controller('commits')
export class CommitsController {
  constructor(private readonly commitsService: CommitsService) {}

  @Get()
  async getCommits(
    @Query('owner') owner: string = '',
    @Query('repo') repo: string = '',
    @Query('token') token: string = '',
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 10,
  ) {
    const normalizedPage = Math.max(1, page); // Ensure that page is at least 1
    return this.commitsService.getGitHubCommits(
      owner,
      repo,
      token,
      normalizedPage,
      limit,
    );
  }
}
