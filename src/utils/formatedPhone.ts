export const formatedPhone = (phone: string) => {
  const newPhone = phone.replace(/\D/g, "");

  return `+${newPhone.substring(0, 2)} (${newPhone.substring(
    2,
    4
  )}) ${newPhone.substring(4, 10)}-${newPhone.substring(10)}`;
};
