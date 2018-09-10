const servicesLocation = '/PayaraMicro-0.0.1';

const validateJsonResponse = statusOk => response => {
  const contentType = response.headers.get('content-type');
  const status = response.status;
  if(!contentType || !contentType.includes('application/json')) {
    throw new TypeError('No json response');
  }
  if(status !== statusOk) {
    throw new TypeError('Invalid response');
  }
  return response.json();
};

export const getAllQuestions = () => fetch(`${servicesLocation}/services/question/getAll`, {
  method: 'GET',
  cache: 'no-cache',
  credentials: 'same-origin',
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
  },
  referrer: 'no-referrer'
}).then(validateJsonResponse(200));

export const addQuestion = data => fetch(`${servicesLocation}/services/question/add`, {
  method: 'POST',
  cache: 'no-cache',
  credentials: 'same-origin',
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
  },
  referrer: 'no-referrer',
  body: JSON.stringify(data)
}).then(validateJsonResponse(201));
