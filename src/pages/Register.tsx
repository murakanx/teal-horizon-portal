
import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";
import { RegisterForm } from "@/components/auth/RegisterForm";

const Register = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <section className="bg-job-header text-white py-14">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Register</h1>
          </div>
        </section>
        
        <section className="py-16 bg-gray-50">
          <RegisterForm />
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Register;
