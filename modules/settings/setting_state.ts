import { useSettingStore } from "./setting_store";

export const useSettingState = () => {
    const config = useRuntimeConfig().public;
    async function GetSettings(): Promise<SettingModel | undefined> {
        const { data, error, status, execute } = await useFetch<
            App.Response<Record<string, any>>
        >("settings", {
            baseURL: config.apiUrl,
        });
        if (status.value === "idle") await execute();
        // console.log(data.value!.data);
        // return;

        if (error.value) {
            throw createError({
                statusCode: 500,
                message:
                    data.value?.data?.maintenance.content ||
                    "Hiện tại chúng tôi đang bảo trì hệ thống <br />Vui lòng truy cập lại sau",
                statusMessage: "Maintenance",
            });
        }

        let maintenance = data.value!.data!.is_maintenance;

        if (typeof maintenance === typeof "a") {
            maintenance = Number(maintenance) || 0;
        }

        const result: SettingModel = {
            maintenance: {
                enable: maintenance == 1 || false,
                content: data.value!.data!.maintenance_content,
            },
            site: {
                title: data.value!.data!.title_website || "Hiệp Khách VN",
                logo: data.value!.data!.site_logo || "",
                favicon: data.value!.data!.site_favicon || "/favicon.ico",
                emai: data.value!.data!.site_email || "",
                hotline: data.value!.data!.site_hotline || "",
                facebook: data.value!.data!.site_facebook,
                description:
                    data.value!.data!.site_description ||
                    "Hiệp Khách là game online kiếm hiệp 3D, được chuyển thể từ truyện tranh Hiệp Khách Giang Hồ nổi tiếng của Hàn Quốc với hàng triệu fan hâm mộ của Hàn Quốc.",
                keywords: data.value!.data!.site_keywords || "",
                url: data.value!.data!.site_url,
                image: data.value!.data!.site_image || "",
            },
            computer: data.value!.data!.computer,
            download_link: data.value!.data!.download_link,
            payments: data.value!.data!.payments,
            tickets: {
                price: Number(data.value!.data!.ticket_price) || 0,
                rate: Number(data.value!.data!.ticket_rate) || 0,
                rate_bonus: Number(data.value!.data!.ticket_rate_bonus) || 0,
                bonus: Number(data.value!.data!.ticket_bonus) || 0,
                enable_paid:
                    Number(data.value!.data!.enable_ticket_paid) === 1
                        ? true
                        : false || false,
            },
        };
        return result;
    }

    return {
        GetSettings,
    };
};
