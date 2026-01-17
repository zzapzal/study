// API 기본 설정
const API_BASE_URL = 'http://localhost:8080';

// 기본 헤더 설정
const getDefaultHeaders = () => {
  return {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  };
};

// 커스텀 헤더를 추가할 수 있는 함수
const getHeaders = (customHeaders = {}) => {
  return {
    ...getDefaultHeaders(),
    ...customHeaders,
  };
};

// GET 요청
export const get = async (endpoint, customHeaders = {}) => {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: 'GET',
      headers: getHeaders(customHeaders),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('GET 요청 실패:', error);
    throw error;
  }
};

// POST 요청
export const post = async (endpoint, body, customHeaders = {}) => {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: 'POST',
      headers: getHeaders(customHeaders),
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('POST 요청 실패:', error);
    throw error;
  }
};

// PUT 요청
export const put = async (endpoint, body, customHeaders = {}) => {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: 'PUT',
      headers: getHeaders(customHeaders),
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('PUT 요청 실패:', error);
    throw error;
  }
};

// DELETE 요청
export const del = async (endpoint, customHeaders = {}) => {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: 'DELETE',
      headers: getHeaders(customHeaders),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // DELETE는 응답 본문이 없을 수 있음
    const contentType = response.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
      const data = await response.json();
      return data;
    }
    
    return { success: true };
  } catch (error) {
    console.error('DELETE 요청 실패:', error);
    throw error;
  }
};

// 기본 export (필요시 사용)
export default {
  get,
  post,
  put,
  delete: del,
};



