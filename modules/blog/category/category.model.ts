export interface CategoryBlogModel {
    slug: string;
    id: string | number;
    name: string | undefined;
    description: string | undefined;
    image: string | undefined;
    active: boolean;
    url: string;
    color: string;
}
