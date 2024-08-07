import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { UserEntity } from '../entity/user.entity';

export default {
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: () => ({
        type: 'mysql',
        host: process.env.TYPEORM_HOST,
        port: Number(process.env.TYPEORM_PORT),
        username: process.env.TYPEORM_USERNAME,
        password: process.env.TYPEORM_PASSWORD,
        database: process.env.TYPEORM_DATABASE,
        synchronize: false,
        dropSchema: false,
        entities: [UserEntity], // Add your entities here
        migrations: ['database/migration/*.{js,ts}'],
        migrationsRun: process.env.TYPEORM_MIGRATIONS_RUN === 'true',
        migrationsTableName: process.env.TYPEORM_MIGRATIONS_TABLE_NAME,
        charset: 'utf8mb4_unicode_ci',
        connectTimeout: 100000,
        cache: true,
      }),
    }),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET'),
        signOptions: { expiresIn: '30d' },
      }),
    }),
  ],
  providers: [
    {
      provide: 'ADMIN_EMAIL',
      useFactory: (configService: ConfigService) =>
        configService.get<string>('ADMIN_EMAIL'),
      inject: [ConfigService],
    },
    {
      provide: 'ADMIN_PASSWORD',
      useFactory: (configService: ConfigService) =>
        configService.get<string>('ADMIN_PASSWORD'),
      inject: [ConfigService],
    },
  ],
};
