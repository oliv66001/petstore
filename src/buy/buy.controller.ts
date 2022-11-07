import {Body, Controller, Get, Post, Res, Param} from '@nestjs/common';

@Controller('buy')
export class BuyController {

    @Get()
    getBuy(): string {
      return 'I can do what I want but this is not good'
    }

    @Get('pet/id/:id')
    getBuyPets(@Param('id') id:string): string {
        //call the service
        //get the pet where id= id
      return 'This is the pet whose id=' + id
    }

    @Get('pet/id/:id')
    postBuyPets(@Param('id') id:string): string {
        //call the service
        //get the pet where id= id
      return ' id=' + id
    }
}
