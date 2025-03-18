
import { HRMPortal } from "@/components/hrm/HRMPortal";
import { useSearchParams } from "react-router-dom";

const HRMDashboard = () => {
  const [searchParams] = useSearchParams();
  const role = searchParams.get("role") as "admin" | "company" | "manager" | "assistant-manager" | "employee" | null;
  
  return <HRMPortal userRole={role || "admin"} />;
};

export default HRMDashboard;
