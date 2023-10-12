import { userLogin } from "../../types/authType";
import { allFromMaster } from "../../types/homeType";

// localStorageUserLogin
export const storageUser: string = 'userLogin';
export const setLocalUser = (data: userLogin): void => {
    localStorage.setItem(storageUser, JSON.stringify(data));
};

// localStorageTokenUser
export const storageTokenUser: string = 'tokenAuth';
export const setLocalTokenUser = (data: string): void => {
    localStorage.setItem(storageTokenUser, data);
};

// localStorageQuestionnaire
export const storageQuestion: string = 'question';
export const setLocalQuestion = (data: allFromMaster[]): void => {
    localStorage.setItem(storageQuestion, JSON.stringify(data));
};

// localStorageQuestionnaireId
export const storageQuestionIdKey: string = 'questionId';
export const setLocalQuestionId = (data: string): void => {
    localStorage.setItem(storageQuestionIdKey, data);
};

// สร้างฟังก์ชันเพื่อล้างค่า localStorage ทั้งหมด
export const clearLocalStorageSingIn = (): void => {
    localStorage.removeItem('userLogin');
    localStorage.removeItem('tokenAuth');
    localStorage.removeItem('question');
    localStorage.removeItem('questionId');
};

// สร้างฟังก์ชันเพื่อล้างค่า localStorage question 
export const clearStorageQuestion = (): void => {
    localStorage.removeItem('question');
};