/*global provider*/
// declare const _ : typeof import('lodash');
// declare const React : typeof import('react');
// declare const useState : typeof React.useState;
// declare const useEffect : typeof React.useEffect;
// declare const useRef : typeof React.useRef;
// declare const useLayoutEffect : typeof React.useLayoutEffect;
// declare const useMemo : typeof React.useMemo;
// declare const useCallback : typeof React.useCallback;
// declare const utils: typeof import('reaxes-utils');
//
// declare const {orzMobx,Reaxes,reaxel} : typeof import("reaxes");
// declare const {reaxper,Reaxlass} : typeof import("reaxes-react");
// declare const {crayon,orzPromise,logProxy} : typeof utils;
// declare const toolkit:typeof import('reaxes-toolkit');
// declare const {orzPending} : typeof toolkit;
/*DOM*/


/*获取数组泛型参数*/
declare type ArrayElement<ArrayType extends any[]> = ArrayType extends (infer P)[] ? P : never;
