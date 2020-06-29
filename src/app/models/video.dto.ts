
/// Model class for handling videos received from youtube
export class Video {
    kind: string;
    etag: string;
    id: any;
    url: any;
    snippet: Snippet;
}

/// Model class for handling snippet property from videos
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
