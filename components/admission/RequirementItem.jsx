import { Check } from "lucide-react";

const RequirementItem = ({ children }) => {
  if (!children) {
    return null;
  }

  return (
    <li className="flex gap-3">
      <div className="mt-1 flex-shrink-0">
        <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center">
          <Check className="h-3 w-3 text-primary" />
        </div>
      </div>
      <span>{children}</span>
    </li>
  );
};

export default RequirementItem;
