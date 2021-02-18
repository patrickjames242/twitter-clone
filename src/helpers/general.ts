

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

export function navLinkTypeForRoute(route: string): NavLinkTypes | null{
    switch (route){
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

