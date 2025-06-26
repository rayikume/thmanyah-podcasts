import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SearchModule } from './search/search.module';
import { PrismaService } from './prisma.service';

@Module({
  imports: [SearchModule],
  providers: [PrismaService],
})
export class AppModule {}
