interface InputBarProps {
  isError: boolean;
  yurl: string;
  handleOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: () => void;
}

const InputBar = (props: InputBarProps) => {
  const { isError, yurl, handleOnChange, handleSubmit } = props;
  return (
    <div className="rounded-xl bg-primary-light w-2/3 h-auto flex justify-between">
      <div className="flex items-center px-3">
        <div className="rounded-lg w-7 h-7 flex flex-row p-1 box-border items-center justify-center">
          <img
            alt=""
            className="relative w-5 h-5"
            src="/url.svg"
          />
        </div>
        <img
          alt=""
          title="Invalid URL"
          className={`w-4 h-4 cursor-pointer ${isError ? '' : 'hidden'}`}
          src="/warningr3.svg"
        import React from 'react';
        import { Input, Icon } from 'nextui';
        
        interface InputBarProps {
          isError: boolean;
          yurl: string;
          handleOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
          handleSubmit: () => void;
        }
        
        const InputBar = (props: InputBarProps) => {
          const { isError, yurl, handleOnChange, handleSubmit } = props;
          return (
            <div className="rounded-xl bg-primary-light w-2/3 h-auto flex justify-between">
              <div className="flex items-center px-3">
                <div className="rounded-lg w-7 h-7 flex flex-row p-1 box-border items-center justify-center">
                  <Icon name="url" />
                </div>
                {isError && (
                  <img
                    alt=""
                    title="Invalid URL"
                    className="w-4 h-4 cursor-pointer"
                    src="/warningr3.svg"
                  />
                )}
              </div>
              <Input
                value={yurl}
                placeholder="Type youtube URL"
                onChange={handleOnChange}
                onKeyUp={(e) => {
                  if (e.code === 'Enter') {
                    handleSubmit();
                  }
                }}
                className="bg-transparent h-10 flex-1 outline-none"
              />
              <div className="flex flex-row items-center justify-start gap-3">
                <div className="rounded-lg w-10 h-7 flex flex-row p-1 box-border items-center justify-center">
                  <Icon name="paperplaneright" />
                </div>
              </div>
            </div>
          )
        };
        
        export default InputBar;