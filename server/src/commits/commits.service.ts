import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Observable, firstValueFrom } from 'rxjs';
import { AxiosResponse } from 'axios';

@Injectable()
export class CommitsService {
  constructor(private httpService: HttpService) {}

  async getGitHubCommits(
    owner: string,
    repo: string,
    token: string,
  ): Promise<Observable<AxiosResponse>> {
    const url = `https://api.github.com/repos/${owner}/${repo}/commits`;
    const headers = {
      Accept: 'application/vnd.github+json',
      Authorization: `Bearer ${token}`,
      'X-GitHub-Api-Version': '2022-11-28',
    };

    const axiosConfig = {
      headers,
    };

    try {
      const response = await firstValueFrom(
        this.httpService.get(url, axiosConfig),
      );
      return response.data;
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || 'Failed to fetch GitHub commits.';
      const statusCode =
        error.response?.status || HttpStatus.INTERNAL_SERVER_ERROR;
      throw new HttpException(errorMessage, statusCode);
    }
  }
}
