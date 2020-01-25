import { Module, DynamicModule } from '@nestjs/common';
import { Redisk, Metadata } from 'redisk';
import { RediskOptions } from './interfaces';
import * as redis from 'redis';

@Module({
    providers: [
        Metadata,
        Redisk,
    ],
    exports: [
        Redisk,
    ],
})
export class RediskModule {
    static forRoot(options: RediskOptions): DynamicModule {
        return {
          module: RediskModule,
          providers: [
            {
              provide: Redisk,
              useValue: new Redisk(new Metadata(), redis.createClient({url: options.url})),
            },
          ],
          exports: [
              Redisk,
          ]
        };
      }
}
