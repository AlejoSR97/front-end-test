
export class Video {
    kind: string;
    etag: string;
    id: string;
    url: any;
    snippet: Snippet;
}

export class Snippet {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: any;
    channelTitle: string;
    tags: string[];
    categoryId: string;
    liveBroadcastContent: string;
    localized: any;
}
