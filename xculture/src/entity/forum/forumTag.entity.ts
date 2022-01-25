import { ForumEntity } from "./forum.entity";
import { TagEntity } from "../tags/tag.entity";
import { Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity("forum_tag")
export class ForumTagEntity {
    @PrimaryGeneratedColumn({name: "forumTag_id"})
    id: number;

    @ManyToOne(() => ForumEntity, forum => forum.tags)
    forum: ForumEntity;

    @ManyToOne(() => TagEntity, tag => tag.forumTagUsages)
    tag: TagEntity;

}