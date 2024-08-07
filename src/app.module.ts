import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminModule } from './module/admin/admin.module';
import { AdminModule } from './module/admin/admin/admin.module';
import { CustomerModule } from './module/customer/customer.module';
import { AdminModule } from './module/admin/admin.module';

@Module({
  imports: [AdminModule, CustomerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
