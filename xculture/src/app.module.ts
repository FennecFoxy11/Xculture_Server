import { Module } from '@nestjs/common';
import { ormConfig } from './configs/ormconfig';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TagsModule } from './api/tags/tags.module';
import { ForumsModule } from './api/forums/forums.module';
import { RepliesModule } from './api/replies/replies.module';
import { CommentsModule } from './api/comments/comments.module';



@Module({
  imports: [
    ForumsModule,
    CommentsModule,
    RepliesModule,
    TagsModule,
    TypeOrmModule.forRoot(ormConfig)
  ],
})
export class AppModule {}
