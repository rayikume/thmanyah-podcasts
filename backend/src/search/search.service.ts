import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class SearchService {
  constructor(
    private readonly http: HttpService,
    private readonly prisma: PrismaService,
  ) {}

  async search(term: string) {
    const url = `https://itunes.apple.com/search?term=${encodeURIComponent(term)}&media=podcast&limit=20`;
    const response = await lastValueFrom(this.http.get(url));
    const results = response.data.results;

    // Save to DB
    const savedEntries = await Promise.all(
      results.map(async (item) => {
        return this.prisma.itunesResult.upsert({
          where: { trackId: item.trackId },
          update: {
            artworkUrl: item.artworkUrl100.replace(
              /\/\d+x\d+bb\.jpg$/,
              '/600x600bb.jpg',
            ),
          },
          create: {
            trackId: item.trackId,
            artistName: item.artistName,
            trackName: item.trackName,
            artworkUrl: item.artworkUrl100.replace(
              /\/\d+x\d+bb\.jpg$/,
              '/600x600bb.jpg',
            ),
            previewUrl: item.previewUrl,
          },
        });
      }),
    );

    return savedEntries;
  }
}
