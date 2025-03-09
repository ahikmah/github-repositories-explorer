import React from "react";

import { Iconify } from "src/components/iconify";
import { Alert, AlertDescription, AlertTitle } from "src/components/ui/alert";

interface ErrorProps {
  message: string;
}

export const Error: React.FC<ErrorProps> = ({ message }) => {
  return (
    <div>
      <Alert variant="destructive">
        <Iconify icon="tabler:alert-triangle" size={24} />
        <AlertTitle>Failed to fetch data</AlertTitle>
        <AlertDescription>
          {message || "An error occurred. Please try again later."}
        </AlertDescription>
      </Alert>
    </div>
  );
};
