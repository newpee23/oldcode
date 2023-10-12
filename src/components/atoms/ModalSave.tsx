import React from 'react';
interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    handleSubmit: () => Promise<void>;
}

const ModalSave: React.FC<ModalProps> = ({ isOpen, onClose, handleSubmit }) => {
    if (!isOpen) {
        return null;
    }
    const handleYesClick = async () => {
        await handleSubmit();
        onClose();
    };
    return (
        <div className="fixed top-0 left-0 right-0 z-50 p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-screen bg-gray-700 bg-opacity-60">
            <div className="flex justify-center items-center h-full">
                <div className="bg-white rounded-lg shadow dark:bg-gray-700">
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <button type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-red-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" onClick={onClose}>
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                        <div className="p-6 text-center w-full sml:w-[450px]">
                            <svg className="mx-auto mb-4 card-icon-bg-dont-save w-12 h-12" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                            </svg>
                            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                                คุณต้องการบันทึกข้อมูลใช่หรือไม่?
                            </h3>
                            <button type="button" className="text-white bg-violet-500 hover:bg-violet-700 focus:ring-4 focus:outline-none focus:ring-violet-300 dark:focus:ring-violet-700 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2" onClick={handleYesClick}>
                                ใช่, บันทึกข้อมูล
                            </button>
                            <button type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600" onClick={onClose}>
                                ไม่, ปิดแถบบันทึก
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalSave;
