import { useCallback } from "react";
import { useEffect } from "react";
import styles from "./Notification.module.css";
import { toastPropertiesType } from '../assets/types';

const Notification = ({ toastlist, position, setList }: {toastlist: toastPropertiesType[], position: string, setList: React.Dispatch<React.SetStateAction<never[]>>}) => {
  const deleteToast = useCallback(
    (id: number) => {
      const toastListItem = toastlist.filter((e) => e.id !== id);
      setList(toastListItem);
    },
    [toastlist, setList]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      if (toastlist.length) {
        deleteToast(toastlist[0].id);
      }
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [toastlist, deleteToast]);

  return (
    <div className={`${styles.container} ${styles[position]}`}>
      {toastlist.map((toast: toastPropertiesType, i: number) => (
        <div
          key={i}
          className={`${styles.notification} ${styles.toast} ${styles[position]}`}
          style={{ backgroundColor: toast.backgroundColor }}
        >
          <button onClick={() => deleteToast(toast.id)}>X</button>
          <div>
            <p className={styles.title}>{toast.title}</p>
            <p className={styles.description}>{toast.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Notification;
