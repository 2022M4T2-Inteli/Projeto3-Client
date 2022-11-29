// Página de adicionar funcionários

import { Arrow } from "@assets/Arrow";
import { Layout } from "@components/Layout";
import { Input } from "@components/Input";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Button } from "@components/Button";

const Adicionar = () => {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");

  return (
    <Layout title="Cadastro" className="bg-white flex flex-col items-center">
      <div className="w-full pt-4 pl-4">
        <Arrow size={35} />
      </div>
      <div className="w-4/5 lg:w-1/3 flex flex-col items-center">
        <form
          className="w-full flex flex-col items-center"
          onSubmit={handleSubmit((data) => {
            setData(JSON.stringify(data));
          })}
        >
          <div>
            <p className="font-bold text-lg lg:text-xl my-8">Cadastro de Funcionários</p>
          </div>

          {/* Inputs */}
          <div className="w-full">
            <Input
              type={"text"}
              title={"Nome Completo :"}
              placeholder={"Seu nome completo"}
              {...register("fullName", { required: true })}
            />

            <Input
              type={"email"}
              title={"E-mail Institucional :"}
              placeholder={"email@beacon.edu.br"}
              {...register("email", { required: true })}
            />

            <Input
              type={"number"}
              title={"CPF :"}
              placeholder={"000 . 000 . 000 - 00"}
              {...register("cpf", { required: true })}
            />

            <Input
              type={"text"}
              title={"Cargo :"}
              placeholder={"Gerente de patrimonio"}
              {...register("occupation", { required: true })}
            />
          </div>

          <Button className={"mt-8 w-full"}>Continuar</Button>
        </form>
      </div>
    </Layout>
  );
};

export default Adicionar;
