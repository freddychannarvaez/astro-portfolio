import english from './en.json';
import spanish from './es.json';
import french from './fr.json';

const LANG = {
	ENGLISH: 'en',
	SPANISH: 'es',
  FRENCH: 'fr',
};

export const getI18N = ({
	currentLocale = 'en',
}: {
	currentLocale: string | undefined;
}) => {
	if (currentLocale === LANG.SPANISH) return {...english, ...spanish};
	if (currentLocale === LANG.FRENCH) return {...english, ...french};
	return english;
};