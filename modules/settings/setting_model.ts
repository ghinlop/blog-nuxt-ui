interface SettingModel {
    maintenance: {
        enable: boolean;
        content: string | undefined;
    };
    site: {
        title?: string;
        logo?: string;
        favicon?: string;
        emai?: string;
        hotline?: string;
        facebook?: string;
        description?: string;
        keywords?: string;
        url?: string;
        image?: string;
    };
    computer: _ComputerInfo[];
    download_link: _LinkDownLoad[];
    payments: BankInfo[];
    tickets: Ticket;
}

interface Ticket {
    price: number | string | undefined; // Giá mua ticket
    rate: number | string | undefined; // Nhận 1 ticket khi mua đặt 1 vòng điều kiện ví dự: 50k cash/ticket
    rate_bonus: number | string | undefined; // Số ticket_bonus tặng kèm đặt điều kiện này
    bonus: number | string | undefined;
    enable_paid: boolean | number | string | undefined;
}

interface _LinkDownLoad {
    image?: string | undefined | null;
    label?: string;
    link?: string | undefined | null;
}

interface _ComputerInfo {
    label: string;
    description: string;
}

interface BankInfo {
    id: number;
    bank_name: string;
    bank_account_name: string;
    bank_account: string;
    label: string;
    image: string;
    bank_receiver: string;
    qr_content: string;
    description: string;
    replace_key: string;
    bank_qrcode: string;
}
