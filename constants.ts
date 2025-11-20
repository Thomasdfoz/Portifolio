import data from './resources/data.json';
import { AppData } from './types';

export const appData: AppData = data as AppData;
export const { profile, skills, projects, contact } = appData;
