/**
 * PEARSON PROPRIETARY AND CONFIDENTIAL INFORMATION SUBJECT TO NDA
 * Copyright © 2017 Pearson Education, Inc.
 * All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Pearson Education, Inc.  The intellectual and technical concepts contained
 * herein are proprietary to Pearson Education, Inc. and may be covered by U.S. and Foreign Patents,
 * patent applications, and are protected by trade secret or copyright law.
 * Dissemination of this information, reproduction of this material, and copying or distribution of this software
 * is strictly forbidden unless prior written permission is obtained
 * from Pearson Education, Inc.
 * */

/**
 * Definition of styles for the Pearson material UI theme.
 *
 * @author Hari Gangadharan and Rajkumar Thirugnanam
 */
import mixins from '../Styles/mixins.scss';


const color = {
  primary: mixins.whiteBackGround,
  secondary: mixins.secondary,
  tabButton: mixins.title,
  inProgressIcon: mixins.inProgressIcon,
  greyIcon: mixins.greyIcon,
  completedIcon: mixins.completedIcon,
  listTermColor: mixins.AssignmentDate,
  listItemBorder: mixins.moreInfoBorder,
  raisedButtonColor: mixins.raisedButtonColor,
  raisedButtonHoverColor: mixins.raisedButtonHoverColor,
  progressForeColor: mixins.progressForeColor,
  progressBackColor: mixins.progressBackColor,
  progressBackColorIndividual: mixins.progressBackColorIndividual,
  progressBorderColor: mixins.border,
  bannerButtonColor: mixins.bannerButtonColor,
  bannerButtonLabel: mixins.bannerButtonLabel,
  cancelButton: mixins.cancelButton,
  tdxStatusStart: mixins.quizStart,
  paperBorder: mixins.paperBorder,
  paperShadow: mixins.paperShadow,
  glossaryPopupBorder: mixins.glossaryPopupBorderColor,
  glossaryPopupFont: mixins.glossaryPopupFontColor,
  playerSelectionColor: mixins.playerSelectionColor,
  playerTrackColor: mixins.playerTrackColor

};


const font = {
  normalFontSize: 14,
  largeFontSize: 16,
  extraLargeFontSize: 18,
  titleLargeFontSize: 24,
  fontFamily: mixins.fontFamily,
  fontWeightNormal: 'normal',
  fontWeightMedium: mixins.fontWeightMedium,
  fontWeightLarge: mixins.fontWeightLarge
};
const opacity = {
  progressBar: '#00000019',
  paper: '#00000033'
};

const border = {
  style: 'solid',
  width: '1px'
};
const prevnext = {
  height: '12px',
  width: '24px',
  margin: '9px 0 0 0'
};

const pearsonTheme = {
  fontFamily: font.fontFamily,
  font: {
    normalFontSize: font.normalFontSize,
    largeFontSize: font.largeFontSize,
    extraLargeFontSize: font.extraLargeFontSize,
    titleLargeFontSize: font.titleLargeFontSize,
    fontWeightNormal: font.fontWeightNormal,
    fontWeightMedium: font.fontWeightMedium,
    fontWeightLarge: font.fontWeightLarge,
    fontStyle: font.fontWeightNormal,
    fontStretch: font.fontWeightNormal
  },
  colors: {
    primaryBackground: color.primary,
    inProgressIcon: color.inProgressIcon,
    greyIcon: color.greyIcon,
    completedIcon: color.completedIcon,
    pendingIcon: color.listTermColor,
    raisedButtonColor: color.raisedButtonColor,
    raisedButtonHoverColor: color.raisedButtonHoverColor,
    progressForeColor: color.progressForeColor,
    progressBackColor: color.progressBackColor,
    progressBorderColor: color.progressBorderColor,
    tabButton: color.tabButton,
    bannerButtonLabel: color.bannerButtonLabel
  },
  cards: {
    default: {
      borderRadius: 4,
      boxShadow: `0 2px 4px 0 ${opacity.paper}`
    }
  },
  popover: {
    primary: {
      width: 294,
      borderRadius: '4px',
      backgroundColor: color.bannerButtonLabel,
      boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.4)',
      marginTop: '10px'
    }
  },
  buttons: {
    raised: {
      primary: {
        buttonStyle: {
          borderRadius: '2px',
          backgroundColor: color.raisedButtonColor,
          fontWeight: font.fontWeightLarge
        },
        labelStyle: {
          textTransform: 'none',
          letterSpacing: '1px',
          borderRadius: '2px',
          backgroundColor: color.raisedButtonColor,
          color: color.primary,
          fontWeight: font.fontWeightMedium
        }
      }
    },
    tdxStatus: {
      start: {
        width: '181px',
        height: '44px',
        borderRadius: '22px',
        backgroundColor: color.tdxStatusStart
      },
      review: {
        width: '181px',
        height: '44px',
        borderRadius: '22px',
        backgroundColor: color.raisedButtonColor
      },
      labelStart: {
        textTransform: 'none',
        fontSize: font.largeFontSize,
        fontWeight: font.fontWeightLarge,
        fontFamily: font.fontFamily,
        top: '12px'
      },
      labelReview: {
        textTransform: 'none',
        fontSize: font.largeFontSize,
        fontWeight: font.fontWeightLarge,
        fontFamily: font.fontFamily,
        color: color.primary,
        top: '12px'
      }
    },
    primary: {
      fontSize: font.normalFontSize,
      fontWeight: font.fontWeightNormal,
      fontStyle: font.fontWeightNormal,
      fontStretch: font.fontWeightNormal,
      textAlign: 'center',
      fontFamily: font.fontFamily,
      minWidth: 'auto'
    },
    nextBtn: {
      float: 'right',
      height: prevnext.height,
      width: prevnext.width,
      margin: prevnext.margin
    },
    prevBtn: {
      float: 'left',
      height: prevnext.height,
      width: prevnext.width,
      margin: prevnext.margin
    },
    labelStyle: {
      textTransform: 'none',
      letterSpacing: '1px',
      fontSize: font.extraLargeFontSize
    },
    iconStyle: {
      width: '20px',
      height: '20px',
      padding: '0',
      verticalAlign: 'sub'
    }
  },
  defaultButtonLabelStyle: {
    textTransform: 'capitalize',
    cursor: 'pointer',
    minWidth: '160px',
    borderRadius: '100px',
    border: `${mixins.defaultButtonBorder}`,
    padding: '7px 20px',
    fontFamily: mixins.fontFamily,
    fontSize: '14px',
    fontWeight: '600',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 1.29,
    letterSpacing: 'normal',
    textAlign: 'center',
    color: `${mixins.defaultButtonTextColor}`,
    margin: 0
  },
  progress: {
    material: {
      style: {
        color: color.raisedButtonColor,
        zIndex: 1000,
        margin: '150px 48%'
      }
    },
    style: {
      height: 10,
      backgroundColor: color.progressBackColor,
      borderRadius: '4px',
      boxShadow: `inset 1px 1px 4px 0 ${opacity.progressBar}`,
      individual: {
        height: 10,
        backgroundColor: color.progressBackColorIndividual,
        borderRadius: '4px',
        boxShadow: `inset 1px 1px 4px 0 ${opacity.progressBar}`
      }
    }
  },
  paper: {
    borderRadius: 4,
    borderLeft: `4px solid ${color.paperBorder}`,
    boxShadow: `0 2px 4px 0 ${opacity.paper}`
  },
  flatBtnlabel: {
    paddingLeft: '2px',
    paddingRight: '6px',
    textTransform: 'capitalize',
    fontWeight: 400,
    fontFamily: font.fontFamily
  },
  btnRoot: {
    padding: 0
  },
  circularProgress: {
    transform: 'rotate(-90deg)',
    color: color.progressForeColor
  },
  linearProgressColorPrimary: {
    backgroundColor: color.progressForeColor
  },
  linearProgressBarColorPrimary: {
    backgroundColor: color.progressForeColor
  },
  courseCard: {
    iconButton: {
      height: 40,
      padding: 0
    },
    cardText: {
      padding: 0
    }
  },
  inactiveButton: {
    width: 'auto',
    height: '44px',
    borderRadius: '1px',
    borderColor: color.raisedButtonColor,
    backgroundColor: color.primary,
    borderStyle: border.style,
    borderWidth: border.width
  },
  activeButton: {
    width: 'auto',
    height: '44px',
    borderRadius: '2px',
    backgroundColor: color.raisedButtonColor,
    fontWeight: font.fontWeightLarge,
    largeButton: {
      width: '100%'
    }
  },
  studyTools: {
    primaryText: {
      width: 'auto',
      height: '19px',
      fontSize: font.normalFontSize,
      textAlign: 'left',
      color: color.listTermColor,
      fontFamily: font.fontFamily,
      display: 'block'
    },
    secondaryText: {
      width: '93%',
      height: '30px',
      fontSize: font.titleLargeFontSize,
      lineHeight: '1.25',
      textAlign: 'left',
      color: color.tabButton,
      display: 'inline-block',
      textOverflow: 'none',
      overflow: 'inherit',
      whiteSpace: 'normal',
      fontFamily: font.fontFamily
    },
    innerDiv: {
      marginLeft: '0px',
      paddingTop: '23px',
      paddingRight: '38px',
      paddingBottom: '23px',
      paddingLeft: '40px'
    },
    listItemStyle: {
      width: '100%',
      backgroundColor: color.primary,
      borderColor: color.listItemBorder,
      marginTop: '10px',
      borderStyle: border.style,
      borderWidth: border.width

    },
    listStyle: {
      width: '100%',
      marginBottom: '20px'
    },
    deckButton: {
      height: '22px',
      lineHeight: '1.22',
      textAlign: 'left',
      color: color.listTermColor,
      marginBottom: '17px',
      paddingLeftTop: '0px',
      hoverColor: 'none'
    },
    deckButtonStyle: {
      paddingLeft: '10px',
      fontSize: font.extraLargeFontSize,
      textTransform: 'none',
      color: color.listTermColor
    }
  },
  assignments: {
    circleIcon: {
      height: 15,
      strokeWidth: 2
    },
    chapterList: {
      height: 'auto',
      paddingTop: '25px',
      paddingBottom: '25px',
      alignItems: 'baseline'
    }
  },
  banner: {
    bannerButton: {
      style: {
        minWidth: '64px',
        margin: '5px 18px 7px',
        position: 'absolute',
        right: '0px',
        boxShadow: '0 2px 2px #b5b5b5',
        height: 'auto',
        lineHeight: 'initial',
        padding: '8px 0',
        fontFamily: 'Roboto, sans-serif'

      },
      labelStyle: {
        color: color.bannerButtonLabel,
        letterSpacing: '0.5px'
      },
      backgroundColor: color.bannerButtonColor
    }
  },
  glossaryPopupStyle: {
    popupComponentStyle: {
      fontFamily: font.fontFamily,
      padding: '10px',
      color: color.glossaryPopupFont,
      fontSize: '1.08em',
      fontWeight: '400',
      lineHeight: '1.9em',
      letterSpacing: '.01em',
      margin: '0px',
      height: 'auto'
    },
    popupWidth: {
      width: '400px',
      border: `1px solid ${color.glossaryPopupBorder}`,
      borderRadius: '5px'
    }
  },
  instructorMessagePopupStyle: {
    dialogPaperRoot: {
      margin: 0,
      width: 600,
      height: 250,
      fontFamily: font.fontFamily
    },
    dialogTitle: {
      fontSize: font.normalFontSize,
      fontWeight: font.fontWeightLarge,
      lineHeight: '1.14',
      padding: '0 28px 13px',
      color: color.tabButton
    },
    dialogContent: {
      padding: 0
    },
    dialogContentText: {
      fontFamily: font.fontFamily,
      fontSize: font.largeFontSize,
      lineHeight: 'normal',
      color: color.tabButton,
      padding: '0 28px 28px'
    }
  },
  seeMoreButtonStyle: {
    btnRoot: {
      padding: '0 0 0 5px',
      minHeight: 12,
      color: color.raisedButtonColor,
      minWidth: 50
    },
    label: {
      fontSize: 12,
      fontWeight: 600,
      textTransform: 'initial'
    }
  },
  listItem: {
    padding: '16px 0',
    display: 'inline-table'
  },
  slider: {
    selectionColor: color.playerSelectionColor,
    thumbSize: '15px',
    trackSize: '2px',
    trackColor: color.playerTrackColor
  }
};

export default pearsonTheme;
