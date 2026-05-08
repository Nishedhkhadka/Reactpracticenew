import App from "./App";
function Student({ name, isloggedin }) {
  const Loginmessage = <p className="text-red-400 size-4">Please login to see message</p>;
  const Greeting = <p className="text-green-300 text-lg bg-slate-800 p-2" >HI {name} how are you? 💖</p>;

  return isloggedin ? Greeting : Loginmessage;
}
export default Student;
