// import { useEffect } from 'react'
// import { useNavigate } from 'react-router-dom'
// import { signInWithPopup } from 'firebase/auth'
// import { auth, Providers } from '../config/firebase'

// interface Props {
//     children: React.ReactNode;
// }

// const AuthChecker = ({ children}: Props) => {
//   const navigate = useNavigate();
//   // This will just check if the user is logged in, if so, it returns the children
//   // (which are passed as props - it's just whatever component is either protected
//   // or not)
//   // otherwise it sends them to the login route
//   useEffect(() => { //in every render, the below will be executed
//     console.log(auth.currentUser)
//     if (!auth.currentUser) {
//         navigate("/")
//         signInWithPopup(auth, Providers.google)
//     }
//   }, [auth.currentUser])
    
//     return (
//         <>{children}</>
//     )
// }

// export default AuthChecker
import { useNavigate } from 'react-router-dom'
import { onAuthStateChanged, signInWithPopup } from 'firebase/auth'
import { auth, provider } from '../config/firebase'

interface Props {
    children: React.ReactNode;
}

const AuthChecker = ({ children }: Props) => {
    const navigate = useNavigate();

    onAuthStateChanged(auth, (user) => {
      if (!user) {
            navigate("/")
            signInWithPopup(auth, provider)
      }
    });
  return (
    <>{children}</>
  )
}

export default AuthChecker



