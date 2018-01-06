import { StackNavigator } from "react-navigation";

import DoctorIndexScreen from '../screens/Doctor/DoctorIndexScreen';
import DoctorDetailScreen from '../screens/Doctor/DoctorDetailScreen';

const config = {
    headerMode: 'none',
    mode: 'modal',
};

const DoctorNavigation = StackNavigator({
    "doctor.index": { screen: DoctorIndexScreen },
    "doctor.detail": { screen: DoctorDetailScreen },
}, config);

export default DoctorNavigation;