import { signInwithGooglePopup } from "../../utils/firebase/firebase.util";
import { createUserDocumentFromAuth } from "../../utils/firebase/firebase.util";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInwithGooglePopup();
    createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
    </div>
  );
};
export default SignIn;
