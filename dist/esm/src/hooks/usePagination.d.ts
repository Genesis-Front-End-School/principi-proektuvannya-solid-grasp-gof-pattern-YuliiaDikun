import { IPaginationPropsHook } from "../interfaces/Pagination";
export declare const DOTS = "...";
export declare const usePagination: ({ totalCount, pageSize, siblingCount, currentPage, }: IPaginationPropsHook) => (string | number)[] | undefined;
