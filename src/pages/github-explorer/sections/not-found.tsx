import React from "react";

import { Iconify } from "src/components/iconify";
import { Alert, AlertDescription, AlertTitle } from "src/components/ui/alert";

interface UserNotFoundProps {
  type: string;
}

export const NotFound: React.FC<UserNotFoundProps> = ({ type }) => {
  return (
    <Alert variant="default" className="flex text-blue-400 dark:text-blue-500">
      <span className="text-blue-400 dark:text-blue-500 mr-2">
        <Iconify icon="tabler:info-circle" size={24} />
      </span>
      <div>
        <AlertTitle>No {type} found</AlertTitle>
        <AlertDescription>
          No {type} found for the search query.
        </AlertDescription>
      </div>
    </Alert>
  );
};
