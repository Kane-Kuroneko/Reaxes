/**
 * console.log a proxy as an normal object to show;
 * note: it is
 * @param source
 */
export const logProxy = ( source:object = {} ) => JSON.parse( stringify( _.cloneDeep( source ) ) );
import { stringify } from './stringify.utility';
