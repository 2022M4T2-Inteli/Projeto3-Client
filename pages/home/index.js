import { Arrow } from "../../assets/Arrow";
import { ProfileMais } from "../../assets/ProfileMais";
import { Layout } from "../../components/Layout";
import { Leave } from "../../assets/Leave";
import { BeaconSchoolLogo } from "../../assets/BeaconSchoolLogo";
import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();
  
  return (
    <Layout title="Cadastro" className="bg-white flex flex-col items-center">
      <div className="w-full">
        <div className="bg-[#ea1d2c] w-full flex flex-col pt-8">
          <div className="w-full flex flex-row justify-end px-8">
            <ProfileMais className={"mr-4"} />
            <Leave />
          </div>

          <div className="flex flex-row justify-start w-full wb-10">
            <BeaconSchoolLogo
              width={128}
              className={"rounded-full translate-y-[50%] ml-8"}
            />
            <p className="font-bold text-white text-2xl translate-y-[60%] ml-5">
              Beacon School
            </p>
          </div>
        </div>
        <button className="flex justify-center mt-24 w-4/5 px-2 py-6 mx-auto bg-gradient-to-br from-[#3377FF] to-[#55d2d9] rounded-[2.75rem] text-white items-center" onClick={()=>{
          router.push("/dispositivos")
        }}>
          <p className="text-6xl">56</p>
          <span className="text-2xl ml-2">Dispositivos em uso</span>
        </button>
      </div>
    </Layout>
  );
};

export default Home;
