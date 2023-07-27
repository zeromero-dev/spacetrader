export const options = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': process.env.NEXT_PUBLIC_KEY! // '!' is used to tell typescript that this variable is not null
    }
  };