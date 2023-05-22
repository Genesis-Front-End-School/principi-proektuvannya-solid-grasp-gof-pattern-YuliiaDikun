import { ICoursesItem } from "../interfaces/Courses";
declare class WiseyAPI {
    private baseURL;
    constructor();
    setToken(token: string): void;
    getToken(): Promise<void>;
    getCourses(): Promise<{
        courses: ICoursesItem[];
    } | undefined>;
    getCourseById(id: string): Promise<ICoursesItem | undefined>;
}
declare const wiseyAPI: WiseyAPI;
export default wiseyAPI;
