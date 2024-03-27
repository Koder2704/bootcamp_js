import {
    TfiBarChart,
    TfiCalendar,
    TfiFile,
    TfiHome,
    TfiIdBadge,
    TfiLayoutGrid2,
    TfiPanel,
    TfiSettings,
    TfiTag,
    TfiViewList,
} from 'react-icons/tfi';


export const menuItems = [
    {
        title: 'Overview',
        Icon: TfiHome
    },
    {
        title: 'Team Insights',
        Icon: TfiIdBadge
    },
    {
        title: 'Engagement',
        Icon: TfiViewList
    },
    {
        title: 'LeaderBoard',
        Icon: TfiBarChart
    },
    {
        title: 'Calendar Events',
        Icon: TfiCalendar
    },
    {
        title: 'Insights',
        Icon: TfiPanel
    }, {
        title: 'Spreadsheet',
        Icon: TfiFile
    },
    {
        title: 'Apps',
        Icon: TfiLayoutGrid2
    },
    {
        title: 'Properties',
        Icon: TfiTag
    },
    {
        title: 'Settings',
        Icon: TfiSettings
    },
];