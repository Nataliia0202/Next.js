import { GoogleButton } from "../../components/GoogleButton"
import {SignInForm} from "../../components/SignInForm"


export default async function name() {
    return (
        <div className='stack'>
            <h1>Signin</h1>
            <GoogleButton />
            <div>or</div>
            <SignInForm/>
        </div>
    );
    
}