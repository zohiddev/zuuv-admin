export interface IUserStatistics {
    alltime: string;
    last30days: string;
    lastday: string;
    lastweek: string;
}

export interface ISolvedAds {
    allads: string;
    other: string;
    unresolved: string;
    zuv: string;
}

export interface IPieStatistics {
    solvedAds?: ISolvedAds;
}

export type DataType = {
    type: string;
    value: number;
};
