import './_app.scss';
import PrincipalPage from './components/PrincipalPage'

function App() {
  return (
    <div className="is-three-quarters-mobile
    is-two-thirds-tablet
    is-half-desktop
    is-one-third-widescreen
    is-one-quarter-fullhd">
    <PrincipalPage/>
    </div>
  );
}

export default App;
