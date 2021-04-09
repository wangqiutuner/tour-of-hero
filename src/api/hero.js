import api from './service';
import store from '../store/index';
import { addMessage } from '../store/actions/index';

const log = (msg) => {
	const { dispatch } = store;
	dispatch(addMessage(`HeroService: ${msg}`));
};

const handleError = (err, operation = 'operation') => {
	console.log(err);
	log(`${operation} failed: ${err}`);
};

/**
 * 获取英雄列表
 * @returns 英雄数组 promise
 */
export const getHeroes = () => {
	return api
		.request({ url: '/heroes', method: 'get' })
		.then((res) => {
			log('fetched heroes');
			return res;
		})
		.catch((err) => {
			handleError(err);
		});
};

/**
 * 根据英雄id获取英雄信息
 * @param {number} id 英雄id
 * @returns 英雄的详细信息 promise
 */
export const getHero = (id) => {
	return api
		.request({ url: `/heroes/${id}`, method: 'get' })
		.then((res) => {
			log(`fetched hero id=${id}`);
			return res;
		})
		.catch((err) => {
			handleError(err);
		});
};

/**
 * 新增英雄
 * @param {String} name 英雄名
 * @returns 新增的英雄信息 promise
 */
export const addHero = (name) => {
	return api
		.request({ url: '/heroes', method: 'post', data: { name } })
		.then((res) => {
			log(`added hero id=${res.data.id}`);
			return res;
		})
		.catch((err) => {
			handleError(err);
		});
};

/**
 * 更新英雄信息
 * @param {Object} hero 英雄对象
 * @returns 更新后的英雄信息 promise
 */
export const updateHero = (hero) => {
	return api
		.request({
			url: `/heroes/${hero.id}`,
			method: 'put',
			data: {
				...hero,
			},
		})
		.then((res) => {
			log(`updated hero id=${hero.id}`);
			return res;
		})
		.catch((err) => {
			handleError(err);
		});
};

/**
 * 删除英雄
 * @param {Number} id 英雄id
 * @returns promise
 */
export const deleteHero = (id) => {
	return api
		.request({
			url: `/heroes/${id}`,
			method: 'delete',
		})
		.then((res) => {
			log(`deleted hero id=${id}`);
			return res;
		})
		.catch((err) => {
			handleError(err);
		});
};


export function searchHeroes(term) {
	if (!term.trim()) {
		return new Promise((resolve) => {
			resolve([]);
		});
	}
	return api
		.request({ url: '/heroes', method: 'get', params: { name_like: term } })
		.then((res) => {
			res.data.length ? log(`found heroes matching "${term}"`) : log(`no heroes matching "${term}"`);
			return res;
		})
		.catch((err) => {
			handleError(err);
		});
}
