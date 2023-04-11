const constants = Object.freeze({
  ONE_DAY_MINS: 24 * 60,
  ONE_DAY_MILLIS: 24 * 60 * 60 * 1000,
  BADGE_COLORS: Object.freeze({
    REMINDER: '#F41A22',
    COUNT: '#2196F3',
  }),
  BADGE_REMINDER_TEXT: '!',
  ALARMS: Object.freeze({
    REMINDER: 'reminder-alarm',
    SCHEDULED_SEARCH: 'scheduled-search-alarm',
    FETCH_DAILY_TRENDS: 'fetch-daily-trends-alarm',
  }),
  CLICK_DELAY: 500,
  DEFAULT_PREFERENCES: Object.freeze({
    desktopIterations: 35,
    mobileIterations: 25,
    delay: 1000,
    autoClick: true,
    randomGuesses: true,
    randomSearch: false,
    randomSearchDelayMin: 1200,
    randomSearchDelayMax: 2500,
    randomSearchIterationsMin: 35,
    randomSearchIterationsMax: 42,
    randomLettersSearch: false,
    blitzSearch: false,
    platformSpoofing: 'desktop-and-mobile',
    customQueries: '',
    searchWithCustomQueries: false,
    searchWithDailyTrends: true,
    searchWithDailyTrendsLocale : "US",
    searchWithTemplates: true,
    scheduleSearches: true,
    scheduledTime: '02:00',
    scheduledTimeOpensRewardTasks: true,
  }),
  MESSAGE_TYPES: Object.freeze({
    START_SEARCH: 0, // popup => background script
    STOP_SEARCH: 1, // popup => background script
    GET_SEARCH_COUNTS: 2, // popup => background script
    UPDATE_SEARCH_COUNTS: 3, // background script => popup
    CLEAR_SEARCH_COUNTS: 4, // background script => popup
    CORRECT_ANSWER_RECEIVED: 5, // window-variable-grabber script => content script
    OPEN_URL_IN_BACKGROUND: 6, // window-variable-grabber script => content script => background script
  }),
  REWARDS_URL: 'https://rewards.bing.com/?redref=amc',
  DAILY_TRENDS_API: 'https://trends.google.com/trends/api/dailytrends?geo=',
  NUM_DAILY_TREND_FETCHES: 4,
  // TODO: add more mobile user agents
  MOBILE_USER_AGENTS: Object.freeze([
    'Mozilla/5.0 (Linux; Android 10; HD1913) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.5615.48 Mobile Safari/537.36 EdgA/111.0.1661.59',
    'Mozilla/5.0 (Linux; Android 10; SM-G973F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.5615.48 Mobile Safari/537.36 EdgA/111.0.1661.59',
    'Mozilla/5.0 (Linux; Android 10; Pixel 3 XL) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.5615.48 Mobile Safari/537.36 EdgA/111.0.1661.59',
    'Mozilla/5.0 (Linux; Android 10; ONEPLUS A6003) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.5615.48 Mobile Safari/537.36 EdgA/111.0.1661.59',
  ]),
  EDGE_USER_AGENT: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36 Edg/112.0.1722.34',
});
