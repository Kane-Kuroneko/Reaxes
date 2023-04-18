import { render } from 'react-dom';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import { Demo$state } from './state';
import {} from './intro';
import {} from './counter';
import {} from './multi-reaxels';
import {} from './test-unmount';
import { TimeMachineTest } from './time-machine';


const mapping = [
	{
		name:"state",
		path:"state",
		Component:Demo$state
	},
	{
		name:"time-machine",
		path:"time-machine",
		Component:TimeMachineTest
	},
];

const Routing = reaxper( () => {
	
	return <BrowserRouter>
		<Routes>
			<Route path="/*" element = { <Home/> } />
			{mapping.map(({path,Component}) => <Route
				key={path}
				path={path}
				element={<Component/>}
			/>)}
		</Routes>
	</BrowserRouter>;
} );

const Home = reaxper( () => {
	
	return <div>
		{mapping.map(({name,path}) => <Entry key={path} name={name} path={path}/>)}
	</div>;
} );

const Entry = reaxper(({ name,path}) => {
	const { navigate } = utils.useRouter();
	return <p>
		<button
			onClick = { () => navigate( `${ path }` ) }
		>
			{ name }
		</button>
	</p>;
});

render(
	<Routing /> ,
	document.getElementById( 'reaxes-demo-root' ) ,
);

if (module.hot) { module.hot.accept( function () { location.reload(); } ); }
