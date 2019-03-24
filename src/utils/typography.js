import Typography from "typography"

const _grayPercentage2 = (alpha) => `rgba(0,0,0,${alpha})`;

const defaultStyles = {
  title: "GitHub",
  baseFontSize: "16px",
  baseLineHeight: 1.625,
  headerFontFamily: ["Nanum Gothic", "Noto Sans KR", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica", "Arial", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"],
  bodyFontFamily: ["Nanum Gothic", "Noto Sans KR", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica", "Arial", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"],
  scaleRatio: 2,
  bodyColor: "hsla(0,0%,0%,0.8)",
  headerWeight: 600,
  bodyWeight: "normal",
  boldWeight: 600,
  // Github has all block elements use 1/2 rhythm not a full rhythm.
  blockMarginBottom: 1 / 2,
  overrideStyles: function overrideStyles(_ref) {
    var rhythm = _ref.rhythm;
    return {
      h1: {
        paddingBottom: "calc(" + rhythm(1 / 4) + " - 1px)",
        marginTop: rhythm(0.7)
      },
      h2: {
        paddingBottom: "calc(" + rhythm(1 / 4) + " - 1px)",
        marginBottom: rhythm(1 / 4),
        marginTop: rhythm(1)
      },
      h6: {
        color: _grayPercentage2(0.53)
      },
      'body': {
        background: "#fbfafc",
      },
      'strong': {
        color: "#f29191",
        textShadow: '2px 2px #585858'
      },
      "h3,h4,h5,h6": {
        marginBottom: rhythm(1 / 2),
        marginTop: rhythm(1)
      },
      "ol,ul": {
        marginLeft: rhythm(1.25)
      },
      // children ol, ul
      "li>ol,li>ul": {
        marginLeft: rhythm(1.25)
      },
      a: {
        color: "#4078c0",
        textDecoration: "none"
      },
      "a:hover,a:active": {
        textDecoration: "underline"
      },
      blockquote: {
        borderLeft: "4px solid " + _grayPercentage2(0.13),
        color: _grayPercentage2(0.53),
        marginTop: 0,
        marginRight: 0,
        marginLeft: 0,
        paddingLeft: "calc(" + rhythm(1 / 2) + " - 1px)"
      }
    };
  }
}

const typography = new Typography(defaultStyles)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale