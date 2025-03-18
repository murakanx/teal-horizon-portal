
import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";
import { JobDetailsContent } from "@/components/jobs/JobDetailsContent";
import { useParams } from "react-router-dom";

const jobData = {
  id: 1,
  title: "Corporate Solutions Executive",
  company: "LetKar and Sons",
  companyLogo: "/company-logos/logo1.png",
  location: "New York, USA",
  salary: "$40000-$42000",
  category: "Commerce",
  type: "Full time",
  experience: "3 Years",
  degree: "Bachelor's degree",
  postedTime: "10 min",
  description: "Nunc sed a mi purus. Nunc dui faucibus proin luctus tincidunt. Sit congue non vitae odio est in. Felis eu ultricies a sem massa. Sem quis viverra odio mattis nunc. Et nunc ut tempus duis nisl sed massa eget enim. Nam diam cursus tristique. Sem quam morbi tempor purus. Neque malesuada morbi faucibus nisl egestas semper vitae rhoncus. Cras facilitas dignissim augue lorem amet adipiscing cursus fames. Quis imperdiet nisl dignissim pellentesque nulla vitae. Quisque tincidunt metus lectus portin. Orci imperdiet nisl dignissim pellentesque nulla vitae. Quique tincidunt metus lectus portta amet porttis proin in. Orci imperdiet nisi dignissim pellentesque nulla viae. Quisque tincidunt metus lectus portin ante malesuada nisi massa.Tortor amet porta proin in. Orci imperdiet nisi dignissim pellentesque nulla vitae. Quisque tincidunt metus lectus porta.",
  responsibilities: [
    "Et nunc ut tempus duis nisl sed massa. Omere varius faucibus nisl vitae vitae cras ornare. Cras facilisis dignissim augue lorem peret adipiscing.",
    "Cras facilisis dignissim augue lorem peret adipiscing cursus fames. Tortor amet porta proin in. Orci imperdiet nisi.",
    "Tortor amet porta proin in. Orci imperdiet nisi dignissim pellentesque nulla vitae. Quisque tincidunt metus lectus porta.",
    "Tortor amet porta proin in. Orci imperdiet nisi dignissim pellentesque nulla vitae. Quisque tincidunt metus lectus porta.",
    "Tortor amet porta proin in. Orci imperdiet nisi dignissim pellentesque nulla vitae. Quisque tincidunt metus lectus porta.",
  ],
  skills: [
    "Et nunc ut tempus duis nisl sed massa. Omere varius faucibus nisl vitae vitae cras ornare.",
    "Omere varius faucibus nisl vitae vitae cras ornare. Cras facilisis dignissim augue lorem peret adipiscing cursus fames.",
    "Tortor amet porta proin in. Orci imperdiet nisi dignissim pellentesque nulla vitae.",
    "Tortor amet porta proin in. Orci imperdiet nisi dignissim pellentesque nulla vitae.",
    "Tortor amet porta proin in. Orci imperdiet nisi dignissim pellentesque nulla vitae.",
  ],
};

const JobDetails = () => {
  const { id } = useParams();

  // In a real app, we would fetch the job data based on the ID
  // For now, we're just using the static data

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <section className="bg-job-header text-white py-14">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4 text-center">Job Details</h1>
          </div>
        </section>
        
        <section className="py-10 bg-gray-50">
          <div className="container mx-auto px-4">
            <JobDetailsContent job={jobData} />
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default JobDetails;
