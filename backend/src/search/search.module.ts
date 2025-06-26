import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { SearchService } from './search.service';
import { SearchController } from './search.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  imports: [HttpModule],
  providers: [SearchService, PrismaService],
  controllers: [SearchController],
})
export class SearchModule {}
