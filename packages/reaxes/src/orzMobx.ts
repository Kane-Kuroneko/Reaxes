/**
 * 创建一个mobx的observable对象
 */
export const orzMobx = <S extends object>(state : S) => {
	const store = observable<S>(state);
	/**
	 * 可变地修改store内数据, 不使用不可变从外部替换.
	 * @param partialState 深度递归部分合并state ,
	 */
	const mutatePartialState = <T extends object = S>(partialState : Partial<T> , deepStore : any = store) => {
		for( const key in partialState ) {
			const value = partialState[key];
			if( _.isPlainObject(value) ) {
				if( _.isPlainObject(deepStore[key]) ) {
					mutatePartialState(value as any , deepStore[key]);
				}
			} else if( isBasicType(value) ) {
				action(() => {
					deepStore[key] = value;
				})();
			}
		}
		
	};
	
	const setMobxState = action(<S extends {}>(store , partialState : Partial<S>):S => {
		return Object.assign(store , partialState);
	});
	const mergeMobxState = action(<S extends {}>(store , partialState : Partial<S>):S => {
		return _.merge(store , partialState);
	});
	
	/**
	 * 以赋值形式直接修改store内数据,免去层层partial的麻烦
	 */
	const mutate = <T extends (store:S) => void>(callback:T) => {
		action(() => callback(store))();
	};
	
	return {
		store ,
		mutate,
		setState : (partialState : Partial<S>) => setMobxState(store , partialState) ,
		mergeState : (partialState : Partial<S>) => mergeMobxState(store , partialState) ,
		mutatePartialState ,
	};
};

/**
 * 创建store时为某个属性设置监听深度
 * todo
 */
export const depth = <T>(target:T,depth:number):T => {
	
}

type isBasicType<V> = V extends basicType ? true : false;

type basicType = ( number | boolean | string | symbol | bigint | null | undefined );



const isBasicType = <V>(value : V) : isBasicType<V> => {
	
	if( [ "boolean" , "string" , "undefined" , "number" , "symbol" , "bigint" ].
	includes(typeof value) ) {
		return true as any;
	} else if( value === null ) {
		return true as any;
	} else {
		return false as any;
	}
};
type RecursivePartial<S extends object> = {
	[p in keyof S]+? : S[p] extends object ? RecursivePartial<S[p]> : S[p];
};

import {
	observable ,
	action ,
} from 'mobx';
