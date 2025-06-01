import AuthForm from "@/components/AuthForm";
import ClientOnly from "@/components/ClientOnly";

const Page = () => {
  return (
    <ClientOnly>
      <AuthForm type="sign-up" />
    </ClientOnly>
  );
};

export default Page;
