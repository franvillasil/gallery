export interface Img {
    id: number;
    title: string;
    brief: string;
    description: string;
    imgUrl: string;
    labels: Array<string>;
    likes: number;
    references: number;
    owner: Object;
    comments: Object;
    date: string;
}
