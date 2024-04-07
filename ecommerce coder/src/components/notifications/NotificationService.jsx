import { createContext, useState } from "react";
import Notification from "./Notification";

export const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {

    const [ notificationData, setNotificationData ] = useState({
        type: 'success',
        text: ''
    }); 

    const showNotification = (title, type, text) => {
        setNotificationData({ title, type, text })
        setTimeout(() => {
            setNotificationData(prev => ({ ...prev, text: ''}))
        }, 4000)
    }

    return (
        <NotificationContext.Provider value={{  showNotification }}>
            { notificationData.text && <Notification notificationData={ notificationData }/> }
            { children }
        </NotificationContext.Provider>
    )
}