import React, { useState } from "react";
import { Dialog, DialogContent } from "@mui/material";
import { Separator } from "@/components/ui/Separator";

export type CommentDialogProps = {
    open: boolean;
    status: string;
    onClose: () => void;
};

export default function CommentDialog({ open, status, onClose }: CommentDialogProps) {
    const [isChecked, setChecked] = useState(false);

    const toggleCheckbox = () => {
      setChecked(!isChecked);
    };

    return (
        <>
        <Dialog open={open} onClose={onClose}>
            <DialogContent className="w-96 h-96">
                <div className="m-1 w-full flex flex-col items-top justify-center">
                    <p className="text-lg font-bold">分配機台</p>
                </div>
                <Separator />
                <label className="flex items-center cursor-pointer">
                <input
                    type="checkbox"
                    className="hidden"
                    checked={isChecked}
                    onChange={toggleCheckbox}
                />
                <div className="w-1/2 h-1/2 border border-gray-400 rounded-md flex items-center justify-center bg-white">
                    {isChecked && (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-4 h-4 text-blue-500"
                    >
                        <path
                        fillRule="evenodd"
                        d="M9 19a1 1 0 0 1-1-1V6a1 1 0 1 1 2 0v12a1 1 0 0 1-1 1zM3 9a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1zM5 3a1 1 0 0 1 .293-.707l7-7a1 1 0 1 1 1.414 1.414L6.414 4l6.293 6.293a1 1 0 0 1-1.414 1.414L5 6.414A1 1 0 0 1 5 5V3z"
                        />
                    </svg>
                    )}
                </div>
                </label>
            </DialogContent>
        </Dialog>
        </>
    )
}