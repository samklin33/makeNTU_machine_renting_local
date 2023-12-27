"use client"
import { forwardRef } from "react"

type InputProps = {
  placeHolder?: string,
  editable: boolean,
  value?: string,
  type?: string,
  onChange?: (value: string) => void
}

const InputArea = forwardRef<HTMLInputElement, InputProps>(
  ({placeHolder, editable, value, type = "text", onChange}, ref) => {
    return(
      <>
        {editable?
          <input
            className="p-1 border-2 border-black text-gray-800 rounded-lg focus:outline-0"
            ref={ref}
            type={type}
            value={value}
            placeholder={placeHolder}
            onChange={(e)=>onChange?.(e.target.value)}
          />:
          <input 
            className="p-1 border-2 border-black text-gray-800 rounded-lg focus:outline-0"
            ref={ref}
            type="text"
            value={value}
            readOnly
            placeholder={placeHolder}
            onChange={(e)=>onChange?.(e.target.value)}
          />
        }
      </>
    )

  }
)

InputArea.displayName = "InputArea";

export default InputArea;