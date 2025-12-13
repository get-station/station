// https://railway.com/design/color
const PRIMARY_COLORS = {
    // Gray scale
    gray50: 'hsl(248, 21%, 13%)',
    gray100: 'hsl(246, 18%, 15%)',
    gray200: 'hsl(246, 11%, 22%)',
    gray300: 'hsl(246, 8%, 35%)',
    gray400: 'hsl(246, 7%, 45%)',
    gray500: 'hsl(246, 6%, 55%)',
    gray600: 'hsl(246, 6%, 65%)',
    gray700: 'hsl(246, 6%, 78%)',
    gray800: 'hsl(246, 6%, 87%)',
    gray900: 'hsl(246, 6%, 95%)',
    gray950: 'hsl(246, 4%, 97%)',

    // Pink scale
    pink50: 'hsl(270, 38%, 12%)',
    pink100: 'hsl(270, 40%, 16%)',
    pink200: 'hsl(270, 45%, 24%)',
    pink300: 'hsl(270, 50%, 32%)',
    pink400: 'hsl(270, 55%, 43%)',
    pink500: 'hsl(270, 60%, 52%)',
    pink600: 'hsl(270, 70%, 65%)',
    pink700: 'hsl(270, 70%, 75%)',
    pink800: 'hsl(270, 70%, 85%)',
    pink900: 'hsl(270, 70%, 95%)',
    pink950: 'hsl(270, 70%, 98%)',

    // Blue scale
    blue50: 'hsl(220, 55%, 10%)',
    blue100: 'hsl(220, 55%, 13%)',
    blue200: 'hsl(220, 62%, 25%)',
    blue300: 'hsl(220, 68%, 35%)',
    blue400: 'hsl(220, 72%, 45%)',
    blue500: 'hsl(220, 80%, 55%)',
    blue600: 'hsl(220, 80%, 65%)',
    blue700: 'hsl(220, 80%, 75%)',
    blue800: 'hsl(220, 80%, 85%)',
    blue900: 'hsl(220, 80%, 95%)',
    blue950: 'hsl(220, 55%, 97%)',

    // Cyan scale
    cyan50: 'hsl(180, 25%, 10%)',
    cyan100: 'hsl(180, 36%, 11%)',
    cyan200: 'hsl(180, 45%, 16%)',
    cyan300: 'hsl(180, 50%, 28%)',
    cyan400: 'hsl(180, 50%, 38%)',
    cyan500: 'hsl(180, 50%, 44%)',
    cyan600: 'hsl(180, 50%, 62%)',
    cyan700: 'hsl(180, 50%, 72%)',
    cyan800: 'hsl(180, 50%, 80%)',
    cyan900: 'hsl(180, 58%, 91%)',
    cyan950: 'hsl(180, 40%, 97%)',

    // Green scale
    green50: 'hsl(152, 15%, 10%)',
    green100: 'hsl(152, 26%, 11%)',
    green200: 'hsl(152, 32%, 16%)',
    green300: 'hsl(152, 38%, 24%)',
    green400: 'hsl(152, 38%, 34%)',
    green500: 'hsl(152, 38%, 42%)',
    green600: 'hsl(152, 38%, 60%)',
    green700: 'hsl(152, 38%, 70%)',
    green800: 'hsl(152, 38%, 80%)',
    green900: 'hsl(152, 38%, 91%)',
    green950: 'hsl(152, 40%, 97%)',

    // Yellow scale
    yellow50: 'hsl(44, 40%, 8%)',
    yellow100: 'hsl(44, 40%, 10%)',
    yellow200: 'hsl(44, 50%, 16%)',
    yellow300: 'hsl(44, 62%, 25%)',
    yellow400: 'hsl(44, 70%, 40%)',
    yellow500: 'hsl(44, 74%, 52%)',
    yellow600: 'hsl(44, 78%, 62%)',
    yellow700: 'hsl(44, 78%, 72%)',
    yellow800: 'hsl(44, 78%, 80%)',
    yellow900: 'hsl(44, 78%, 90%)',
    yellow950: 'hsl(44, 75%, 97%)',

    // Red scale
    red50: 'hsl(1, 35%, 10%)',
    red100: 'hsl(1, 45%, 12%)',
    red200: 'hsl(1, 55%, 20%)',
    red300: 'hsl(1, 62%, 28%)',
    red400: 'hsl(1, 62%, 35%)',
    red500: 'hsl(1, 62%, 44%)',
    red600: 'hsl(1, 62%, 60%)',
    red700: 'hsl(1, 62%, 76%)',
    red800: 'hsl(1, 64%, 85%)',
    red900: 'hsl(1, 68%, 95%)',
    red950: 'hsl(1, 55%, 98%)',
}

export const COLORS = {
    ...PRIMARY_COLORS,

    // hsl(250, 24%, 7.5%)
    // hsl(255, 11.80%, 6.70%)

    background: 'hsl(255, 11.10%, 7.10%)',
    backgroundSecondary: 'hsl(246, 18.50%, 10.60%)',

    black: '#000000',
    white: '#FFFFFF',
}
