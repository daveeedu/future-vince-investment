// Application constants

export const USER_ROLES = {
  SUPER_ADMIN: 'SuperAdmin',
  USER: 'User',
};

export const ACTIVITY_STATUS = {
  AWAITING: 0,
  CONFIRMED: 1,
  DECLINED: 2,
};

export const STORAGE_KEYS = {
  TOKEN: 'Elon/token',
  USER: 'Elon/user',
};

export const INVESTMENT_PLANS = [
  {
    id: 2,
    title: 'Silver Plan',
    roi: '21%',
    min: '$500',
    max: '$4999',
    days: 'ROI after 15 Days',
  },
  {
    id: 3,
    title: 'Diamond Plan',
    roi: '30%',
    min: '$5000',
    max: '$9999',
    days: 'ROI after 15 Days',
  },
  {
    id: 4,
    title: 'Golden Plan',
    roi: '42%',
    min: '$10000',
    max: '$10000000',
    days: 'ROI after 15 Days',
  },
];

export default {
  USER_ROLES,
  ACTIVITY_STATUS,
  STORAGE_KEYS,
  INVESTMENT_PLANS,
};
