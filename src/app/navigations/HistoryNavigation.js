import { StackNavigator } from "react-navigation";

import HistoryIndexScreen from './../screens/History/HistoryIndexScreen';
import HistoryDetailScreen from './../screens/History/HistoryDetailScreen';

const config = {
    headerMode: 'none',
    mode: 'modal',
};

const HistoryNavigation = StackNavigator({
    "history.index": { screen: HistoryIndexScreen },
    "history.detail": { screen: HistoryDetailScreen },
}, config);

export default HistoryNavigation;
