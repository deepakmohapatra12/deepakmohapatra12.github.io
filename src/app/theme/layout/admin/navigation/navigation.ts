import { Injectable } from '@angular/core';

export interface NavigationItem {
  id: string;
  title: string;
  type: 'item' | 'collapse' | 'group';
  icon?: string;
  url?: string;
  classes?: string;
  external?: boolean;
  target?: boolean;
  breadcrumbs?: boolean;
  children?: Navigation[];
}

export interface Navigation extends NavigationItem {
  children?: NavigationItem[];
}
const NavigationItems = [
  {
    id: 'dashboard',
    title: 'Dashboard',
    type: 'group',
    icon: 'icon-navigation',
    children: [
      {
        id: 'dashboard',
        title: 'Monitoring',
        type: 'item',
        classes: 'nav-item',
        url: '/dashboard',
        icon: 'ti ti-dashboard',
        breadcrumbs: false
      },
      {
        id: 'reports',
        title: 'Reports',
        type: 'item',
        url: '/reports',
        classes: 'nav-item',
        icon: 'ti ti-brand-chrome',
        breadcrumbs: false
      },
    ]
  },
  {
    id: 'surveys',
    title: 'Surveys',
    type: 'group',
    icon: 'icon-navigation',
    children: [
      {
        id: 'add-survey',
        title: 'Add Survey',
        type: 'item',
        classes: 'nav-item',
        url: '/add-survey',
        icon: 'ti ti-dashboard',
        breadcrumbs: false
      },
      {
        id: 'my-survey',
        title: 'My Surveys',
        type: 'item',
        url: '/my-survey',
        classes: 'nav-item',
        icon: 'ti ti-brand-chrome',
        breadcrumbs: false
      },
      {
        id: 'customers',
        title: 'Customers',
        type: 'item',
        url: '/customers',
        classes: 'nav-item',
        icon: 'ti ti-brand-chrome',
        breadcrumbs: false
      },
    ]
  },
  {
    id: 'usermanagement',
    title: 'User Management',
    type: 'group',
    icon: 'icon-navigation',
    children: [
      {
        id: 'users',
        title: 'Users',
        type: 'item',
        classes: 'nav-item',
        url: '/users',
        icon: 'ti ti-dashboard',
        breadcrumbs: false
      },
      {
        id: 'teams',
        title: 'Teams',
        type: 'item',
        url: '/teams',
        classes: 'nav-item',
        icon: 'ti ti-brand-chrome',
        breadcrumbs: false
      },
      {
        id: 'roles',
        title: 'Roles',
        type: 'item',
        url: '/roles',
        classes: 'nav-item',
        icon: 'ti ti-brand-chrome',
        breadcrumbs: false
      },
    ]
  },
  {
    id: 'emailsetting',
    title: 'Email settings',
    type: 'group',
    icon: 'icon-navigation',
    children: [
      {
        id: 'email',
        title: 'Email',
        type: 'item',
        classes: 'nav-item',
        url: '/email-group',
        icon: 'ti ti-dashboard',
        breadcrumbs: false
      },
      {
        id: 'surveythrottling',
        title: 'Survey Throttling',
        type: 'item',
        url: '/survey-throttling',
        classes: 'nav-item',
        icon: 'ti ti-brand-chrome',
        breadcrumbs: false
      }
    ]
  },
  // {
  //   id: 'page',
  //   title: 'Pages',
  //   type: 'group',
  //   icon: 'icon-navigation',
  //   children: [
  //     {
  //       id: 'Authentication',
  //       title: 'Authentication',
  //       type: 'collapse',
  //       icon: 'ti ti-key',
  //       children: [
  //         {
  //           id: 'login',
  //           title: 'Login',
  //           type: 'item',
  //           url: '/guest/login',
  //           target: true,
  //           breadcrumbs: false
  //         },
  //         {
  //           id: 'register',
  //           title: 'Register',
  //           type: 'item',
  //           url: '/guest/register',
  //           target: true,
  //           breadcrumbs: false
  //         }
  //       ]
  //     }
  //   ]
  // },
  // {
  //   id: 'elements',
  //   title: 'Elements',
  //   type: 'group',
  //   icon: 'icon-navigation',
  //   children: [
  //     {
  //       id: 'typography',
  //       title: 'Typography',
  //       type: 'item',
  //       classes: 'nav-item',
  //       url: '/typography',
  //       icon: 'ti ti-typography'
  //     },
  //     {
  //       id: 'color',
  //       title: 'Colors',
  //       type: 'item',
  //       classes: 'nav-item',
  //       url: '/color',
  //       icon: 'ti ti-brush'
  //     },
  //     {
  //       id: 'tabler',
  //       title: 'Tabler',
  //       type: 'item',
  //       classes: 'nav-item',
  //       url: 'https://tabler-icons.io/',
  //       icon: 'ti ti-plant-2',
  //       target: true,
  //       external: true
  //     }
  //   ]
  // },
  // {
  //   id: 'other',
  //   title: 'Other',
  //   type: 'group',
  //   icon: 'icon-navigation',
  //   children: [
  //     // {
  //     //   id: 'sample-page',
  //     //   title: 'Sample Page',
  //     //   type: 'item',
  //     //   url: '/sample-page',
  //     //   classes: 'nav-item',
  //     //   icon: 'ti ti-brand-chrome'
  //     // },
  //     {
  //       id: 'document',
  //       title: 'Document',
  //       type: 'item',
  //       classes: 'nav-item',
  //       url: 'https://codedthemes.gitbook.io/berry-angular/',
  //       icon: 'ti ti-vocabulary',
  //       target: true,
  //       external: true
  //     }
  //   ]
  // }
];

@Injectable()
export class NavigationItem {
  get() {
    return NavigationItems;
  }
}
