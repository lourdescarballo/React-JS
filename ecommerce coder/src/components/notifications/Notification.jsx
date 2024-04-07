const Notification = ({ notificationData }) => {

      const notificationClass = {
        success: 'text-bg-success p-3',
        error: 'text-bg-danger p-3',
        warning: 'text-bg-warning p-3',
        info: 'text-bg-primary p-3'
      }
  
      const notificationStyle = {
        position: 'fixed',
        bottom: 30,
        right: 30,
        padding: 20,
        borderRadius: 10,
        zIndex: 99,
        border: '1px solid #fff'
      }

    return (
      <div style={ notificationStyle } className={ notificationClass[notificationData.type] }>
        <h3 style={{ marginLeft: '20px' }}>{ notificationData.title }</h3>
        { notificationData.text }
      </div>
      )     
}

export default Notification;