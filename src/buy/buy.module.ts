import { Module } from '@nestjs/common';
import { BuyController } from './buy.controller';

@Module({
    providers:[],
    controllers:[BuyController],
})
export class BuyModule {}
