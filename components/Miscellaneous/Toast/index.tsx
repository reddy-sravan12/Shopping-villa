import { Dispatch, SetStateAction, useEffect, useState } from "react";
import classes from "./styles.module.css";

interface Toast {
  message: string;
  showToast: boolean;
  setShowToast: Dispatch<SetStateAction<boolean>>;
}

const Toast = ({ message, showToast, setShowToast }: Toast) => {
  useEffect(() => {
    if (showToast) {
      // Hide toast after 3 seconds
      const toastTimerId = setTimeout(() => {
        setShowToast(false);
      }, 3000); // Adjust the duration as needed

      // Cleanup timer on component unmount or showToast change
      return () => clearTimeout(toastTimerId);
    }
  }, [showToast, setShowToast]);

  return (
    <>
      <p className={`${classes.toast} ${showToast && classes.toastOpened}`}>
        {message}
      </p>
    </>
  );
};

export default Toast;
