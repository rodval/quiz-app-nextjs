const BASEURL = 'https://localhost:32774/api/';

const AUTH = {
  SIGNIN: `${BASEURL}Auth/SignIn`,
  SIGNUP: `${BASEURL}Auth/SignUp`,
};

const CATEGORIES = {
  DATA: `${BASEURL}CategoryQuiz`,
  USERCATEGORY: `${BASEURL}CategoryQuiz/User`,
};

const QUESTIONS = {
  DATA: `${BASEURL}Question`,
};

const USERQUIZ = {
  SAVEQUIZ: `${BASEURL}UserQuiz`,
};

const ENDPOINTS = {
  AUTH,
  CATEGORIES,
  QUESTIONS,
  USERQUIZ,
};

export default ENDPOINTS;
