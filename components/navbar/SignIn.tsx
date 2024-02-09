import { Button } from "../ui/button";

const SignIn = () => {
  return (
    <div className="flex flex-row items-center gap-4">
      <p className="cursor-pointer transition hover:text-rose-400 hover:underline">
        Sign in
      </p>
      <Button variant="warning">Become a member</Button>
    </div>
  );
};

export default SignIn;
