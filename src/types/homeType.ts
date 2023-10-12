export type initialStateHome = {
    fromMaster: allFromMaster[] | null | string;
    message: string;
    loading: boolean;
}

export type allFromMaster = {
    id: number;
    f_id: string;
    member_id: number;
    p0_user: number | null;
    p0_time: Date | null;
    p1_user: number | null;
    p1_time: Date | null;
    p2_user: number | null;
    p2_time: Date | null;
    p3_user: number | null;
    p3_time: Date | null;
    p4_user: number | null;
    p4_time: Date | null;
    p5_user: number | null;
    p5_time: Date | null;
    p6_user: number | null;
    p6_time: Date | null;
    p7_user: number | null;
    p7_time: Date | null;
    p8_user: number | null;
    p8_time: Date | null;
    p9_user: number | null;
    p9_time: Date | null;
    p10_user: number | null;
    p10_time: Date | null;
    p11_user: number | null;
    p11_time: Date | null;
    p12_user: number | null;
    p12_time: Date | null;
    p13_user: number | null;
    p13_time: Date | null;
    p14_user: number | null;
    p14_time: Date | null;
    p15_user: number | null;
    p15_time: Date | null;
    p16_user: number | null;
    p16_time: Date | null;
    p17_user: number | null;
    p17_time: Date | null;
    p0_user_name: string | null;
    p1_user_name: string | null;
    p3_user_name: string | null;
    p4_user_name: string | null;
    p5_user_name: string | null;
    p6_user_name: string | null;
    p7_user_name: string | null;
    p8_user_name: string | null;
    p9_user_name: string | null;
    p10_user_name: string | null;
    p11_user_name: string | null;
    p12_user_name: string | null;
    p13_user_name: string | null;
    p14_user_name: string | null;
    p15_user_name: string | null;
    p16_user_name: string | null;
    p17_user_name: string | null;
    p18_user_name: string | null;
}

export type pageCard = {
    pageuser: number | null;
    pagetime: string | null;
    pageusername: string | null;
    i: number;
}