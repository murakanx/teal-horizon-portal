
import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";
import { LoginForm } from "@/components/auth/LoginForm";

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <section className="bg-job-header text-white py-14">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Login</h1>
          </div>
        </section>
        
        <section className="py-16 bg-gray-50">
          <LoginForm />
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Login;
