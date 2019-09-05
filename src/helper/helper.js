import { topMenuItems } from '../common/leftSideMenu';
import { Colors } from '../common/colors';


export const ContentPerMenu = ({ currentMenu }) => {
  return topMenuItems.filter(menu => menu.id === currentMenu)[0].body;
};

export const ObjectGeneratorForCustomSelect = (id, value = '') => ({ id, value });

export const GetAfterUnderscore = str => str.substr(str.indexOf('_') + 1, str.length);

export const GetBeforeUnderscore = str => str.substr(0, str.indexOf('_'));

/**
 * CSS styling, with adefault theme
 * @param theme
 * @param addedThemes
 * @returns {any}
 */
export const themeStyler = (theme, addedThemes) => {
  const defaultTheme = {
    // Header styles
    headerStyle: {
      fontFamily: 'Quicksand',
      fontSize: 34,
      verticalAlign: 'middle',
      [theme.breakpoints.down('md')]: {
        fontSize: 24,
      },
      [theme.breakpoints.down('xs')]: {
        fontSize: 18,
        fontWeight: 'bold',
      }
    },
    subHeaderStyle: {
      fontSize: 24,
      fontWeight: 500,
      [theme.breakpoints.down('sm')]: {
        fontSize: 16,
      }
    },
    headerTitle: {
      display: 'flex',
      verticalAlign: 'middle',
      margin: '16px 0',
      alignItems: 'center',
      [theme.breakpoints.down('md')]: {
        margin: '14px 0',
      },
      [theme.breakpoints.down('sm')]: {
        margin: '12px 0',
      },
      [theme.breakpoints.down('xs')]: {
        margin: '8px 0',
      },
    },
    iconStyle: {
      fontSize: 18,
      marginRight: 8
    },

    // Flex spacing styles
    spaceBetween: {
      display: 'flex',
      justifyContent: 'space-between',
      verticalAlign: 'middle',
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column'
      }
    },
    spaceAround: {
      display: 'flex',
      verticalAlign: 'middle',
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column'
      }
    },

    // Width styles
    gridWrapper: {
      transition: '0.5s',
      [theme.breakpoints.down('sm')]: {
        width: 'unset',
      }
    },

    // Button styles
    buttonStyle: {
      marginLeft: 6,
      marginRight: 6,
      borderRadius: 50,
      backgroundColor: '#fff',
      border: '1px solid #ccc',
      boxShadow: '0px 3px 5px -1px rgba(0,0,0,0.2)',
      [theme.breakpoints.down('md')]: {
        marginTop: 12,
      }
    },
    successButtonStyle: {
      border: `1px solid ${Colors.success}`,
    },
    dangerButtonStyle: {
      border: `1px solid ${Colors.danger}`,
    },
    primaryButtonStyle: {
      border: `1px solid ${Colors.primary}`,
    },
    successStyle: {
      color: Colors.success,
    },
    primaryStyle: {
      color: Colors.primary,
    },
    dangerStyle: {
      color: Colors.danger,
    },

    // Color styles
    positive: {
      color: '#069697'
    },
    negative: {
      color: '#EA3D2F'
    },
    gray: {
      color: '#5e6366',
    },

  };
  return Object.assign({}, defaultTheme, addedThemes);
};
