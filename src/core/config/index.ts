import * as dotenv from 'dotenv';
import { UserEntity } from '../entity/user.entity';
import { DataSourceOptions } from 'typeorm';
dotenv.config();

export default {
  jwt: {
    secret: process.env.JWT_SECRET,
    expiry: '30d',
  },
  database: {
    type: 'mysql',
    dropSchema: false,
    host: process.env.TYPEORM_HOST,
    port: Number(process.env.TYPEORM_PORT),
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    database: process.env.TYPEORM_DATABASE,
    synchronize: false,
    migrations: ['database/migration/*.{js,ts}'],
    logging: process.env.TYPEORM_LOGGING === 'true',
    entities: [UserEntity],
    migrationsRun: process.env.TYPEORM_MIGRATIONS_RUN === 'true',
    migrationsTableName: process.env.TYPEORM_MIGRATIONS_TABLE_NAME,
    charset: 'utf8mb4_unicode_ci',
    connectTimeout: 100000,
    cache: true,
  } as DataSourceOptions,
  admin: {
    email: process.env.ADMIN_EMAIL,
    password: process.env.ADMIN_PASSWORD,
  },
};
