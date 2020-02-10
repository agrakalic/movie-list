import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { resetNotification } from '../../actions/';

const Notification = ({ notification, resetNotification }) => {  

  const [notificationClassNames, setNotificationClassNames] = useState('notification')

  useEffect(() => {
    if (notification !== '') {
      setNotificationClassNames('notification notification__active')
      setTimeout(()=>{
        setNotificationClassNames('notification');        
      },2000);
      setTimeout(()=>{
        resetNotification();
      },3000);      
    }
  },[notification])

  return (
    <div className={notificationClassNames}>     
      {notification}
    </div>
  )

}

const mapStateToProps = state => {
  return {
    notification: state.notification
  }
}

export default connect(mapStateToProps, { resetNotification })(Notification);


