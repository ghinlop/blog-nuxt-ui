declare global {
    interface Error {
        statusCode: number;
        statusMessage: string;
        message: string;
    }
    namespace App {
        interface CallbackRequest {
            onSuccess?: Function | undefined;
            onError?: Function | undefined;
        }
        interface LoadingState {
            [key: string]: LoadingStatus;
        }

        interface Router extends RouteLocation {}
    }

    namespace List {
        interface Page {
            current_page: number;
            per_page: number;
        }

        interface Pagination<T> extends Page {
            total_page?: number;
            data: T[];
            last_page: number;
            total: number;
            load_more?: boolean;
        }

        interface ResponseList<T> extends Pagination<T> {
            first_page_url: string;
            from: number;
            last_page_url: string;
            links: Link[];
            next_page_url: any;
            path: string;
            prev_page_url: any;
            to: number;
            total: number;
        }
    }
}

export {};
