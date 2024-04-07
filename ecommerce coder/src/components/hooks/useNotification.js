import { useContext } from "react"
import { NotificationContext } from "../notifications/NotificationService"

export const useNotification = () => {
    return useContext(NotificationContext)
}