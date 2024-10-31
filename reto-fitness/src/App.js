import './App.css';
import Formulario from './components/Formulario/Formulario';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <div className='side-image'>
          <img src='https://luxuryboutiquemagazine.com/wp-content/uploads/2022/02/fitness3.jpg' alt='Imagen Izquierda'/>
        </div>

        <div className='description'>
          <h1>FITLIFE</h1>
            <h2>¡Bienvenidos a FitLife!</h2>
              <p>Únete a nuestra comunidad de fitness y comienza tu viaje hacia una vida más saludable. Ofrecemos una variedad de entrenamientos personalizados, programas de acondicionamiento físico y acceso a equipos de última generación. Aquí en FitLife, nuestro objetivo es ayudarte a alcanzar tus metas de manera divertida y sostenible.</p>
        </div>

        <div className='form-wrapper'>
          <Formulario />
        </div>

      </div>

    </div>
  );
}

export default App;
