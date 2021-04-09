/**
 * message类型action
 */
export const ADD_MESSAGE = 'ADD_MESSAGE';
export const CLEAR_MESSAGES = 'CLEAR_MESSAGES';

/**
 * action 创建函数
 */
export function addMessage(str) {
	return { type: ADD_MESSAGE, str };
}

export function clearMessages() {
	return { type: CLEAR_MESSAGES };
}
