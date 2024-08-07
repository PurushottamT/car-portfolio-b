import { DataSource } from 'typeorm';
import { UserEntity } from '../entity/user.entity';

import * as dotenv from 'dotenv';
dotenv.config();

export const AppDataSource = new DataSource({
  type: 'mysql',
  dropSchema: false,
  host: process.env.TYPEORM_HOST,
  port: Number(process.env.TYPEORM_PORT),
  username: process.env.TYPEORM_USERNAME,
  password: 'yourpassword',
  database: process.env.TYPEORM_DATABASE,
  synchronize: false,
  migrations: ['src/database/migration/*.{js,ts}'],
  logging: process.env.TYPEORM_LOGGING === 'true',
  entities: [UserEntity],
  migrationsRun: process.env.TYPEORM_MIGRATIONS_RUN === 'true',
  migrationsTableName: process.env.TYPEORM_MIGRATIONS_TABLE_NAME,
  charset: 'utf8mb4_unicode_ci',
  connectTimeout: 100000,
  cache: true,
});
