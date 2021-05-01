import { useSelector } from 'react-redux';
import './Alert.css';

const Alert = () => {
  const alerts = useSelector((state) => state.alert);

  return alerts.map((alert) => (
    <div key={alert.id} className={`sticky alert alert-${alert.alertType}`}>
      {alert.msg}
    </div>
  ));
};

export default Alert;
