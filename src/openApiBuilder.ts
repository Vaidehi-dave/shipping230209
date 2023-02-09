import { INestApplication } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder, OpenAPIObject } from '@nestjs/swagger';

export async function createOpenAPIObject(app:  INestApplication) : Promise<OpenAPIObject> {
  const config = new DocumentBuilder()
    .setTitle("shipping")
    .setDescription("shipping api")
    .setVersion('1.0')
    .build();
  return SwaggerModule.createDocument(app, config);
}