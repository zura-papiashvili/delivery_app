import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AddressEntity } from './entities/address.entity';
import { MenuEntity } from './entities/menu.entity';
import { OrdersEntity } from './entities/orders.entity';
import { RestaurantEntity } from './entities/restaurant.entity';
import { ReviewEntity } from './entities/review.entity';
import { UsersEntity } from './entities/users.entity';
import { AddressModule } from './modules/address/address.module';
import { AuthModule } from './modules/auth/auth.module';
import { MenuModule } from './modules/menu/menu.module';
import { OrdersModule } from './modules/orders/orders.module';
import { RestaurantsModule } from './modules/restaurants/restaurants.module';
import { UsersModule } from './modules/users/users.module';
import { MessageGateway } from './modules/message/message.gateway';
import { MessageModule } from './modules/message/message.module';
// import { ServeStaticModule } from '@nestjs/serve-static';
// import { ConfigModule } from '@nestjs/config';
import { Message } from './entities/message.entity';
import { ChatGateway } from './chat.gateway';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MessageModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'ec2-54-89-143-102.compute-1.amazonaws.com',
      port: 3306,
      username: 'frodo',
      password: 'MyNewPass1!',
      database: 'lotr',
      entities: [
        UsersEntity,
        RestaurantEntity,
        MenuEntity,
        OrdersEntity,
        ReviewEntity,
        AddressEntity,
      ],
      synchronize: true,
    }),
    AddressModule,
    UsersModule,
    RestaurantsModule,
    MenuModule,
    OrdersModule,
    AuthModule,
    MessageModule,
  ],
  controllers: [],
  providers: [ChatGateway],
})
export class AppModule {}
