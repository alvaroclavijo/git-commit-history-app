import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommitsController } from './commits/commits.controller';
import { CommitsService } from './commits/commits.service';

@Module({
  imports: [HttpModule],
  controllers: [AppController, CommitsController],
  providers: [AppService, CommitsService],
})
export class AppModule {}
