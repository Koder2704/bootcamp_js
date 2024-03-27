import * as React from 'react';

import { TfiArrowLeft } from 'react-icons/tfi';
import { Link, useNavigate } from 'react-router-dom';



export default function LoginPage() {

  // The local storage unique key
  // La clé unique de stockage 
  const STORAGE_KEY = 'auth';
  const router = useNavigate();

  // State for the datas from the api endpoint
  // l'état pour les données de l'API.
  const [datas, setDatas] = React.useState([]);

  // State holding the authenticated user's datas
  // l'état qui contient les données l'utilisateur connecté.
  const [authenticatedUser, setAuthenticatedUser] = React.useState({});

  // ASAP my component is mounted...
  // Aussitôt que le composant est monté...
  React.useEffect(() => {

    // Creating a function that will fetch datas from the api endpoint.
    // Création d'une fonction qui va chercher les données de l'API.
    async function fetchRemoteUsers() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();

        console.log(users);

        // Keeping the datas in the datas state object
        // Préservation des données dans l'object d'état.
        setDatas(users);
      } catch (error) {
        alert(error.message);
      }
    }

    fetchRemoteUsers();
  }, []);

  // Input states
  // Les états des inputs.
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');


  // Error state
  // L'état de l'erreur.
  const [error, setError] = React.useState(false);


  // Username input event handler
  // Le gestionnaire d'évènement pour username.
  const onUsernameChanged = (event) => {
    setUsername(event.target.value);
  }

  // Password input event handler
  // Le gestionnaire d'évènement pour password.
  const onPasswordChanged = (event) => {
    setPassword(event.target.value);
  }

  // On form submitted
  // Quand le formulaire est soumit.
  const login = (event) => {
    // Prevent the browser to refresh after the form submission
    // Prévention du comportement par défaut du formulaire. (Rafraîchissement)
    event.preventDefault();

    try {
      if (username !== '' && password !== '') {
        // Finding the matching user amongst the whole datas state object.
        // Obtention de l'utilisateur correspondant dans la liste.
        let matchingUser = datas.find((u) => u.username === username && u.email === password);
        setAuthenticatedUser(matchingUser);

        // Keeping the authenticated user in the local storage of my browser.
        // Conservation de l'utilisateur connecté dans le local storage de mon navigateur.
        localStorage.setItem(STORAGE_KEY, JSON.stringify(matchingUser));

        // Resetting the form's inputs.
        // Réinitialisation des entrées du formulaire.
        setUsername('');
        setPassword('');

        router('/dashboard');

        alert(`${matchingUser.name} is correctly connected !`);
      } else if (!authenticatedUser.name) {
        setError(true);
      } else {
        setError(true);
      }
    } catch (error) {
      alert(error.message);
    }
  }

  // Logout functionality:
  // Fonctionnalité de déconnexion.
  const logout = () => {
    setAuthenticatedUser({});
    localStorage.removeItem(STORAGE_KEY);
  }

  return (
    <main className='bg-gradient-to-b from-blue-400 to-purple-400 w-full h-screen flex justify-center items-center'>
      <form className='bg-white rounded-md p-6 min-h-[40%] max-w-[24%] w-full flex flex-col items-center' onSubmit={login}>
        <div className='w-full mt-2 mb-4'>
          <div className='flex gap-2 items-center'>
            <div className='p-1.5 rounded-lg text-xs border-2 border-purple-400'>
              <Link to='/'>
                <TfiArrowLeft className='text-purple-400' />
              </Link>
            </div>
            <h3 className='text-2xl font-bold text-purple-400'>Login</h3>
          </div>
          <p className='text-[.76rem] text-gray-400 font-bold'>Please fill the form correctly</p>
        </div>

        <div className='w-full mb-4'>
          <h4 className={`${error ? 'text-red-400' : 'text-purple-400'} font-bold text-sm`}>Username</h4>

          {/* Input handled with error state */}
          {/* Gestion de l'erreur sur l'input */}
          <input value={username} onChange={(event) => {
            onUsernameChanged(event);
            setError(false);
          }} className={`${error ? 'border-red-400' : 'border-gray-300'} rounded-md border-2 text-xs py-1 px-2 w-full mt-2  focus:border-purple-400 focus:outline-none`} placeholder='Your username...' />
          {error && <span className='text-xs w-auto font-bold text-red-400 mt-2'>
            The username field is not correct
          </span>}
        </div>

        <div className='w-full mb-4'>
          <h4 className={`${error ? 'text-red-400' : 'text-purple-400'} font-bold text-sm`}>Password</h4>

          {/* Input handled with error state */}
          {/* Gestion de l'erreur sur l'input */}
          <input value={password} onChange={(event) => {
            onPasswordChanged(event);
            setError(false);
          }} className={`${error ? 'border-red-400' : 'border-gray-300'} rounded-md border-2 text-xs py-1 px-2 w-full mt-2 focus:border-purple-400 focus:outline-none`} type='password' placeholder="Your password (The user's email)..." />
          {error && <span className='text-xs w-auto font-bold text-red-400 mt-2'>
            The password field is not correct
          </span>}
        </div>

        <button className='w-full text-white text-sm border-2 border-purple-200 bg-purple-400 hover:bg-purple-600 rounded-md py-1 px-4 mt-8 font-bold active:bg-purple-300' type='submit'>Login</button>
      </form>
    </main>
  );
}