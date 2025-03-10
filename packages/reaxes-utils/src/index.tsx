export type ArrayElement<ArrayType extends any[]> = ArrayType extends (infer P)[] ? P : never;
export const {
	assignPick,
} = new class {
	/**
	 * 从一个对象里挑出需要的键值对,此方法修改源对象
	 * note: this fn will change original object!
	 */
	assignPick = <O extends {} , K extends Array<keyof O>>(object : O , keys : K) : Pick<O , ArrayElement<K>> => {
		Object.keys(object).forEach((k) => {/*@ts-ignore*/
			if( !keys.includes(k) ) {
				delete object[k];
			}
		});
		return object as Pick<O , ArrayElement<K>>;
	};
	
	/**
	 * @description 传入一个数组,若其中每个值都为true,则返回true.否则false.用于取代if(x && xxx && xxxx ...);
	 * @param list {boolean[]} 一个装着bool的列表
	 */
	every = <T extends boolean[]>(list:T) => {
		return list.every(e => e === true);
	}
	
	/**
	 * @description 传入一个数组,若其中至少有一个为true,则返回true.否则false.用于取代if(x || xxx || xxxx ...);
	 * @param list {boolean[]} 一个装着bool的列表
	 */
	some = <T extends boolean[]>(list:T) => {
		return list.some(e => e === true);
	}
}();


/*无依赖@@utils的放上面*/
export * from './react-hooks'
export * from './shallowequal.utility';
export * from './asyncCall.utility';
export * from './isPromise.utility';
export * from './debounce.utility';
export * from './stringify.utility';
export * from './crayon.utility';
export * from './checkGenericNull.utility';
export * from './runOnlyOnce.utility';
export * from './makePair.utility';
export * from './timer.utility';
export * from './replaceStr.utility';
export * from './queryString.utility';
export * from './orzPromise.utility';

export * from './assert-group.utility';
export * from './dataflow.utility';

export * from './logProxy.utility';

export {default as Cookie} from './cookie.utility';
export {default as checkType} from './checkType.utility';
export {default as getNestedValue} from './getNestedValue.utility';
export {default as Random} from './random.utility';
export {default as throttle} from './throttle.utility';



