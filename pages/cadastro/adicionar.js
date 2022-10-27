import { Arrow } from "../../assets/Arrow";
import { Layout } from "../../components/Layout";
import { Input } from "../../components/Input";
import { useForm } from "react-hook-form";
import { useState } from "react";

const Adicionar = () => {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");

  return (
    <Layout title="Cadastro" className="bg-white flex flex-col items-center">
      <div className="w-full pt-4 pl-4">
        <Arrow size={35} />
      </div>
      <div className="w-4/5 lg:w-1/3 flex flex-col items-center">
        <form className="w-full flex flex-col items-center">
          <div>
            <p className="font-bold text-xl mb-8">Cadastro de Funcionários</p>
          </div>

          <div className="w-full">
            <Input
              type={"text"}
              title={"Nome Completo :"}
              placeholder={"Seu nome completo"}
              {...register("fullName", { required: true })}
            />
          </div>
          <div className="w-full">
            <Input
              type={"email"}
              title={"E-mail Institucional"}
              placeholder={"digite seu e-mail institucional"}
              {...register("email", { required: true })}
            />
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Adicionar;
