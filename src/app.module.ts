import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BuyController } from './buy/buy.controller';
import { BuyModule } from './buy/buy.module';

@Module({
  imports: [BuyModule],
  controllers: [AppController, BuyController],
  providers: [AppService],
})
export class AppModule {}

