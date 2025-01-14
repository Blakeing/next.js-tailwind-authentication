import { Auth } from "aws-amplify";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import "../configureAmplify";

export default function Protected() {
  const [user, setUser] = useState(null);
  const router = useRouter();
  useEffect(() => {
    checkUser();
  }, []);
  async function checkUser() {
    try {
      const user = await Auth.currentAuthenticatedUser();
      setUser(user);
    } catch (err) {
      setUser(null);
      router.push("/auth");
    }
  }
  if (!user) return null;
  return (
    <>
      <p className="text-xl font-black">Protected route</p>
    </>
  );
}
