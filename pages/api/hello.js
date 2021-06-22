import { withSSRContext } from "aws-amplify";
import "../../configureAmplify";

export default async (req, res) => {
  const { Auth } = withSSRContext({ req });
  const user = await Auth.currentAuthenticatedUser();
  console.log("user: ", user);
  res.statusCode = 200;
  res.json({ name: user });
};
