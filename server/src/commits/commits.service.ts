import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Observable, firstValueFrom, map, of } from 'rxjs';
import { AxiosResponse } from 'axios';

@Injectable()
export class CommitsService {
  constructor(private httpService: HttpService) {}

  async getGitHubCommits(
    owner: string,
    repo: string,
    token: string,
    page: number,
    limit: number,
  ): Promise<
    Observable<{
      content: any[];
      page: number;
      size: number;
      totalPages: number;
    }>
  > {
    const url = `https://api.github.com/repos/${owner}/${repo}/commits`;
    const queryParams = {
      page: page.toString(),
      per_page: limit.toString(),
    };

    const headers = {
      Accept: 'application/vnd.github+json',
      Authorization: `Bearer ${token}`,
      'X-GitHub-Api-Version': '2022-11-28',
    };

    const axiosConfig = {
      headers,
      params: queryParams,
    };

    try {
      const response = await firstValueFrom(
        this.httpService.get(url, axiosConfig),
      );

      const linkHeader = response.headers.link;
      const lastPageMatch = linkHeader
        ? linkHeader.match(/page=(\d+)&per_page=\d+>; rel="last"/)
        : null;
      const totalPages = lastPageMatch ? parseInt(lastPageMatch[1]) : 1;

      const customResponse = {
        content: response.data,
        page,
        size: limit,
        totalPages,
      };

      return of(customResponse).pipe(map((data) => data));
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || 'Failed to fetch GitHub commits.';
      const statusCode =
        error.response?.status || HttpStatus.INTERNAL_SERVER_ERROR;
      throw new HttpException(errorMessage, statusCode);
    }
  }
}
