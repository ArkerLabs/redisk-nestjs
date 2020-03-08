import { Module, DynamicModule } from '@nestjs/common';
import { Redisk } from 'redisk';
import { RediskOptions } from './interfaces';

@Module({
    providers: [
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
          global: true,
          providers: [
            {
              provide: Redisk,
              useValue: Redisk.init(options),
            },
          ],
          exports: [
              Redisk,
          ]
        };
      }
}
