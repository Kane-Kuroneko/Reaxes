/*global provider*/
declare const _ : typeof import('lodash');
declare const React : typeof import('react');
declare const useState : typeof React.useState;
declare const useEffect : typeof React.useEffect;
declare const useRef : typeof React.useRef;
declare const useLayoutEffect : typeof React.useLayoutEffect;
declare const useMemo : typeof React.useMemo;
declare const useCallback : typeof React.useCallback;


declare namespace ORZ {
	
	export type env = "server_dev"|"server_yang" | "server_production" | "unset"  ;
	
	export type RequestOptions<body extends () => Promise<F> ,F = any> = Omit<RequestInit, 'body'> & {
		env? : env,
		body?: body;
		mock? : boolean ;
	};
}

declare const __IS_MOCK__: boolean;
declare const __EXPERIMENTAL__: boolean;
declare const __METHOD__: "server"|"build";
declare const __NODE_ENV__ : "development"|"production";
declare const __ENV__ : ORZ.env;
/*DOM*/
declare interface EventTarget {
	value?: string;
}
/*CSS*/
declare module '*.module.less' {
	const classes : {
		readonly [ key: string ]: string;
	};
	
	export default classes;
}
declare module '*.theme.less' {
	const theme : string;
	export default theme;
}

/*获取数组泛型参数*/
declare type ArrayElement<ArrayType extends any[]> = ArrayType extends (infer P)[] ? P : never;
declare interface NodeModule {
	hot?: {
		accept: Function;
	};
}



/*todo 后续放入requester插件*/
declare type PayloadBody<T> = () => Promise<T>; 