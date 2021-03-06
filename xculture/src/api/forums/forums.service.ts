import { Injectable } from "@nestjs/common";
import { ForumsRepository } from "src/repository/forums.repository";

@Injectable()
export class ForumsService {
    constructor(private readonly repository: ForumsRepository) {}

    async getForums() {
        return await this.repository.getForums();
    }

    async getForum(forumID) {
        return await this.repository.getForum(forumID);
    }

    async createForum(title, subtitle, content, thumbnail_url, incognito, tags) {
        var author = "User";
        var favorite_amount = 0;
        var viewed = 0;
        var date = new Date();

        await this.repository.createForum(title, subtitle, content, thumbnail_url, author, incognito, tags, viewed, favorite_amount, date, date);
    }

    async updateForum(forumID, title, subtitle, content, thumbnail_url, incognito, tags) {
        var update_date = new Date();

        await this.repository.updateForum(forumID, title, subtitle, content, thumbnail_url, incognito, tags, update_date);
    }

    async updateForumView(forumID) {
        await this.repository.updateForumView(forumID);
    }

    async forumFavorite(forumID) {
        await this.repository.forumFavorite(forumID);
    }

    async forumUnfavorite(forumID) {
        await this.repository.forumUnfavorite(forumID);
    }
}