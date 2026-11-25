export type LanguageType =
  | 'en' // English
  | 'fil'; // Filipino (standardized Tagalog)

export interface NavigationItem {
  label: string;
  href: string;
  translationKey?: string;
  children?: NavigationItem[];
}
