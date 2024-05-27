export interface BlogPostModel {
    id: number | string | undefined;
    post_title: string;
    slug: string;
    post_content: string | null | undefined;
    description: string | null | undefined;
    post_categories: string[] | number[] | any;
    post_img: string | null | undefined;
    created_at: string | Date | null | undefined;
    updated_at: string | Date | null | undefined;
    url: App.Router | null | undefined;
}

export interface BlogPostListModel extends List.Pagination<BlogPostModel> {}
