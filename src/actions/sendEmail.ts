"use server";
export const sendEmail = async (formData: FormData) => {
  console.log(formData.get("Printing on server..."));

  return {
    status: 200,
    message: "Email sent",
    error:false
  };
};
