import webpack from 'webpack';
import portfinder from 'portfinder';
import { fileURLToPath } from 'url';
import { absProjectRootDir , absProjectRootFileURL } from '../../build/toolkit.mjs';
import path from 'path';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';

const {
	DefinePlugin ,
	ProvidePlugin,
} = webpack;

const obsCurrentPkg = path.join(absProjectRootDir,'packages/reaxes-utils');


export const webpackConfig = {/*will be dynamic imported*/	
	entry : path.join(obsCurrentPkg,'src') ,
	output : {
		libraryTarget : 'module' ,
		module : true ,
		path : path.join(obsCurrentPkg , "dist") ,
		filename : 'index.js' ,
	} ,
	devtool : 'source-map' ,
	experiments : {
		outputModule : true ,
	} , 
	// stats : 'errors-only' ,
	externals : [
		'lodash' ,
		'mobx' ,
		'shallowequal'
	] ,
	mode : 'production' ,
	performance : {
		maxEntrypointSize : 10000000 ,
		maxAssetSize : 30000000 ,
	} ,
	plugins : [
		new CleanWebpackPlugin(),
		getProvidePlugin() ,
		new CopyWebpackPlugin({
			patterns : [
				{
					from : path.join(obsCurrentPkg,'public/') ,
					to : path.join(obsCurrentPkg ,'dist/') ,
				} ,
			] ,
		}) ,
	] ,
};

function getProvidePlugin () {
	return new ProvidePlugin({
		_ : ['lodash'] ,
		React : ['react'] ,
		useState : ['react' , 'useState'] ,
		useEffect : ['react' , 'useEffect'] ,
		useRef : ['react' , 'useRef'] ,
		useLayoutEffect : ['react' , 'useLayoutEffect'] ,
		useMemo : ['react' , 'useMemo'] ,
		useCallback : ['react' , 'useCallback'] ,
		
		utils : ['reaxes-utils'] ,
		Reaxes : ['reaxes','Reaxes'] ,
		createReaxable : ['reaxes','createReaxable'] ,
		obsReaction : ['reaxes','obsReaction'] ,
		orzPromise : ['reaxes-utils' , 'orzPromise'] ,
		crayon : ['reaxes-utils' , 'crayon'] ,
	});
}
