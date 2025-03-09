import React, { useState } from "react";

import {
  Accordion,
  AccordionTrigger,
  AccordionContent,
  AccordionItem,
} from "src/components/ui/accordion";

import { User } from "src/types/user";

import { RepoResult } from "./repo-result";

export interface UserResultProps {
  users: User[];
}

export const UserResult: React.FC<UserResultProps> = ({
  users,
}: UserResultProps) => {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  return (
    <>
      {users?.map((user: User) => (
        <div key={user.id}>
          <Accordion
            type="single"
            collapsible
            className="mb-5"
            value={openAccordion || ""}
            onValueChange={(value: string) => setOpenAccordion(value)}
          >
            <AccordionItem
              value={user.login}
              className="border-2 rounded-md p-3"
            >
              <AccordionTrigger className="flex justify-between items-center w-full">
                {user.login}
              </AccordionTrigger>
              <AccordionContent className="mt-3">
                <div className="ml-3">
                  <RepoResult username={user.login} />
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      ))}
    </>
  );
};
