import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Enable CORS
  app.enableCors({
    origin: ['http://localhost:3001'], // Frontend URL
    methods: ['GET', 'POST'], // Allowed HTTP methods
    credentials: true, // Include credentials
  });

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
