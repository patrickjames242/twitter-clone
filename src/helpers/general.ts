

export const appRoutes = {
    home: '/',
    search: '/search',
    notifications: '/notifications',
    messages: '/messages',
    bookmarks: '/bookmarks',
    profile: '/profile',
}

export enum NavLinkTypes {
    home,
    search,
    notifications,
    messages,
    bookmarks,
    profile,
};

export const allNavLinkTypes = [
    NavLinkTypes.home,
    NavLinkTypes.search,
    NavLinkTypes.notifications,
    NavLinkTypes.messages,
    NavLinkTypes.bookmarks,
    NavLinkTypes.profile,
]

export function routeForNavLinkType(navLinkType: NavLinkTypes) {
    switch (navLinkType) {
        case NavLinkTypes.home: return appRoutes.home;
        case NavLinkTypes.search: return appRoutes.search;
        case NavLinkTypes.notifications: return appRoutes.notifications;
        case NavLinkTypes.messages: return appRoutes.messages;
        case NavLinkTypes.bookmarks: return appRoutes.bookmarks;
        case NavLinkTypes.profile: return appRoutes.profile;
    }
}

export function navLinkTypeForRoute(route: string): NavLinkTypes | null {
    switch (route) {
        case appRoutes.home: return NavLinkTypes.home;
        case appRoutes.search: return NavLinkTypes.search;
        case appRoutes.notifications: return NavLinkTypes.notifications;
        case appRoutes.messages: return NavLinkTypes.messages;
        case appRoutes.bookmarks: return NavLinkTypes.bookmarks;
        case appRoutes.profile: return NavLinkTypes.profile;
        default: return null;
    }
}

export function titleForNavLinkType(navLinkType: NavLinkTypes) {
    switch (navLinkType) {
        case NavLinkTypes.home: return 'Home';
        case NavLinkTypes.search: return 'Search';
        case NavLinkTypes.notifications: return 'Notifications';
        case NavLinkTypes.messages: return 'Messages';
        case NavLinkTypes.bookmarks: return 'Bookmarks';
        case NavLinkTypes.profile: return 'Profile';
    }
}



export interface Tweet {
    authorName: string;
    authorUserName: string;
    authorImage: string;
    text: string;
    imageUrl?: string;
    time: string;
}

const tweetsCollection: Tweet[] = [
    {
        authorImage: '/assets/lawrenceKrauss.jpg',
        authorName: 'Lawrence M. Krauss',
        authorUserName: 'LKrauss1',
        text: 'Hi. Mid February and hoping to get books in the mail to congress by beginning of March. Please consider donating to help them follow the science.',
        time: '38m',
    },
    {
        authorImage: '/assets/Tom_Nichols.jpg',
        authorName: 'Tom Nichols',
        authorUserName: 'RadioFreeTom',
        text: 'So, promised you all a more uplifting story of something that happened today in Boston. I was in an old building with a business on each floor, with a very narrow staircase. An old lady was coming up the stairs. We were masked but it was very small and so I quickly backed up.',
        time: '1h',
    },
    {
        authorImage: '/assets/jasper_ward.jpg',
        authorName: 'Jasper Williams-Ward',
        authorUserName: 'jasperward94',
        text: 'The World Health Organization has promised the government "that in a week or two we will be getting about 100,000 doses of AstraZeneca coming into the country", according to Minister of Health Renward Wells.',
        time: '2h',
    },
    {
        authorImage: '/assets/darkmatter2525.png',
        authorName: 'DarkMatter2525',
        authorUserName: 'DarkMatter2525',
        text: 'When two ideologically different groups use the same tactics, but for different reasons, it\'s not hypocrisy to support one but not the other. The number of people who don\'t comprehend this simple fact is staggering.',
        time: '7h',
    },
    {
        authorImage: '/assets/ellen-image.jpg',
        authorName: 'Ellen DeGeneres',
        authorUserName: 'TheEllenShow',
        text: 'Tonight is #TheMaskedDancer finale! Don’t miss it, because I’ll have the winner on my show tomorrow.',
        time: '9h',
    },
]


export function getRandomTweets(number: number) {
    let index = 0;

    const tweetsToReturn: Tweet[] = [];

    while (index < number){
        const tweetsIndex = index % (tweetsCollection.length);
        tweetsToReturn.push(tweetsCollection[tweetsIndex]);
        index++;
    }
    return tweetsToReturn;
}

