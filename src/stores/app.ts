import create from 'zustand';

import { IAppStore } from 'stores/types';

export const appStore = create<IAppStore>(() => ({
  pageTitle: 'Welcome',
}));
