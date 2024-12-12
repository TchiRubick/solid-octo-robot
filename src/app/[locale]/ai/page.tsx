import { getReceipt } from "@/actions/cuisine/get-receipt";

const AiPage = async () => {
  const message = await getReceipt();

  console.log(message);

  return (
    <div>
      <h1>Hola !</h1>
    </div>
  );
};

export default AiPage;
