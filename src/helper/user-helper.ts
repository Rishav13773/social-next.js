import { createUser } from "@/actions/user-action";

//Will delete this helper later
export async function generateUser(user: any) {
  if (user) {
    const { emailAddress, username } = user?.externalAccounts[0];
    const response = await createUser({ emailAddress, username });
    // console.log("server response", reposne);

    return response;
  }
}
